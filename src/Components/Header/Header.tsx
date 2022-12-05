import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toastAction } from "../../Hooks/slices/Toast/ToastSlice";
import { AppDispatch } from "../../Hooks/store";
import "./Header.css";
export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const logoutSelfHandler = () => {
    //to check if token exists and logout feat is not being used in login and signup pages
    if (localStorage.getItem("token")) {
      navigate("/logout");
      dispatch(
        toastAction.setMessage({
          header: "You have successfully logged out",
          description: "We will miss you, please come back soon.:)",
          color: "Info",
        })
      );
      dispatch(toastAction.setToastHandler({ message: true }));
      setTimeout(() => {
        dispatch(toastAction.setToastHandler({ message: false }));
      }, 5000);
    }
  };
  return (
    <div className="header-div">
      <div>
        <div className="header-title"> notesly </div>
      </div>
      <div>
        <button className="header-icon" onClick={logoutSelfHandler}>
          <i className="bi bi-box-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};
