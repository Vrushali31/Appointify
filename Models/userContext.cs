using Microsoft.EntityFrameworkCore;

namespace Appointment_Scheduling.Models
{
    public class userContext : DbContext
    {
        public userContext(DbContextOptions <userContext> options) : base(options)
            {
               
               
            }
        public DbSet<User> Users { get; set; } = null!;
    }
}
