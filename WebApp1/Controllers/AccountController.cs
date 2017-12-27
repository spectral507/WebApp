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
        private UserManager<IdentityUser> userManager;
        private SignInManager<IdentityUser> signInManager;

        public AccountController(UserManager<IdentityUser> userMgr,
            SignInManager<IdentityUser> signInMgr)
        {
            userManager = userMgr;
            signInManager = signInMgr;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginInputModel creds)
        {
            if (ModelState.IsValid)
            {
                IdentityUser user = await userManager.FindByNameAsync(creds.UserNameOrEmail) ??
                    await userManager.FindByEmailAsync(creds.UserNameOrEmail);

                if (user != null)
                {
                    await signInManager.SignOutAsync();

                    Microsoft.AspNetCore.Identity.SignInResult result =
                        await signInManager.PasswordSignInAsync(user, creds.Password, false, false);

                    if (result.Succeeded)
                    {
                        return StatusCode(StatusCodes.Status204NoContent);
                    }
                }
                return Unauthorized();
            }
            return BadRequest(ModelState);
        }

        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            await signInManager.SignOutAsync();
            return StatusCode(StatusCodes.Status204NoContent);
        }
    }
}
