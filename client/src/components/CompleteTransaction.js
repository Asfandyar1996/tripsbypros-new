import React from "react";

const CompleteTransaction = () => {
  return (
    <div className="jumbotron text-center">
      <h1 className="display-4">Congratulations!</h1>
      <p className="lead">
        You have successfully booked <b>Two days trip to Shogran</b> for{" "}
        <b>1 person</b>
      </p>
      <hr className="my-4" />
      <p className="mx-5 px-5">
        You will shortly receive a conformation text message and an email from
        the travel agency. To refer to this information again please refer to
        the <text className="link-primary">booking</text> section.
      </p>
      <div>
        <h4>Order Details</h4>
        <div className="container card">
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
      </div>
      <p className="lead">
        <a className="btn btn-primary btn-lg mt-4" href="/" role="button">
          Back to Home
        </a>
      </p>
    </div>
  );
};

export default CompleteTransaction;
