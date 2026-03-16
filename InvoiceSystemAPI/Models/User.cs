using System.ComponentModel.DataAnnotations.Schema;

namespace InvoiceSystemAPI.Models
{
     [Table("users")]
   public class User
    {

        [Column("id")]
        public int Id { get; set; }

        [Column("username")]
        public string Username { get; set; } = "";

        [Column("password")]
        public string Password { get; set; } = "";

        [Column("role")]
        public string Role { get; set; } = "";
    }

}