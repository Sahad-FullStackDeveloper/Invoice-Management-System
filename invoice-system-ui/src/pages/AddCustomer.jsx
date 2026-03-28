import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import styles from "../styles/addCustomers.module.css";

function AddCustomer() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/customers", {
        name,
        email,
        phone,
      });

      alert("Customer Added");
     navigate("/customers");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <button className={styles.backBtn} onClick={() => navigate("/customers")}>
        ← Go Back
      </button>
      <div className={styles.formBox}>
        <h2>Add Customer</h2>

        <form onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className={styles.input}
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button className={styles.submitBtn} type="submit">
            Save Customer
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCustomer;
