import { useState } from "react";
import API from "../services/api";
import { useParams } from "react-router-dom";
import styles from "../styles/addPayment.module.css";
import { useNavigate } from "react-router-dom";

function AddPayment() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [invoiceId, setInvoiceId] = useState(id);
  const [amount, setAmount] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/payments", {
        invoiceId,
        amount,
        paymentDate,
        paymentMethod,
      });

      alert("Payment Saved");
      //
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button
          className={styles.backBtn}
          onClick={() => navigate("/invoices")}
        >
          ← Back
        </button>
      </div>
      <div className={styles.card}>
        <h2 className={styles.title}>Add Payment</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input className={styles.input} value={invoiceId} readOnly />

          <input
            className={styles.input}
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <input
            className={styles.input}
            type="date"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
          />

          <input
            className={styles.input}
            placeholder="Payment Method"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />

          <button className={styles.submitBtn} type="submit">
            Save Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPayment;
