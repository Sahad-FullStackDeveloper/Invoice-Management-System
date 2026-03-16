import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "../styles/invoices.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Invoices() {
  const [invoices, setInvoices] = useState([]);
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const pageSize = 3;

  const start = (page - 1) * pageSize;
  const paginatedInvoices = invoices.slice(start, start + pageSize);

  const fetchInvoices = async () => {
    try {
      const res = await API.get("/invoices");

      setInvoices(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  

  const fetchCustomers = async () => {
    try {
      const res = await API.get("/customers");
      setCustomers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInvoices();
    fetchCustomers();
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Navbar />

        <div>
          <div className="invoice-header">
            <h1>Invoices</h1>

            <button
              className="create-btn"
              onClick={() => navigate("/create-invoice")}
            >
              Create Invoice
            </button>
          </div>

          <table className="bala">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Paid</th>
                <th>Remaining</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {paginatedInvoices.map((inv) => (
                <tr key={inv.id}>
                  <td>{"INV-" + String(inv.id).padStart(3, "0")}</td>

                  <td>
                    {customers.find((c) => c.id === inv.customerId)?.name}
                  </td>

                  <td>{inv.amount}</td>

                  <td>{inv.paidAmount}</td>

                  <td>{inv.amount - inv.paidAmount}</td>

                  <td>{inv.invoiceDate}</td>

                  
                  <td>
                    <span
                      className={
                        inv.paidAmount === 0
                          ? "status unpaid"
                          : inv.paidAmount < inv.amount
                            ? "status partial"
                            : "status paid"
                      }
                    >
                      {inv.paidAmount === 0
                        ? "Unpaid"
                        : inv.paidAmount < inv.amount
                          ? "Partially Paid"
                          : "Paid"}
                    </span>
                  </td>

                  <td>
                    <button
                      className="pay-btn"
                      onClick={() => navigate(`/add-payment/${inv.id}`)}
                    >
                      Add Payment
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Prev
          </button>

          <button
            onClick={() => setPage(page + 1)}
            disabled={page * pageSize >= invoices.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Invoices;

