const QueryDropdown = () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Query
      </button>
      <div
        className="dropdown-menu dropdown-menu-right"
        aria-labelledby="dropdownMenuButton"
      >
        <a className="dropdown-item" href="/post-a-query">
          Post a Query
        </a>
        <a className="dropdown-item" href="/traveler-active-queries">
          My Active Queries
        </a>
      </div>
    </div>
  );
};

export default QueryDropdown;
