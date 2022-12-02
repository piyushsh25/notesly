import { Link } from "react-router-dom";

export const HomeText = () => {
  return (
    <div className="home-content">
      <div className="home-title">notesly</div>
      <div className="title-desc">
        <div>your modern</div> <div>note taking app</div>
      </div>
      <div className="title-content">
        manage your daily task and boost your efficiency without any effort
      </div>
      <div className="home-cta">
        <Link to="/signup" className="join-button">Join now</Link>
        <div>
          <Link to="/login">
            <div className="sign-in-button">Already have an account?</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
