import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Payments() {
  const [payments, setPayments] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 4;
  const navigate = useNavigate();

  const start = (page - 1) * pageSize;
  const paginatedPayments = payments.slice(start, start + pageSize);

  const deletePayment = async (id) => {
    try {
      await axios.delete(`http://localhost:5054/api/payments/${id}`);

      fetchPayments();
    } catch (error) {
      console.log(error);
    }
  };

  const editPayment = (payment) => {
    console.log(payment);
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    const res = await axios.get("http://localhost:5054/api/payments");

    setPayments(res.data);
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Navbar />

        <div className="content">
          <h2>Payments</h2>

          <table border="1">
            <thead>
              <tr>
                <th>Receipt No</th>
                <th>Date</th>
                <th>Invoice</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {paginatedPayments.map((p, index) => (
                <tr key={p.id}>
                  <td>{"RCPT-" + String(index + 1).padStart(3, "0")}</td>

                  <td>{p.paymentDate}</td>
                  <td>{p.invoiceId}</td>
                  <td>{p.amount}</td>
                  <td>{p.paymentMethod}</td>

                  <td>
                    <button onClick={() => navigate(`/editPayment/${p.id}`)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => deletePayment(p.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: "20px" }}>
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
              Prev
            </button>

            <span style={{ margin: "0 10px" }}>Page {page}</span>

            <button
              onClick={() => setPage(page + 1)}
              disabled={start + pageSize >= payments.length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
