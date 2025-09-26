using Microsoft.EntityFrameworkCore;
namespace Appointment_Scheduling.Models
{
    public class appointmentsContext : DbContext
    {
        public appointmentsContext(DbContextOptions<appointmentsContext> options) : base(options)
        {


        }
        public DbSet<appointments> appointments { get; set; } = null!;
    }
}
