import { useNavigate } from "react-router-dom";

function Demo() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="auth-card">
        <h1>PayFlow Demo 🚀</h1>

        <p>
          This demo shows how PayFlow can help businesses accept and manage
          payments in one place.
        </p>

        <button
          className="primary-button"
          onClick={() => navigate("/dashboard")}
        >
          Open Dashboard →
        </button>

        <button
          className="secondary-button"
          onClick={() => navigate("/")}
        >
          ← Back to home
        </button>
      </div>
    </div>
  );
}

export default Demo;