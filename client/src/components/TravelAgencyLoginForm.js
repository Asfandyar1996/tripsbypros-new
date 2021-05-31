import { Link } from "react-router-dom";

const TravelAgencyLoginForm = ({
  handleSubmit,
  email,
  setemail,
  password,
  setPassword,
}) => (
  <form onSubmit={handleSubmit} className="mt-3">
    <h4>I'm a Returning TRIPSBYPROS Travel Agent</h4>
    <hr />
    <div className="d-flex">
      <div>Travelers please use the Traveler Login: </div>
      <Link className="mx-2" to="/login">
        Traveler Login
      </Link>
    </div>

    <hr />
    <div className="form-group mb-3">
      <label>Email Address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      ></input>
    </div>

    <div className="form-group mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
    </div>
    <hr />
    <div className="d-flex">
      <div>Don't have an account? </div>
      <Link className="mx-2" to="/travel-agency-register">
        Register
      </Link>
    </div>
    <button disabled={!email || !password} className="btn btn-primary my-3">
      Submit
    </button>
  </form>
);

export default TravelAgencyLoginForm;
