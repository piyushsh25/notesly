import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch } from "../../Hooks/store";
import {
  loginActions,
  loginHandler,
} from "../../Hooks/slices/Login/loginSlice";
import "../SignupPage/Signup.css";
import { RootState } from "../../Hooks/store";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { ToastInvokeFunc } from "../../Hooks/ToastHelperFunction";

export function LoginBody() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { username, password, loginLoadState } = useSelector(
    (store: RootState) => store.loginReducer
  );

  useEffect(() => {
    if (loginLoadState === "succeeded") {
      navigate("/me");
      ToastInvokeFunc(
        dispatch,
        "Login, Success",
        "Welcome back, we missed you.",
        "Success"
      );
      dispatch(loginActions.setIdleHandler({}));
    }
    if (loginLoadState === "failed") {
      ToastInvokeFunc(
        dispatch,
        "Error in login",
        "ogin issue. Check username and passeord",
        "Danger"
      );
      dispatch(loginActions.setIdleHandler({}));
    }
  }, [loginLoadState]);
  return (
    <div className="login-body">
      <div>or login using</div>
      <div className="login-form">
        <div className="username-container">
          <i className="bi bi-envelope email-icon"></i>
          <input
            type="text"
            placeholder="username"
            value={username}
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
            className="enter-password current-password"
            value={password}
            onChange={(e) =>
              dispatch(loginActions.setPasswordHandler(e.target.value))
            }
          />
        </div>
        {loginLoadState === "pending" ? (
          <button className="submit-button">
            Loading...
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          </button>
        ) : (
          <button
            className="submit-button"
            onClick={() => dispatch(loginHandler({ username, password }))}
          >
            Submit
          </button>
        )}

        <Link to="/signup" className="login-signup-redirect">
          New? Create a new account.
        </Link>
      </div>
    </div>
  );
}
