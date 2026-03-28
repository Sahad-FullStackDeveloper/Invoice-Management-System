import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {
  const role = localStorage.getItem("role");

  return (
    <div className="sidebar">
      <h2 className="inMain">⚡ InvoiceApp</h2>

      <ul>
        {role === "Admin" && (
          <>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => isActive ? "active" : ""}
              >
                📊 Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/customers"
                className={({ isActive }) => isActive ? "active" : ""}
              >
                👥 Customers
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/invoices"
                className={({ isActive }) => isActive ? "active" : ""}
              >
                🧾 Invoices
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/payments"
                className={({ isActive }) => isActive ? "active" : ""}
              >
                💰 Payments
              </NavLink>
            </li>
          </>
        )}

        {role === "Sales" && (
          <>
            <li>
              <NavLink
                to="/customers"
                className={({ isActive }) => isActive ? "active" : ""}
              >
                👥 Customers
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/invoices"
                className={({ isActive }) => isActive ? "active" : ""}
              >
                🧾 Invoices
              </NavLink>
            </li>
          </>
        )}

        {role === "Accountant" && (
          <>
            <li>
              <NavLink
                to="/payments"
                className={({ isActive }) => isActive ? "active" : ""}
              >
                💰 Payments
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Sidebar;