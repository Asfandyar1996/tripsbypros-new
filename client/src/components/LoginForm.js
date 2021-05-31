import { Link } from "react-router-dom";

const LoginForm = ({
  handleSubmit,
  email,
  setemail,
  password,
  setPassword,
}) => (
  <form onSubmit={handleSubmit} className="mt-3">
    <h4>I'm a Returning TRIPSBYPROS Traveler</h4>
    <hr />
    <div className="d-flex">
      <div>Travel Agents please use the Travel Agents Login: </div>
      <Link className="mx-2" to="/travel-agency-login">
        Agent Login
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
      <Link className="mx-2" to="/register">
        Register
      </Link>
    </div>
    <button disabled={!email || !password} className="btn btn-primary my-3">
      Submit
    </button>
  </form>
);

export default LoginForm;
