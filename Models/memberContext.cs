using Microsoft.EntityFrameworkCore;

namespace Appointment_Scheduling.Models
{
    public class memberContext : DbContext
    {
        public memberContext(DbContextOptions<memberContext> options) : base(options)
        {


        }
        public DbSet<member> Members { get; set; } = null!;
    }
}
