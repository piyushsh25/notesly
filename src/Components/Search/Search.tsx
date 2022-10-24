import "./Search.css";
export const Search = () => {
  return (
    <div className="search-bar">
      <div>
        <input placeholder="search notes" />
      </div>
      <div className="search-icon">
        <i className="bi bi-search"></i>
      </div>
      <button className="filter-icon">
        <i className="bi bi-funnel"></i>
      </button>
    </div>
  );
};
