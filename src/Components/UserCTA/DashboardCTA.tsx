import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { DashboardModal } from "../Modal/DashboardModal";
import "./DashboardCTA.css";
export const DashboardCTA = () => {
  const [showDashboardModal, setShowDashboardModal] = useState(false);
  const navigate=useNavigate()
  useEffect(() => {
    if (showDashboardModal) {
      document.body.style.overflow = "hidden";
    }
    if (!showDashboardModal) {
      document.body.style.overflow = "auto";
    }
  },[showDashboardModal]);
  function dashboardHandler() {
    setShowDashboardModal((prev) => !prev);
  }
  const newNoteHandler=()=>{
    navigate("/newnote")
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
          <NavLink
            to="/me"
            style={({ isActive }) => (isActive ? { color: "#7978FF" } : {})}
          >
            <div>
              <div>
                <i className="bi bi-house-door"></i>
              </div>
              <div>Home</div>
            </div>
          </NavLink>
          <NavLink
            to="/tags"
            style={({ isActive }) => (isActive ? { color: "#BCE29E" } : {})}
          >
            <div>
              <div>
                <i className="bi bi-bookmark"></i>
              </div>
              <div>Tags</div>
            </div>
          </NavLink>
          <NavLink
            to="/archive"
            style={({ isActive }) => (isActive ? { color: "#7978FF" } : {})}
          >
            <div>
              <div>
                <i className="bi bi-calendar-plus"></i>
              </div>
              <div>Archives</div>
            </div>
          </NavLink>
          <NavLink
            to="/trash"
            style={({ isActive }) => (isActive ? { color: "#FF5858" } : {})}
          >
            <div>
              <div>
                <i className="bi bi-trash"></i>
              </div>
              <div>Trash</div>
            </div>
          </NavLink>
          <NavLink
            to="/profile"
            style={({ isActive }) => (isActive ? { color: "#BCE29E" } : {})}
          >
            <div>
              <div>
                <i className="bi bi-person-circle"></i>
              </div>
              <div>User</div>
            </div>
          </NavLink>
        </div>
        <button className="dashboard-button" onClick={()=>newNoteHandler()}>
          <div> note +</div>
        </button>
      </div>
    </div>
  );
};
