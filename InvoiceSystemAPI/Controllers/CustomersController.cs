using Microsoft.AspNetCore.Mvc;
using InvoiceSystemAPI.Data;
using InvoiceSystemAPI.Models;

namespace InvoiceSystemAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CustomersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetCustomers()
        {
            var customers = _context.Customers.ToList();
            return Ok(customers);
        }

        [HttpPost]
        public IActionResult AddCustomer(Customer customer)
        {
            _context.Customers.Add(customer);
            _context.SaveChanges();
            return Ok(customer);
        }

       [HttpDelete("{id}")]
public IActionResult DeleteCustomer(int id)
{
    var customer = _context.Customers.Find(id);

    if (customer == null)
    {
        return NotFound();
    }

    _context.Customers.Remove(customer);
    _context.SaveChanges();

    return Ok("Customer Deleted");
}
    }
}