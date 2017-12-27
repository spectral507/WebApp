using System.ComponentModel.DataAnnotations;

namespace WebApp1.Models.Identity
{
    public class UserInputModel
    {
        public string UserName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
