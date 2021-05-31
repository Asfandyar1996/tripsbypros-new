const TravelAgencyRegisterForm = ({
  handleSubmit,
  companyName,
  setCompanyName,
  streetAddress,
  setStreetAddress,
  city,
  setCity,
  province,
  setProvince,
  postalCode,
  setPostalCode,
  introduction,
  setIntroduction,
  // firstName,
  // setFirstName,
  // lastName,
  // setLastName,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  password,
  setPassword,
}) => (
  <form onSubmit={handleSubmit} className="mt-3">
    <h4>
      <u>Agency Information</u>
    </h4>
    <div className="form-group mb-3">
      <label className="form-label">Company Name</label>
      <input
        type="text"
        className="form-control"
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      ></input>
    </div>

    <div className="form-group mb-3">
      <label className="form-label">Street Address</label>
      <input
        type="text"
        className="form-control"
        placeholder="Street Address"
        value={streetAddress}
        onChange={(e) => setStreetAddress(e.target.value)}
      ></input>
    </div>

    <div className="form-group mb-3">
      <label className="form-label">City</label>
      <input
        type="text"
        className="form-control"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      ></input>
    </div>

    <div className="form-group mb-3">
      <label className="form-label">Province</label>
      <input
        type="text"
        className="form-control"
        placeholder="Province"
        value={province}
        onChange={(e) => setProvince(e.target.value)}
      ></input>
    </div>

    <div className="form-group mb-3">
      <label className="form-label">Postal Code</label>
      <input
        type="text"
        className="form-control"
        placeholder="Postal Code"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
      ></input>
    </div>

    <div className="form-group mb-3">
      <label className="form-label">Introduction</label>
      <input
        type="text"
        className="form-control"
        placeholder="Introduction"
        value={introduction}
        onChange={(e) => setIntroduction(e.target.value)}
      ></input>
    </div>

    <hr />

    <h4 className="mt-5 my-3">
      <u>Personal Information</u>
    </h4>

    <div className="form-group mb-3">
      <label>Name</label>
      <input
        type="text"
        className="form-control"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
    </div>

    {/* <div className="form-group mb-3">
      <label>First Name</label>
      <input
        type="text"
        className="form-control"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      ></input>
    </div> */}

    {/* <div className="form-group mb-3">
      <label>Last Name</label>
      <input
        type="text"
        className="form-control"
        placeholder="First Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      ></input>
    </div> */}

    <div className="form-group mb-3">
      <label>Email Address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
    </div>

    <div className="form-group mb-3">
      <label>Phone Number</label>
      <input
        type="text"
        className="form-control"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
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

    <button
      disabled={
        !companyName ||
        !streetAddress ||
        !city ||
        !province ||
        !postalCode ||
        !introduction ||
        // !firstName ||
        // !lastName ||
        !name ||
        !email ||
        !phone ||
        !password
      }
      className="btn btn-primary"
    >
      Submit
    </button>
  </form>
);

export default TravelAgencyRegisterForm;
