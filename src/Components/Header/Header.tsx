import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toastAction } from "../../Hooks/slices/Toast/ToastSlice";
import { AppDispatch } from "../../Hooks/store";
import { ToastInvokeFunc } from "../../Hooks/ToastHelperFunction";
import "./Header.css";
export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const logoutSelfHandler = () => {
    //to check if token exists and logout feat is not being used in login and signup pages
    if (localStorage.getItem("token")) {
      navigate("/logout");
      ToastInvokeFunc(dispatch,
        "You have successfully logged out",
        "We will miss you, please come back soon.:)",
        "Info"
      );
    }
  };
  return (
    <div className="header-div">
      <div>
        <Link to="/me"><div className="header-title"> notesly </div></Link>
      </div>
      <div>
        <button className="header-icon" onClick={logoutSelfHandler}>
          <i className="bi bi-box-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};
