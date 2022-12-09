import { Link, useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';

import "./Header.css";
export const Header = () => {
  const navigate = useNavigate();
  const logoutSelfHandler = () => {
    //to check if token exists and logout feat is not being used in login and signup pages
    if (localStorage.getItem("token")) {
      navigate("/logout");
      toast.success("Logout success. Please come back soon.:)")
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
