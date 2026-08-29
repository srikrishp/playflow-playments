import "./Paymentspage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialPayments = [
  {
    id: "pay_8Kf29XnL4",
    customer: "Arjun Sharma",
    email: "arjun@example.com",
    amount: 2499,
    status: "Succeeded",
    date: "Aug 28, 2026",
  },
  {
    id: "pay_7Hd82LmQ2",
    customer: "Priya Reddy",
    email: "priya@example.com",
    amount: 1250,
    status: "Processing",
    date: "Aug 28, 2026",
  },
  {
    id: "pay_4Jk91RsT8",
    customer: "Rahul Kumar",
    email: "rahul@example.com",
    amount: 5999,
    status: "Failed",
    date: "Aug 27, 2026",
  },
  {
    id: "pay_2Xp73MnP9",
    customer: "Sneha Patel",
    email: "sneha@example.com",
    amount: 3450,
    status: "Succeeded",
    date: "Aug 27, 2026",
  },
  {
    id: "pay_9Lm52QwE7",
    customer: "Kiran Kumar",
    email: "kiran@example.com",
    amount: 1800,
    status: "Succeeded",
    date: "Aug 26, 2026",
  },
];

function Payments() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredPayments = initialPayments.filter((payment) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      payment.id.toLowerCase().includes(searchText) ||
      payment.customer.toLowerCase().includes(searchText) ||
      payment.email.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" || payment.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleCreatePayment = () => {
    alert("Create payment feature will be added next!");
  };

  return (
    <div className="payments-page">
      {/* TOP NAVIGATION */}
      <nav className="payments-navbar">
        <div
          className="logo payments-logo"
          onClick={() => navigate("/dashboard")}
        >
          <div className="logo-icon">P</div>
          <span>PayFlow</span>
        </div>

        <div className="payments-nav-right">
          <button
            onClick={() => navigate("/dashboard")}
          >
            ← Dashboard
          </button>

          <button
            className="create-payment-btn"
            onClick={handleCreatePayment}
          >
            + Create payment
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="payments-content">
        <div className="payments-heading">
          <div>
            <p className="dashboard-date">PAYMENTS</p>

            <h1>Payments</h1>

            <p>
              Manage and track all your payment transactions.
            </p>
          </div>

          <button
            className="create-payment-btn"
            onClick={handleCreatePayment}
          >
            + Create payment
          </button>
        </div>

        {/* SEARCH AND FILTER */}
        <div className="payments-controls">
          <div className="payments-search">
            🔍

            <input
              type="text"
              placeholder="Search by payment ID or customer..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />
          </div>

          <select
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(event.target.value)
            }
          >
            <option value="All">All statuses</option>
            <option value="Succeeded">Succeeded</option>
            <option value="Processing">Processing</option>
            <option value="Failed">Failed</option>
          </select>
        </div>

        {/* PAYMENTS TABLE */}
        <div className="payments-card">
          <div className="payments-card-header">
            <div>
              <h2>All payments</h2>

              <p>
                {filteredPayments.length} payment(s) found
              </p>
            </div>
          </div>

          <div className="table-container">
            <table className="full-payments-table">
              <thead>
                <tr>
                  <th>PAYMENT ID</th>
                  <th>CUSTOMER</th>
                  <th>EMAIL</th>
                  <th>AMOUNT</th>
                  <th>STATUS</th>
                  <th>DATE</th>
                </tr>
              </thead>

              <tbody>
                {filteredPayments.map((payment) => (
                  <tr key={payment.id}>
                    <td>
                      <strong>{payment.id}</strong>
                    </td>

                    <td>{payment.customer}</td>

                    <td className="payment-email">
                      {payment.email}
                    </td>

                    <td>
                      <strong>
                        ₹{payment.amount.toLocaleString("en-IN")}
                      </strong>
                    </td>

                    <td>
                      <span
                        className={`status-badge ${payment.status.toLowerCase()}`}
                      >
                        {payment.status}
                      </span>
                    </td>

                    <td>{payment.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredPayments.length === 0 && (
              <div className="no-results">
                No payments found 😢
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Payments;