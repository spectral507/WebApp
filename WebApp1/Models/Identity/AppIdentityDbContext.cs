using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace WebApp1.Models.Identity
{
    public class AppIdentityDbContext : IdentityDbContext<IdentityUser>
    {
        public AppIdentityDbContext(DbContextOptions<AppIdentityDbContext> options)
            : base(options) { }

        public static async Task CreateAdminAccountAsync(IServiceProvider serviceProvider)
        {
            UserManager<IdentityUser> userManager =
                serviceProvider.GetRequiredService<UserManager<IdentityUser>>();
            RoleManager<IdentityRole> roleManager =
                serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            IConfiguration configuration = serviceProvider.GetRequiredService<IConfiguration>();
            ILogger<AppIdentityDbContext> logger =
                serviceProvider.GetRequiredService<ILogger<AppIdentityDbContext>>();

            serviceProvider.GetRequiredService<AppIdentityDbContext>().Database.Migrate();

            string userName = configuration["Data:Identity:AdminUser:UserName"];
            string email = configuration["Data:Identity:AdminUser:Email"];
            string password = configuration["Data:Identity:AdminUser:Password"];
            string role = configuration["Data:Identity:AdminUser:Role"];

            if (await userManager.FindByNameAsync(userName) == null)
            {
                if (await roleManager.FindByNameAsync(role) == null)
                {
                    await roleManager.CreateAsync(new IdentityRole(role));
                }

                IdentityUser user = new IdentityUser()
                {
                    UserName = userName,
                    Email = email
                };

                IdentityResult result = await userManager.CreateAsync(user, password);
                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(user, role);
                    logger.LogInformation("Admin account has been created");
                }
                else
                {
                    foreach (var error in result.Errors)
                    {
                        logger.LogError("Admin account creation failed: {0}", error.Description);
                    }
                }
            }
        }
    }
}
