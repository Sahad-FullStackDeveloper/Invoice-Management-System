import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import styles from "../styles/createInvoice.module.css";

function CreateInvoice() {
  const navigate = useNavigate();

  const [customers, setCustomers] = useState([]);
  const [customerId, setCustomerId] = useState("");
  const [amount, setAmount] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");

  const fetchCustomers = async () => {
    try {
      const res = await API.get("/customers");
      setCustomers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/invoices", {
        customerId,
        amount,
        invoiceDate,
      });

      alert("Invoice Created");
      navigate("/invoices");
    } catch (error) {
      console.log(error);
      alert("Error creating invoice");
    }
  };

  return (
    

    <div className={styles.page}>
      <div className={styles.header}>
        <button
          className={styles.backBtn}
          onClick={() => navigate("/invoices")}
        >
          ← Back
        </button>
      </div>

      <div className={styles.main}>
        <div className={styles.container}>
          <h2 className={styles.title}>Create Invoice</h2>

          <form className={styles.form} onSubmit={handleSubmit}>
            <select
              className={styles.select}
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
            >
              <option value="">Select Customer</option>
              {customers.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>

            <input
              className={styles.input}
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <input
              className={styles.input}
              type="date"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
            />

            <button className={styles.submitBtn} type="submit">
              Save Invoice
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateInvoice;
