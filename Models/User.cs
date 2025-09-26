using System.ComponentModel.DataAnnotations.Schema;

namespace Appointment_Scheduling.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Organisation { get; set; }

        //[ForeignKey("AppointmentId")]
        public ICollection<Appointment> Appointment { get; set; }

        //public ICollection<User> userId { get; set; }
    }
}
