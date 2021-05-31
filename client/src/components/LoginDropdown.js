const LoginDropdown = () => {
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
        Login
      </button>
      <div
        className="dropdown-menu dropdown-menu-right"
        aria-labelledby="dropdownMenuButton"
      >
        <a className="dropdown-item" href="/login">
          Traveler Login
        </a>
        <a className="dropdown-item" href="/travel-agency-login">
          Travel Agency Login
        </a>
      </div>
    </div>
  );
};

export default LoginDropdown;
