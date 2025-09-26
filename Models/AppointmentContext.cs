using Microsoft.EntityFrameworkCore;

namespace Appointment_Scheduling.Models
{
    public class AppointmentContext : DbContext
    {
        public AppointmentContext(DbContextOptions<AppointmentContext> options) : base(options)
        {


        }
        public DbSet<Appointment> Appointment { get; set; } = null!;


    }
}
