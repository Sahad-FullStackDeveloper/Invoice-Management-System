using Microsoft.AspNetCore.Mvc;
using InvoiceSystemAPI.Data;
using InvoiceSystemAPI.Models;

namespace InvoiceSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PaymentsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult AddPayment(Payment payment)
        {
            var invoice = _context.Invoices.FirstOrDefault(i => i.Id == payment.InvoiceId);

            if (invoice == null)
                return NotFound("Invoice not found");

            invoice.PaidAmount += payment.Amount;
            invoice.Balance = invoice.Amount - invoice.PaidAmount;

            _context.Payments.Add(payment);

            _context.SaveChanges();

            return Ok(payment);
        }

        [HttpGet]
        public IActionResult GetPayments()
        {
            return Ok(_context.Payments.ToList());
        }

        [HttpPut("{id}")]
        public IActionResult UpdatePayment(int id, Payment payment)
        {
            var existingPayment = _context.Payments.Find(id);

            if (existingPayment == null)
            {
                return NotFound();
            }

            existingPayment.Amount = payment.Amount;
            existingPayment.PaymentMethod = payment.PaymentMethod;

            _context.SaveChanges();

            return Ok(existingPayment);
        }
        [HttpDelete("{id}")]
        public IActionResult DeletePayment(int id)
        {
            var payment = _context.Payments.Find(id);

            if (payment == null)
            {
                return NotFound();
            }

            _context.Payments.Remove(payment);
            _context.SaveChanges();

            return Ok();
        }

    }
}