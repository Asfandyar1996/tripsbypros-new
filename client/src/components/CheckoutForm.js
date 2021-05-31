const CheckoutForm = ({ history }) => {
  return (
    <div>
      <div className="h1 p-5 text-center bg-info">Checkout Form</div>
      <div className="container h6">
        <div className="text-center">
          Please fill out the form and select the number of participants in
          order to check out.
        </div>

        <div className="d-flex mt-5">
          <div className="mx-5" style={{ width: "80%" }}>
            <h4 className="text-center mb-5">Billing Address</h4>
            <div className="container">
              <div className="d-flex">
                <div className="form-group mb-3 me-3">
                  <label>First Name</label>
                  <input
                    className="form-control"
                    placeholder="Enter First Name"
                  ></input>
                </div>
                <div className="form-group mb-3 me-3">
                  <label>Last Name</label>
                  <input
                    className="form-control"
                    placeholder="Enter Last Name"
                  ></input>
                </div>
              </div>
              <div style={{ width: "60%" }} className="form-group mb-3 me-3">
                <label>Email</label>
                <input
                  className="form-control"
                  placeholder="Enter Email"
                ></input>
              </div>
              <div style={{ width: "60%" }} className="form-group mb-3 me-3">
                <label>Street Address</label>
                <input
                  className="form-control"
                  placeholder="Enter Street Address"
                ></input>
              </div>
              <div className="d-flex">
                <div className="form-group mb-3 me-3">
                  <label>City</label>
                  <input
                    className="form-control"
                    placeholder="Enter City"
                  ></input>
                </div>
                <div className="form-group mb-3 me-3">
                  <label>Province</label>
                  <input
                    className="form-control"
                    placeholder="Enter Province"
                  ></input>
                </div>
                <div className="form-group mb-3 me-3">
                  <label>Postal Code</label>
                  <input
                    className="form-control"
                    placeholder="Enter Postal Code"
                  ></input>
                </div>
              </div>

              <hr />

              <h3>Payment</h3>
              <div className="d-flex">
                <div className="form-group mb-3 me-3">
                  <label>Name on Card</label>
                  <input
                    className="form-control"
                    placeholder="Enter Name"
                  ></input>
                </div>
                <div className="form-group mb-3 me-3">
                  <label>Credit Card Number</label>
                  <input
                    className="form-control"
                    placeholder="Enter Number"
                  ></input>
                </div>
              </div>
              <div className="d-flex">
                <div className="form-group mb-3 me-3">
                  <label>Expiry</label>
                  <div style={{ width: "40%" }} className="d-flex">
                    <input className="form-control" placeholder="MM"></input>
                    <input className="form-control" placeholder="YYYY"></input>
                  </div>
                </div>
                <div className="form-group mb-3 me-3">
                  <label>CVV</label>
                  <input className="form-control" placeholder="CVV"></input>
                </div>
              </div>
              <div className="container text-center">
                <button
                  onClick={() => history.push("/complete-transaction")}
                  className="btn btn-block btn-lg btn-primary mt-3 mb-5"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
          <div style={{ width: "20%" }}>
            <h4>Your Cart</h4>
            <div className="container">
              <hr />
              <h6>
                <u>Trip Title</u>
              </h6>
              <text>Two days trip to Shogran</text>
              <hr />
              <h6>
                <u>Number of Participants</u>
              </h6>
              <text>1 Person</text>
              <hr />
              <h6>Total: PKR 6500</h6>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
