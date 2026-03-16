import { Link } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {

    const role = localStorage.getItem("role")

  return (
    <div className="sidebar">
      <h2>⚡ InvoiceApp</h2>

      <ul>
        {role === "Admin" && (
          <>
           <li>
          <Link to="/dashboard">📊 Dashboard</Link>
        </li>

        <li>
          <Link to="/customers">👥 Customers</Link>
        </li>

        <li>
          <Link to="/invoices">🧾 Invoices</Link>
        </li>

        <li>
          <Link to="/payments">💰 Payments</Link>
        </li>
          </>
        )}

        {role === "Sales" && (
          <>
             <li>
          <Link to="/customers">👥 Customers</Link>
        </li>

        <li>
          <Link to="/invoices">🧾 Invoices</Link>
        </li>
          </>
        )}

        {role === "Accountant" && (
          <>
           <li>
          <Link to="/payments">💰 Payments</Link>
        </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
