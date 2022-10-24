import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DashboardModal } from "../Modal/DashboardModal";
import "./DashboardCTA.css";
export const DashboardCTA = () => {
  const [showDashboardModal, setShowDashboardModal] = useState(false);
  useEffect(() => {
    if (showDashboardModal) {
      document.body.style.overflow = "hidden";
    }
    if (!showDashboardModal) {
      document.body.style.overflow = "auto";
    }
  });
  function dashboardHandler() {
    setShowDashboardModal((prev) => !prev);
  }
  return (
    <div className="dashboard-menu-container">
      {showDashboardModal && <DashboardModal />}
      <button
        className="small-screen-menu-dashboard"
        onClick={dashboardHandler}
      >
        <i className="bi bi-three-dots-vertical"></i>
      </button>

      <div className="dashboard-container">
        <div className="dashboard-icons">
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
        <button className="dashboard-button">
          <div> note +</div>
        </button>
      </div>
    </div>
  );
};
