using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.JsonPatch;
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
        private UserManager<IdentityUser> userManager;
        private SignInManager<IdentityUser> signInManager;

        public UserValuesController(UserManager<IdentityUser> userMgr,
            SignInManager<IdentityUser> signInMgr)
        {
            userManager = userMgr;
            signInManager = signInMgr;
        }

        [HttpGet]
        public IActionResult GetUsers()
        {
            var users = userManager.Users.Select(user => new UserViewModel
            {
                Id = user.Id,
                UserName = user.UserName,
                Email = user.Email
            });
            return Ok(users);
        }

        [HttpGet("{id}")]
        public IActionResult GetUser(string id)
        {
            var user = userManager.Users.FirstOrDefault(
                u => string.Compare(u.Id, id, StringComparison.Ordinal) == 0);

            if (user != null)
            {
                return Ok(new UserViewModel
                {
                    Id = user.Id,
                    UserName = user.UserName,
                    Email = user.Email
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
                IdentityUser user = new IdentityUser
                {
                    UserName = model.UserName ?? model.Email,
                    Email = model.Email
                };
                IdentityResult result = await userManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                {
                    return StatusCode(StatusCodes.Status204NoContent);
                }
                else
                {
                    Dictionary<string, List<string>> errors = new Dictionary<string, List<string>>();
                    errors[""] = new List<string>();
                    foreach (IdentityError error in result.Errors)
                    {
                        errors[""].Add(error.Description);
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
            IdentityUser user = await userManager.FindByIdAsync(id);
            if (user != null)
            {
                IdentityResult result = await userManager.DeleteAsync(user);

                if (result.Succeeded)
                {
                    return StatusCode(StatusCodes.Status204NoContent);
                }
                else
                {
                    Dictionary<string, List<string>> errors = new Dictionary<string, List<string>>();
                    errors[""] = new List<string>();
                    foreach (IdentityError error in result.Errors)
                    {
                        errors[""].Add(error.Description);
                    }
                    HttpContext.Response.StatusCode = StatusCodes.Status500InternalServerError;
                    return Json(errors);
                }
            }
            return StatusCode(StatusCodes.Status204NoContent);
        }
    }
}
