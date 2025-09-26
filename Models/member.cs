using System.ComponentModel.DataAnnotations.Schema;

namespace Appointment_Scheduling.Models
{
    public class member
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Organisation { get; set; }

        [ForeignKey("AppointmentId")]
        public ICollection<appointments> Appointments { get; set; }
    }
}
