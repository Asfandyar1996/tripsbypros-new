import { useState } from "react";
import Shogran from "../images/siripaye.jpg";
import Footer from "./Footer";

const Bookings = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <div className="h1 p-5 text-center bg-info">
        <div className="h2">Bookings</div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-3">
            <div className="card">
              <div style={{ display: "flex", flex: "1 1 auto" }}>
                <div className="img-square-wrapper">
                  <img className src={Shogran} alt="Card image cap" />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Two days trip to Shogran</h4>

                  {!isActive && (
                    <div>
                      <p className="card-text h6">PKR 6500 (Paid)</p>
                      <p className="card-text">1 Person</p>
                    </div>
                  )}

                  {isActive && (
                    <div className="container">
                      <h6>
                        <u>Name</u>
                      </h6>
                      <text>Samaryar Aziz</text>
                      <hr />
                      <h6>
                        <u>Contact</u>
                      </h6>
                      <text>+92 300 1234567</text>
                      <hr />
                      <h6>
                        <u>Order ID</u>
                      </h6>
                      <text>1236abc789</text>
                      <hr />
                      <h6>
                        <u>Receipt No.</u>
                      </h6>
                      <text>12345</text>
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
                      <h6>
                        Amount Paid: <h3>PKR 6500</h3>
                      </h6>
                    </div>
                  )}

                  <p
                    onClick={handleToggle}
                    className="mt-2 link-primary pointer"
                  >
                    {!isActive ? <p>Show Details</p> : <p>Hide Details</p>}
                  </p>
                </div>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 2 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bookings;
