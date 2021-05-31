const AgencyQueryDropdown = () => {
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
        <a className="dropdown-item" href="/queries">
          Active Queries
        </a>
        <a className="dropdown-item" href="/agency-bids">
          My Bids
        </a>
      </div>
    </div>
  );
};

export default AgencyQueryDropdown;
