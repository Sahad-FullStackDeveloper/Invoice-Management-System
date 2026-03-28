namespace InvoiceSystemAPI.Models
{
    public class LoginRequest
    {
        public string Username{ get; set; } = "";
        public string Password{ get; set; } = "";
    }
}

// { 
//   "ConnectionStrings": { 
//     "DefaultConnection": "Host=db.yofvghgktasdjigzikmd.supabase.co;Database=postgres;Username=postgres;Password=JIzVV50mQwu5QRWI;SSL Mode=Require;Trust Server Certificate=true" 
//     } 
//   }