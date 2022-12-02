import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch } from "../../Hooks/store";
import {
  loginActions,
  loginHandler
} from "../../Hooks/slices/loginSlice";
import "../SignupPage/Signup.css";
import { RootState } from "../../Hooks/store";
import { useEffect } from "react";
import { LoginInitialState } from "../../Hooks/slices/loginSlice.types";
export function LoginBody() {
  const navigate=useNavigate()
  const dispatch = useDispatch<AppDispatch>();
  const { username, password ,loginLoadState}:LoginInitialState = useSelector(
    (store: RootState) => store.loginReducer
  );
  useEffect(()=>{
    if(loginLoadState==="succeeded"){
      navigate("/me")
      dispatch(loginActions.setIdleHandler({}))
    }
  },[loginLoadState])
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
            className="enter-password"
            value={password}
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
