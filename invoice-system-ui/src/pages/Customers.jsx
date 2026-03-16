import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/customers.css";

function Customers() {
  const [customers, setCustomers] = useState([]);

  // delete function
  const deleteCustomer = async (id) => {
    try {
      await API.delete(`/customers/${id}`);

      alert("Customer Deleted");

      // refresh list
      fetchCustomers();
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await API.get("/Customers");

        console.log(response.data);

        setCustomers(response.data);
      } catch (error) {
        console.log("Customer API Error:", error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Navbar />

        <div className="content">
          <h1>Customers</h1>

          <button className="add-btn" onClick={() => navigate("/add-customer")}>
            Add Customer
          </button>

          <table className="customer-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>

                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => deleteCustomer(customer.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Customers;
