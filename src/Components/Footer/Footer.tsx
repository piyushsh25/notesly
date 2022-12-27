import { useSelector } from "react-redux";
import { RootState } from "../../Hooks/store";
import "./Footer.css";
export const Footer = () => {
  const { name, linkedInLink, githubLink } = useSelector(
    (store: RootState) => store.userReducer
  );
  return (
    <div className="footer-div">
      <div>
        <div className="footer-title"> {name} </div>
        <div className="footer-icon">
          <div>
            <a href={`${githubLink}`}>
              <i className="bi bi-github"></i>
            </a>
          </div>
          <div>
            <a href={`${linkedInLink}`}>
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
