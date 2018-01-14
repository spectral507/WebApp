using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using WebApp1.Models.Identity;

namespace WebApp1.Controllers
{
    [Route("api/account")]
    public class AccountController : Controller
    {
        private UserManager<AppUser> userManager;
        private SignInManager<AppUser> signInManager;
        private RoleManager<IdentityRole> roleManager;

        public AccountController(UserManager<AppUser> userMgr,
            SignInManager<AppUser> signInMgr, RoleManager<IdentityRole> roleMgr)
        {
            userManager = userMgr;
            signInManager = signInMgr;
            roleManager = roleMgr;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginInputModel creds)
        {
            if (ModelState.IsValid)
            {
                AppUser user = await userManager.FindByNameAsync(creds.UserNameOrEmail) ??
                    await userManager.FindByEmailAsync(creds.UserNameOrEmail);

                if (user != null)
                {
                    await signInManager.SignOutAsync();

                    Microsoft.AspNetCore.Identity.SignInResult result =
                        await signInManager.PasswordSignInAsync(user, creds.Password, true, false);

                    if (result.Succeeded)
                    {
                        IdentityRole role = await roleManager.FindByNameAsync("Administrator");

                        bool isAdmin = false;
                        if (role != null)
                        {
                            isAdmin = await userManager.IsInRoleAsync(user, role.Name);
                        }

                        return Ok(new UserViewModel
                        {
                            IsAuthenticated = true,
                            Details = new UserDetailsViewModel
                            {
                                Id = user.Id,
                                UserName = user.UserName,
                                Email = user.Email,
                                IsAdministrator = isAdmin
                            }
                        });
                    }
                }
                return Unauthorized();
            }
            return BadRequest(ModelState);
        }

        [HttpPost("state")]
        public async Task<IActionResult> GetAuthenticationState()
        {
            if (HttpContext.User.Identity.IsAuthenticated)
            {
                AppUser user =
                    await userManager.FindByNameAsync(HttpContext.User.Identity.Name);

                if (user != null)
                {
                    IdentityRole role = await roleManager.FindByNameAsync("Administrator");

                    bool isAdmin = false;
                    if (role != null)
                    {
                        isAdmin = await userManager.IsInRoleAsync(user, role.Name);
                    }

                    return Ok(new UserViewModel
                    {
                        IsAuthenticated = true,
                        Details = new UserDetailsViewModel
                        {
                            Id = user.Id,
                            UserName = user.UserName,
                            Email = user.Email,
                            IsAdministrator = isAdmin
                        }
                    });
                }
                else
                {
                    await signInManager.SignOutAsync();
                }
            }
            return Ok(new UserViewModel
            {
                IsAuthenticated = false,
                Details = null
            });
        }

        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            await signInManager.SignOutAsync();
            return StatusCode(StatusCodes.Status204NoContent);
        }
    }
}
