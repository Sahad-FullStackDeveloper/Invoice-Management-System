Invoice Management System

A full-stack Invoice and Payment Management System built using React and ASP.NET Core Web API.

🚀 Tech Stack

Frontend

React

Axios

React Router

CSS

Backend

ASP.NET Core Web API

Entity Framework Core

Database

PostgreSQL

👥 User Roles

Admin

Full access

Manage Customers, Invoices, Payments

Sales

Access to Customers and Invoices

Can create invoices

Accountant

Access to Payments

Can manage receipts

✨ Features

User login system

Role-based access control

Customer management

Invoice creation and tracking

Payment management

Auto balance calculation

Pagination for invoices and payments

Dashboard statistics

Responsive UI

📊 Project Architecture

React Frontend
⬇
ASP.NET Core Web API
⬇
Entity Framework Core
⬇
PostgreSQL Database

⚙️ Installation Guide
1️⃣ Clone the Repository
git clone [https://https://github.com/Sahad-FullStackDeveloper/Invoice-Management-System.git](https://github.com/Sahad-FullStackDeveloper/Invoice-Management-System)
2️⃣ Backend Setup

Navigate to backend folder

cd InvoiceSystemAPI

Install dependencies

dotnet restore

Run database migrations

dotnet ef database update

Start backend server

dotnet run

Backend will run at

http://localhost:5054
3️⃣ Frontend Setup

Navigate to frontend folder

cd invoice-system-ui

Install dependencies

npm install

Run React app

npm run dev

Frontend will run at

http://localhost:5173
🔑 Default Login Credentials

Admin
Username: admin
Password: admin123

Sales
Username: sales
Password: sales123

Accountant
Username: accountant
Password: accountant123

📁 Project Structure
InvoiceSystemAPI/
  Controllers/
  Models/
  Data/

invoice-system-ui/
  components/
  pages/
  services/
  styles/


📌 Author
Developed by Sahad KV
