import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const payments = [
  {
    id: "pay_8Kf29XnL4",
    customer: "Arjun Sharma",
    amount: "₹2,499",
    status: "Succeeded",
  },
  {
    id: "pay_7Hd82LmQ2",
    customer: "Priya Reddy",
    amount: "₹1,250",
    status: "Processing",
  },
  {
    id: "pay_4Jk91RsT8",
    customer: "Rahul Kumar",
    amount: "₹5,999",
    status: "Failed",
  },
  {
    id: "pay_2Xp73MnP9",
    customer: "Sneha Patel",
    amount: "₹3,450",
    status: "Succeeded",
  },
];

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-layout">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div
          className="dashboard-logo"
          onClick={() => navigate("/dashboard")}
          style={{ cursor: "pointer" }}
        >
          <div className="logo-icon">P</div>
          <span>PayFlow</span>
        </div>

        <div className="sidebar-menu">

          {/* OVERVIEW */}
          <button
            className="sidebar-item active"
            onClick={() => navigate("/dashboard")}
          >
            Overview
          </button>

          {/* PAYMENTS */}
          <button
            className="sidebar-item"
            onClick={() => navigate("/payments")}
          >
            Payments
          </button>

          <button
            className="sidebar-item"
            onClick={() => navigate("/transactions")}
          >
            Transactions
          </button>

          {/* CUSTOMERS */}
          <button
            className="sidebar-item"
            onClick={() => alert("Customers feature coming soon!")}
          >
            Customers
          </button>

          {/* REFUNDS */}
          <button
            className="sidebar-item"
            onClick={() => alert("Refunds feature coming soon!")}
          >
            Refunds
          </button>

          {/* ANALYTICS */}
          <button
            className="sidebar-item"
            onClick={() => alert("Analytics feature coming soon!")}
          >
            Analytics
          </button>

        </div>

        <div className="sidebar-bottom">

          <button
            className="sidebar-item"
            onClick={() =>
              alert("Developer documentation coming soon!")
            }
          >
            Developers
          </button>

          <button
            className="sidebar-item"
            onClick={() =>
              alert("Webhooks feature coming soon!")
            }
          >
            Webhooks
          </button>

          <button
            className="sidebar-item"
            onClick={() =>
              alert("Settings feature coming soon!")
            }
          >
            Settings
          </button>

          <button
            className="logout-button"
            onClick={() => navigate("/")}
          >
            ← Back to website
          </button>

        </div>

      </aside>

      {/* MAIN DASHBOARD */}
      <main className="dashboard-main">

        {/* TOP BAR */}
        <header className="dashboard-topbar">

          <div className="search-box">
            🔍

            <input
              type="text"
              placeholder="Search payments, customers..."
            />
          </div>

          <div className="topbar-actions">

            <button
              className="notification-btn"
              onClick={() =>
                alert("No new notifications! 🔔")
              }
            >
              🔔
            </button>

            <button
              className="create-payment-btn"
              onClick={() => navigate("/payments")}
            >
              + Create payment
            </button>

          </div>

        </header>

        {/* CONTENT */}
        <section className="dashboard-inner">

          {/* DASHBOARD HEADING */}
          <div className="dashboard-heading">

            <div>
              <p className="dashboard-date">
                PAYFLOW OVERVIEW
              </p>

              <h1>Good evening, Alex 👋</h1>

              <p>
                Here's what's happening with your payments today.
              </p>
            </div>

            <button
              className="date-button"
              onClick={() =>
                alert("Showing data for the last 30 days")
              }
            >
              Last 30 days ▾
            </button>

          </div>

          {/* STATISTICS */}
          <div className="dashboard-stats">

            <div className="metric-card">
              <p>Total payment volume</p>
              <h2>₹12,48,920</h2>

              <span className="positive">
                ↑ 12.5%
              </span>

              <small>vs last month</small>
            </div>

            <div className="metric-card">
              <p>Successful payments</p>
              <h2>1,248</h2>

              <span className="positive">
                ↑ 8.2%
              </span>

              <small>vs last month</small>
            </div>

            <div className="metric-card">
              <p>Failed payments</p>
              <h2>32</h2>

              <span className="negative">
                ↓ 14%
              </span>

              <small>vs last month</small>
            </div>

            <div className="metric-card">
              <p>Success rate</p>
              <h2>98.4%</h2>

              <span className="positive">
                ↑ 1.3%
              </span>

              <small>vs last month</small>
            </div>

          </div>

          {/* PAYMENT VOLUME */}
          <div className="dashboard-card chart-card">

            <div className="card-header">

              <div>
                <h2>Payment volume</h2>
                <p>Payment activity over time</p>
              </div>

              <button
                onClick={() =>
                  alert("Chart period: Last 30 days")
                }
              >
                Last 30 days ▾
              </button>

            </div>

            <div className="chart-placeholder">

              <div className="chart-line"></div>

              <div className="chart-labels">
                <span>Aug 1</span>
                <span>Aug 7</span>
                <span>Aug 14</span>
                <span>Aug 21</span>
                <span>Today</span>
              </div>

            </div>

          </div>

          {/* RECENT PAYMENTS */}
          <div className="dashboard-card">

            <div className="card-header">

              <div>
                <h2>Recent payments</h2>
                <p>Your latest payment activity.</p>
              </div>

              <button
                className="view-all"
                onClick={() => navigate("/payments")}
              >
                View all →
              </button>

            </div>

            <div className="table-container">

              <table>

                <thead>
                  <tr>
                    <th>PAYMENT ID</th>
                    <th>CUSTOMER</th>
                    <th>AMOUNT</th>
                    <th>STATUS</th>
                  </tr>
                </thead>

                <tbody>

                  {payments.map((payment) => (

                    <tr key={payment.id}>

                      <td>
                        <strong>{payment.id}</strong>
                      </td>

                      <td>
                        {payment.customer}
                      </td>

                      <td>
                        <strong>{payment.amount}</strong>
                      </td>

                      <td>

                        <span
                          className={`status-badge ${payment.status.toLowerCase()}`}
                        >
                          {payment.status}
                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;