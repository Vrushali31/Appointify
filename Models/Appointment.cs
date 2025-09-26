
using System.ComponentModel.DataAnnotations.Schema;

namespace Appointment_Scheduling.Models
{
    public class Appointment
    {
        public int id { get; set; }
        //public string  date= new DateOnly();

        //[Column(TypeName = "Date")] 
        public DateTime date { get; set; }
    

        public string day { get; set; }
        public DateTime time { get; set; }
        public string details { get; set; }
        public string status { get; set; }

        public int userID { get; set; }
        //public User User { get; set; }
    }
}
