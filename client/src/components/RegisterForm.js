const RegisterForm = ({
  handleSubmit,
  name,
  setName,
  email,
  setemail,
  password,
  setPassword,
}) => (
  <form onSubmit={handleSubmit} className="mt-3">
    <div className="form-group mb-3">
      <label className="form-label">Your Name</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
    </div>

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

    <button disabled={!name || !email || !password} className="btn btn-primary">
      Submit
    </button>
  </form>
);

export default RegisterForm;
