import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles/editPayment.module.css";

function EditPayment() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("");

  useEffect(() => {
    fetchPayment();
  }, []);

  const fetchPayment = async () => {
    const res = await axios.get(`http://localhost:5054/api/payments/${id}`);

    setAmount(res.data.amount);
    setMethod(res.data.paymentMethod);
  };

  const updatePayment = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:5054/api/payments/${id}`, {
      amount: amount,
      paymentMethod: method,
    });

    navigate("/payments");
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.main}>
        <div className={styles.header}>
          <button
            className={styles.backBtn}
            onClick={() => navigate("/payments")}
          >
            ← Back
          </button>
        </div>

        <div className={styles.dashEdit}>
          <h2>Edit Payment</h2>

          <form onSubmit={updatePayment}>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <select value={method} onChange={(e) => setMethod(e.target.value)}>
              <option>Cash</option>
              <option>Bank</option>
              <option>Card</option>
            </select>

            <button type="submit">Update Payment</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPayment;
