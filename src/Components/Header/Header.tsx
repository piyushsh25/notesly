import "./Header.css";
export const Header = () => {
  return (
    <div className="header-div">
      <div>
        <div className="header-title"> notesly </div>
      </div>
      <div>
        <button className="header-icon">
          <i className="bi bi-box-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};
