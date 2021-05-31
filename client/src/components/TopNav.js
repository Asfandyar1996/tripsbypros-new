import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { CompassOutlined } from "@ant-design/icons";
import LoginDropdown from "./LoginDropdown";
import QueryDropdown from "./QueryDropdown";
import AgencyQueryDropdown from "./AgencyQueryDropdown";

const TopNav = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  const history = useHistory();

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.removeItem("auth");
    history.push("/");
  };

  return (
    <>
      <div className="d-flex justify-content-center py-3 border-bottom mx-5">
        <Link
          className="d-flex align-items-center mb-3 mx-3 mb-md-0 me-md-auto"
          style={{ color: "#000000" }}
          to="/"
        >
          <CompassOutlined
            className="navbar-brand"
            style={{ fontSize: "32px", color: "#000000" }}
          />
          <div className="fs-4 h5">TRIPSBYPROS</div>
        </Link>
        <div className="nav bg-light d-flex justify-content-between">
          <Link className="nav-link h5" to="/">
            Home
          </Link>

          {auth != null && auth.user.companyName && <AgencyQueryDropdown />}

          {auth != null && auth.user.companyName && (
            <Link className="nav-link h5" to="/dashboard/agency-dashboard">
              Dashboard
            </Link>
          )}

          {auth != null && !auth.user.companyName && <QueryDropdown />}

          {auth != null && !auth.user.companyName && (
            <Link className="nav-link h5" to="/bookings">
              Bookings
            </Link>
          )}

          {auth != null && (
            <a className="nav-link pointer h5" onClick={logout}>
              Logout
            </a>
          )}

          {auth === null && <LoginDropdown />}
        </div>
      </div>
    </>
  );
};

export default TopNav;
