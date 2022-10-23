import { Link } from "react-router-dom";
import "./DashboardCTA.css";
export const DashboardCTA = () => {
  return (
    <div className="dashborad-container">
      <div className="dashborad-icons">
        <Link to="/me">
        <div>
          <div>
            <i className="bi bi-house-door"></i>
          </div>
          <div>Home</div>
        </div>
        </Link>
        <Link to="/tags">
        <div>
          <div>
            <i className="bi bi-bookmark"></i>
          </div>
          <div>Tags</div>
        </div>
        </Link>
        <Link to="/bookmarks">
        <div>
          <div>
            <i className="bi bi-bookmark-check-fill"></i>
          </div>
          <div>Bookmarks</div>
        </div>
        </Link>
        <Link to="/trash">
        <div>
          <div>
            <i className="bi bi-trash"></i>
          </div>
          <div>Trash</div>
        </div>
        </Link>
        <Link to="/profile">
        <div>
          <div>
            <i className="bi bi-person-circle"></i>
          </div>
          <div>User</div>
        </div>
        </Link>
      </div>
      <div className="dashboard-button">
        <div>Create new note</div>
      </div>
    </div>
  );
};
