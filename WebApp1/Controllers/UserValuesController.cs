using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp1.Models.Identity;

namespace WebApp1.Controllers
{
    [Authorize(Roles = "Administrator")]
    [Route("api/users")]
    public class UserValuesController : Controller
    {
        private UserManager<AppUser> userManager;
        private SignInManager<AppUser> signInManager;
        private AppIdentityDbContext context;

        public UserValuesController(UserManager<AppUser> userMgr,
            SignInManager<AppUser> signInMgr, AppIdentityDbContext ctx)
        {
            userManager = userMgr;
            signInManager = signInMgr;
            context = ctx;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var userTasks = userManager.Users.AsEnumerable().Select(async user => new UserDetailsViewModel
            {
                Id = user.Id,
                UserName = user.UserName,
                Email = user.Email,
                IsAdministrator = await userManager.IsInRoleAsync(user, "Administrator")
            });
            var users = await Task.WhenAll(userTasks);
            return Ok(users);
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(string id)
        {
            string userName = HttpContext.User.Identity.Name;
            if (userName == null) return Unauthorized();

            var currentUser = await userManager.FindByNameAsync(userName);
            if (currentUser.Id != id) return Forbid();

            var user = userManager.Users.FirstOrDefault(
                u => string.Compare(u.Id, id, StringComparison.Ordinal) == 0);

            if (user != null)
            {
                return Ok(new UserDetailsViewModel
                {
                    Id = user.Id,
                    UserName = user.UserName,
                    Email = user.Email,
                    IsAdministrator = await userManager.IsInRoleAsync(user, "Administrator")
                });
            }
            return NotFound();
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] UserInputModel model)
        {
            if (ModelState.IsValid)
            {
                AppUser user = new AppUser
                {
                    UserName = string.IsNullOrEmpty(model.UserName) ? model.Email : model.UserName,
                    Email = model.Email
                };
                IdentityResult result = await userManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                {
                    return Ok(new { user.Id });
                }
                else
                {
                    Dictionary<string, List<string>> errors = new Dictionary<string, List<string>>();
                    string[] userNameErrorsToProcess = new string[]
                    {
                        "DuplicateUserName",
                        "InvalidUserName"
                    };
                    string[] passwordErrorsToProcess = new string[]
                    {
                        "PasswordTooShort",
                        "PasswordRequiresNonAlphanumeric",
                        "PasswordRequiresDigit",
                        "PasswordRequiresUpper"
                    };
                    foreach (IdentityError error in result.Errors)
                    {
                        if (userNameErrorsToProcess.Contains(error.Code))
                        {
                            if (!errors.ContainsKey(nameof(UserInputModel.UserName)))
                                errors.Add(nameof(UserInputModel.UserName), new List<string>());
                            errors[nameof(UserInputModel.UserName)].Add(error.Code);
                        }
                        if (passwordErrorsToProcess.Contains(error.Code))
                        {
                            if (!errors.ContainsKey(nameof(UserInputModel.Password)))
                                errors.Add(nameof(UserInputModel.Password), new List<string>());
                            errors[nameof(UserInputModel.Password)].Add(error.Code);
                        }
                    }
                    HttpContext.Response.StatusCode = StatusCodes.Status422UnprocessableEntity;
                    return Json(errors);
                }
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(string id)
        {
            AppUser user = await userManager.FindByIdAsync(id);
            if (user != null)
            {
                context.Entry<AppUser>(user).Collection(u => u.Todos).Load();
                context.RemoveRange(user.Todos);
                await context.SaveChangesAsync();

                IdentityResult result = await userManager.DeleteAsync(user);

                if (!result.Succeeded)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError);
                }
            }
            return StatusCode(StatusCodes.Status204NoContent);
        }
    }
}
