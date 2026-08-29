import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="page-container">
      <div className="auth-card">
        <div className="logo">
          <div className="logo-icon">P</div>
          <span>PayFlow</span>
        </div>

        <h1>Welcome back</h1>
        <p>Sign in to your PayFlow account.</p>

        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />

          <button type="submit" className="primary-button">
            Sign in →
          </button>
        </form>

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

export default Login;