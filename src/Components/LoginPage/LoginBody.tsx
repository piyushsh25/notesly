import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch } from "../../Hooks/store";
import {
  loginActions,
  loginHandler
} from "../../Hooks/slices/loginSlice";
import "../SignupPage/Signup.css";
import { RootState } from "../../Hooks/store";
export function LoginBody() {
  const dispatch = useDispatch<AppDispatch>();
  const { username, password } = useSelector(
    (store: RootState) => store.loginReducer
  );
  return (
    <div className="login-body">
      <div>or login using</div>
      <div className="login-form">
        <div className="username-container">
          <i className="bi bi-envelope email-icon"></i>
          <input
            type="text"
            placeholder="username"
            className="enter-username"
            onChange={(e) =>
              dispatch(loginActions.setUsernameHandler(e.target.value))
            }
          />
        </div>
        <div className="password-container">
          <i className="bi bi-file-lock2 password-icon"></i>
          <input
            type="password"
            placeholder="password"
            className="enter-password"
            onChange={(e) =>
              dispatch(loginActions.setPasswordHandler(e.target.value))
            }
          />
        </div>
        <button
          className="submit-button"
          onClick={() => dispatch(loginHandler({ username, password }))}
        >
          Submit
        </button>
        <Link to="/signup" className="login-signup-redirect">
          New? Create a new account.
        </Link>
      </div>
    </div>
  );
}
