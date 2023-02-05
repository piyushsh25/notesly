import "./DashboardModal.css";
import { Link, useNavigate } from "react-router-dom";
export const DashboardModal = () => {
  const navigate=useNavigate()
  const newNoteHandler=()=>{
    navigate("/newnote")
  }
  return (
    <div className="dashboard-modal">
      <div className="dashboard-menu-container">
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
            <Link to="/archive">
              <div>
                <div>
                  <i className="bi bi-calendar-plus"></i>
                </div>
                <div>Archives</div>
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
          <button className="dashboard-button" onClick={()=>newNoteHandler()}>
            <div>note +</div>
          </button>
        </div>
      </div>
    </div>
  );
};
