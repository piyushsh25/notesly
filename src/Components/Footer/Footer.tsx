import { useSelector } from "react-redux";
import { RootState } from "../../Hooks/store";
import "./Footer.css";
export const Footer = () => {
  const { name } = useSelector((store: RootState) => store.userReducer);
  return (
    <div className="footer-div">
      <div>
        <div className="footer-title"> {name} </div>
        <div className="footer-icon">
          <div>
            <i className="bi bi-github"></i>
          </div>
          <div>
            <i className="bi bi-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
