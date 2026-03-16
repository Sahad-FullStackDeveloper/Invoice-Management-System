import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "../styles/createInvoice.css"

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
    <div>
      <h2>Create Invoice</h2>

      <form onSubmit={handleSubmit}>
        <select
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

        <br />
        <br />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <br />
        <br />

        <input
          type="date"
          value={invoiceDate}
          onChange={(e) => setInvoiceDate(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Save Invoice</button>
      </form>
    </div>
  );
}

export default CreateInvoice;
