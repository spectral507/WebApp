using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApp1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [Authorize]
        public string Restricted()
        {
            return "authenticated users only info";
        }

        [Authorize(Roles = "Administrator")]
        public string AdminOnly()
        {
            return "administrator only info";
        }
    }
}
