using System.ComponentModel.DataAnnotations.Schema;

namespace InvoiceSystemAPI.Models
{
    [Table("payments")]
    public class Payment
    {
        [Column("id")]
        public int Id { get; set; }

        [Column("invoice_id")]
        public int InvoiceId { get; set; }

        [Column("payment_date")]
        public DateOnly PaymentDate { get; set; }

        [Column("amount")]
        public decimal Amount { get; set; }

        [Column("payment_method")]
        public string PaymentMethod { get; set; } = "";
    }
}