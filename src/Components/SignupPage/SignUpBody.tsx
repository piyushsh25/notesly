import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  signupButtonHandler,
  signupSlice,
} from "../../Hooks/slices/Signup/SignupSlice";
import { AppDispatch, RootState } from "../../Hooks/store";
import Spinner from "react-bootstrap/Spinner";

import "./Signup.css";
import { ToastInvokeFunc } from "../../Hooks/ToastHelperFunction";
export function SignUpBody() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { firstname, lastname, email, password, username, signupstatus } =
    useSelector((store: RootState) => store.signupReducer);
  useEffect(() => {
    if (signupstatus === "succeeded") {
      navigate("/me");
      ToastInvokeFunc(
        dispatch,
        "Welcome to notesly",
        "We're excited to have you here.",
        "Success"
      );
      dispatch(signupSlice.setIdleHandler({}));
    }
    if (signupstatus === "failed") {
      ToastInvokeFunc(
        dispatch,
        "Opps!.Something broke. Please try again.",
        "Username already exists.",
        "Danger"
      );
      dispatch(signupSlice.setIdleHandler({}));
    }
  }, [signupstatus]);
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
              value={firstname}
              onChange={(e) => {
                dispatch(signupSlice.setFirstNameHandler(e.target.value));
              }}
            />
          </div>
          <div className="username-container">
            <i className="bi bi-people-fill email-icon"></i>
            <input
              type="text"
              placeholder="last name"
              className="enter-username"
              value={lastname}
              onChange={(e) => {
                dispatch(signupSlice.setLastNameHandler(e.target.value));
              }}
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
              value={email}
              onChange={(e) => {
                dispatch(signupSlice.setEmailHandler(e.target.value));
              }}
            />
          </div>
          <div className="password-container">
            <i className="bi bi-file-lock2 password-icon"></i>
            <input
              type="password"
              placeholder="password"
              className="enter-password"
              value={password}
              onChange={(e) => {
                dispatch(signupSlice.setPasswordHandler(e.target.value));
              }}
            />
          </div>
        </div>
        <div className="username-container">
          <i className="bi bi-person-check-fill email-icon"></i>
          <input
            type="email"
            placeholder="username"
            className="enter-username"
            value={username}
            onChange={(e) => {
              dispatch(signupSlice.setUsernameHandler(e.target.value));
            }}
          />
        </div>
        {signupstatus === "pending" ? (
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
            onClick={() =>
              dispatch(
                signupButtonHandler({
                  firstname,
                  lastname,
                  email,
                  password,
                  username,
                  signupstatus,
                })
              )
            }
          >
            Submit
          </button>
        )}

        <Link to="/login" className="login-signup-redirect">
          Already have an account ?
        </Link>
      </div>
    </div>
  );
}
