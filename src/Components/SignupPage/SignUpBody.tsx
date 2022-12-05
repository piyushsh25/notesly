import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  signupButtonHandler,
  signupSlice,
} from "../../Hooks/slices/Signup/SignupSlice";
import { toastAction } from "../../Hooks/slices/Toast/ToastSlice";
import { AppDispatch, RootState } from "../../Hooks/store";
import Spinner from "react-bootstrap/Spinner";

import "./Signup.css";
export function SignUpBody() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { firstname, lastname, email, password, username, signupstatus } =
    useSelector((store: RootState) => store.signupReducer);
  useEffect(() => {
    if (signupstatus === "succeeded") {
      navigate("/me");
      dispatch(
        toastAction.setMessage({
          header: "Welcome to notesly",
          description: "We're excited to have you here.",
          color: "Success",
        })
      );
      dispatch(toastAction.setToastHandler({ message: true }));
      setTimeout(() => {
        dispatch(toastAction.setToastHandler({ message: false }));
      }, 5000);

      dispatch(signupSlice.setIdleHandler({}));
    }
    if (signupstatus === "failed") {
      dispatch(
        toastAction.setMessage({
          header: "Opps!",
          description: "Something broke. Please try again.",
          color: "Danger",
        })
      );
      dispatch(toastAction.setToastHandler({ message: true }));
      setTimeout(() => {
        dispatch(toastAction.setToastHandler({ message: false }));
      }, 10000);

      dispatch(signupSlice.setIdleHandler({}));
    }
  }, [signupstatus]);
  console.log(signupstatus);
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
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
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
