import { Link } from "react-router-dom";

import "./Signup.css";
export function SignUpBody() {
  return (
    <div className="login-body">
      <div>or signup using</div>
      <div className="login-form">
        <div className="first-last-name-container">
          <div className="username-container">
            <i className="bi bi-person email-icon"></i>
            <input
              type="text"
              placeholder="first name"
              className="enter-username"
            />
          </div>
          <div className="username-container">
            <i className="bi bi-people-fill email-icon"></i>
            <input
              type="text"
              placeholder="last name"
              className="enter-username"
            />
          </div>
        </div>
        <div className="first-last-name-container">
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
        </div>
        <div className="username-container">
          <i className="bi bi-person-check-fill email-icon"></i>
          <input
            type="email"
            placeholder="username"
            className="enter-username"
          />
        </div>
        <button className="submit-button">Submit</button>
        <Link to="/login" className="login-signup-redirect">
          Already have an account ?
        </Link>
      </div>
    </div>
  );
}
