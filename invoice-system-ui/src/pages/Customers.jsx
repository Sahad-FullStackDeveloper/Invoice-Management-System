import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import styles from "../styles/customers.module.css";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 4;

  const start = (page - 1) * pageSize;
  const paginatedCustomers = customers.slice(start, start + pageSize);

  const navigate = useNavigate();

  const fetchCustomers = async () => {
    try {
      const response = await API.get("/Customers");

      console.log(response.data);

      setCustomers(response.data);
    } catch (error) {
      console.log("Customer API Error:", error);
    }
  };
  

  useEffect(() => {
    fetchCustomers();
  }, []);

  const deleteCustomer = async (id) => {
    try {
      await API.delete(`/customers/${id}`);

      alert("Customer Deleted");

      fetchCustomers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.dashboard}>
      <Sidebar />

      <div className={styles.main}>
        <Navbar />

        <div className={styles.content}>
          <h1>Customers</h1>

          <button
            className={styles.addBtn}
            onClick={() => navigate("/add-customer")}
          >
            Add Customer
          </button>
        </div>

        <table className={styles.customerTable}>
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
            {paginatedCustomers.map((customer, index) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>

                <td>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => deleteCustomer(customer.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.pagination}>
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Prev
          </button>

          <span>Page {page}</span>

          <button
            onClick={() => setPage(page + 1)}
            disabled={start + pageSize >= customers.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Customers;
