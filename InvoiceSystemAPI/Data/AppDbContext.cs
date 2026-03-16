using Microsoft.EntityFrameworkCore;
using InvoiceSystemAPI.Models;

namespace InvoiceSystemAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options){}
    

        public DbSet<User> Users { get; set; }
        
        public DbSet<Customer> Customers { get; set; }

        public DbSet<Invoice> Invoices { get; set; }
        
        public DbSet<Payment> Payments { get; set; }
    }

    
}