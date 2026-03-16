import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Customers from "./pages/Customers"
import AddCustomer from "./pages/AddCustomer"
import Invoices from "./pages/Invoices"
import CreateInvoice from "./pages/CreateInvoice"
import AddPayment from "./pages/AddPayment"
import Payments from "./pages/Payments"
import EditPayment from "./pages/EditPayment"


function App(){

  return(

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/customers" element={<Customers/>} />
        <Route path="/add-customer" element={<AddCustomer/>} />
        <Route path="/invoices" element={<Invoices/>} />
        <Route path="/create-invoice" element={<CreateInvoice/>} />
        <Route path="/add-payment/:id" element={<AddPayment/>}/>
        <Route path="/payments" element={<Payments/>} />
        <Route path="/editPayment/:id" element={<EditPayment/>}/>
      </Routes>

    </BrowserRouter>

  )

}

export default App