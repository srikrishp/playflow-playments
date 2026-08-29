import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo" onClick={() => navigate("/")}>
          <div className="logo-icon">P</div>
          <span>PayFlow</span>
        </div>

        <div className="nav-links">
          <a href="#product">Product</a>
          <a href="#solutions">Solutions</a>
          <a href="#developers">Developers</a>
          <a href="#pricing">Pricing</a>
        </div>

        <div className="nav-actions">
          <button className="sign-in" onClick={() => navigate("/login")}>
            Sign in
          </button>

          <button
            className="start-button"
            onClick={() => navigate("/dashboard")}
          >
            Start building →
          </button>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="badge">
            <span className="status-dot"></span>
            Modern payment infrastructure
          </div>

          <h1>
            Payments infrastructure
            <br />
            <span>built for the internet.</span>
          </h1>

          <p className="hero-text">
            Accept, manage, and monitor payments with a powerful platform
            designed for reliability, speed, and simplicity.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={() => navigate("/dashboard")}
            >
              Start building →
            </button>

            <button
              className="secondary-button"
              onClick={() => navigate("/demo")}
            >
              View demo
            </button>
          </div>
        </section>

        <section className="dashboard-preview">
          <div className="preview-top">
            <div>
              <p className="preview-label">PAYFLOW DASHBOARD</p>
              <h2>Your payments, at a glance.</h2>
            </div>

            <div className="live-status">
              <span className="live-dot"></span>
              All systems operational
            </div>
          </div>

          <div className="stats">
            <div className="stat-card">
              <p>Total volume</p>
              <h3>₹12,48,920</h3>
              <span className="growth">↑ 12.5%</span>
            </div>

            <div className="stat-card">
              <p>Successful payments</p>
              <h3>1,248</h3>
              <span className="growth">↑ 8.2%</span>
            </div>

            <div className="stat-card">
              <p>Success rate</p>
              <h3>98.4%</h3>
              <span className="growth">↑ 1.3%</span>
            </div>
          </div>

          <div className="payment-list">
            <div className="payment-list-header">
              <h3>Recent payments</h3>

              <button onClick={() => navigate("/dashboard")}>
                View all →
              </button>
            </div>

            <div className="payment-row">
              <div>
                <strong>pay_8Kf29XnL4</strong>
                <p>Arjun Sharma</p>
              </div>

              <strong>₹2,499</strong>

              <span className="payment-status success">
                Succeeded
              </span>
            </div>

            <div className="payment-row">
              <div>
                <strong>pay_7Hd82LmQ2</strong>
                <p>Priya Reddy</p>
              </div>

              <strong>₹1,250</strong>

              <span className="payment-status processing">
                Processing
              </span>
            </div>

            <div className="payment-row">
              <div>
                <strong>pay_4Jk91RsT8</strong>
                <p>Rahul Kumar</p>
              </div>

              <strong>₹5,999</strong>

              <span className="payment-status failed">
                Failed
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;