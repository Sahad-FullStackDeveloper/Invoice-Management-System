using Microsoft.AspNetCore.Mvc;
using InvoiceSystemAPI.Data;
using InvoiceSystemAPI.Models;

namespace InvoiceSystemAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class InvoicesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public InvoicesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetInvoices()
        {
            var invoices = _context.Invoices.ToList();
            return Ok(invoices);
        }

        [HttpPost]
        public IActionResult AddInvoice(Invoice invoice)
        {
            invoice.PaidAmount = 0;
            invoice.Balance = invoice.Amount;
            

            _context.Invoices.Add(invoice);
            _context.SaveChanges();

            return Ok(invoice);
        }
    }
}