using System.ComponentModel.DataAnnotations;

namespace WebApp1.Models.Identity
{
    public class LoginInputModel
    {
        [Required]
        public string UserNameOrEmail { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
