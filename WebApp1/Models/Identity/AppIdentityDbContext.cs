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
    public class AppIdentityDbContext : IdentityDbContext<AppUser>
    {
        public AppIdentityDbContext(DbContextOptions<AppIdentityDbContext> options)
            : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<AppUser>()
                .HasMany(user => user.Todos)
                .WithOne(todo => todo.AppUser)
                .HasPrincipalKey(user => user.Id)
                .HasForeignKey(todo => todo.AppUserId)
                .OnDelete(DeleteBehavior.Cascade);
        }

        public static async Task CreateAdminAccountAsync(IServiceProvider serviceProvider)
        {
            UserManager<AppUser> userManager =
                serviceProvider.GetRequiredService<UserManager<AppUser>>();
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

                AppUser user = new AppUser()
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
