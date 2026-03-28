import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/dashboard.module.css";

function Dashboard() {


    const [totalCustomers, setTotalCustomers] = useState(0);
const [totalInvoices, setTotalInvoices] = useState(0);
const [totalPayments, setTotalPayments] = useState(0);
const [totalRevenue, setTotalRevenue] = useState(0);

useEffect(() => {
  fetchDashboardData();
}, []);

const fetchDashboardData = async () => {

  const customersRes = await axios.get("http://localhost:5054/api/customers");
  setTotalCustomers(customersRes.data.length);

  const invoicesRes = await axios.get("http://localhost:5054/api/invoices");
  setTotalInvoices(invoicesRes.data.length);

  const paymentsRes = await axios.get("http://localhost:5054/api/payments");
  setTotalPayments(paymentsRes.data.length);

  let revenue = 0;
  paymentsRes.data.forEach(p => {
    revenue += p.amount;
  });

  setTotalRevenue(revenue);
};
//2

  return (
    <div className={styles.dashboard}>
      <Sidebar />

      <div className={styles.main}>
        <Navbar />

        <div className={styles.contend}>
          <h1>Dashboard</h1>

          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>Total Customers</h3>
              <p>{totalCustomers}</p>
            </div>

             <div className={styles.card}>
              <h3>Total   <br/> Invoices</h3>
              <p>{totalPayments} </p>
            </div>

            <div className={styles.card}>
              <h3>Total <br /> Payments</h3>
              <p>{totalPayments} </p>
            </div>

            <div className={styles.card}>
              <h3>Total <br /> Revenue</h3>
              <p> {totalRevenue} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
