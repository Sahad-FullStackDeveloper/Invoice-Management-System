using System.ComponentModel.DataAnnotations.Schema;
namespace InvoiceSystemAPI.Models
{
    [Table("invoices")]
    public class Invoice
    {
        [Column("id")]
        public int Id {get; set;}

        [Column("customer_id")]
        public int CustomerId {get; set;}

        [Column("invoice_date")]
        public DateOnly InvoiceDate { get; set;}

        [Column("amount")]
        public decimal Amount {get; set;}

        [Column("paid_amount")]
        public decimal PaidAmount { get; set;} = 0;

        [Column("balance")]
        public decimal Balance {get; set;}


    }
}