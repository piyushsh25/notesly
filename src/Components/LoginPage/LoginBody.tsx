import { Link } from "react-router-dom";
import "../SignupPage/Signup.css";
export function LoginBody() {
  return (
    <div className="login-body">
      <div>or login using</div>
      <div className="login-form">
        <div className="username-container">
          <i className="bi bi-envelope email-icon"></i>
          <input
            type="email"
            placeholder="email-id"
            className="enter-username"
          />
        </div>
        <div className="password-container">
          <i className="bi bi-file-lock2 password-icon"></i>
          <input
            type="password"
            placeholder="password"
            className="enter-password"
          />
        </div>
        <button className="submit-button">Submit</button>
        <Link to="/signup" className="login-signup-redirect">
        New? Create a new account.
        </Link>
      </div>
    </div>
  );
}
