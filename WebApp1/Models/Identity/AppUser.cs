using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace WebApp1.Models.Identity
{
    public class AppUser : IdentityUser
    {
        public ICollection<Todo> Todos { get; set; }
    }
}
