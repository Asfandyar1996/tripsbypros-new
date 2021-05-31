import React, { useState, useEffect } from "react";
import { RiseOutlined, FallOutlined } from "@ant-design/icons";
import { Doughnut } from "react-chartjs-2";
import CardSlider from "../components/Slider";
import Footer from "../components/Footer";

const AgencyDetails = ({ match }) => {
  return (
    <>
      <div className="container-fluid p-5 bg-info text-center">
        <h2>Best Price Tours and Travels (Pvt.) Ltd.</h2>
      </div>

      <div className="container py-3">
        <div className="row justify-content-center align-items-center">
          <div
            className="card bg-info mb-3 mx-2 h-100"
            style={{ maxWidth: "18rem", borderRadius: 20 }}
          >
            {/* <div className="card-header">Header</div> */}
            <div style={{ height: "150px" }} className="card-body">
              <h1 className="card-title">364</h1>
              <div className="d-flex">
                <p
                  style={{ fontSize: "16px", fontWeight: "bold" }}
                  className="card-text"
                >
                  New Customers Served Last Month
                </p>
                <div
                  className="d-flex mx-2"
                  style={{
                    color: "#8b0000",
                    backgroundColor: "#ffcccb",
                    height: "30px",
                    width: "80px",
                    borderRadius: 10,
                  }}
                >
                  <FallOutlined className="p-2" />
                  <p className="p-1 mx-1">4.7%</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="card text-white bg-info mb-3 mx-2 h-100"
            style={{ maxWidth: "18rem", borderRadius: 20 }}
          >
            {/* <div className="card-header">Header</div> */}
            <div style={{ height: "150px" }} className="card-body">
              <h1 style={{ color: "black" }} className="card-title">
                241
              </h1>
              <div className="d-flex">
                <p
                  style={{
                    fontSize: "16px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  className="card-text"
                >
                  Completed Tours
                </p>
                <div
                  className="d-flex mx-2"
                  style={{
                    color: "#006400",
                    backgroundColor: "#90EE90",
                    height: "30px",
                    width: "80px",
                    borderRadius: 10,
                  }}
                >
                  <RiseOutlined className="p-2" />
                  <p className="p-1 mx-1">2.3%</p>
                </div>
              </div>
            </div>
          </div>

          <Doughnut
            className="mx-1"
            data={{
              labels: ["Male", "Female"],
              datasets: [
                {
                  // label: "votes",
                  data: [48, 52],
                  backgroundColor: ["red", "blue"],
                  borderColor: ["black"],
                  borderWidth: 1,
                },
              ],
            }}
            height={300}
            width={400}
            options={{
              maintainAspectRatio: true,
              responsive: false,
              plugins: {
                title: {
                  display: true,
                  text: "Average Male/Female Ratio on Public Trips",
                  padding: { top: 10, bottom: 20 },
                },
              },
            }}
          />
        </div>
      </div>
      <div className="m-4">
        <h2>Introduction</h2>
        <div className="me-5" style={{ fontSize: "18px" }}>
          With a focus on customer service, at Absolute Travel & Tours we offer
          a fantastic range of trips to meet your budget, ambition and
          expectation. All of us here in the Absolute Travel team, both at home
          and abroad, work tirelessly to ensure that your trip is a carefree,
          successful and enjoyable experience from start to finish. That means
          attention to your travel plans, accommodation, specialist inclusions
          and leisure time as well as to health and safety, financial protection
          and travel insurance. With guidance in pre-tour preparation, risk
          assessment and planning as well as on tour assistance, you will be
          benefitting from a wealth of collective knowledge and experience. Get
          in touch with us now and find out why more and more groups are booking
          with us at Absolute Travel.
        </div>
      </div>
      <hr className="my-5" />
      <div className="m-4">
        <h3>Tours by this Agency</h3>
      </div>
      <CardSlider />

      {/* Dummy Reviews */}

      <div className="p-5">
        <h3>Reviews on this Travel Agency</h3>
        <hr />
        <div style={{ fontSize: "24px" }}>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        </div>
        <i>by Samaryar Aziz</i>
        <div className="mt-3" style={{ fontSize: "20px" }}>
          Excellent service. The guide was very friendy and the food by amazing!
        </div>
        <hr />
        <div style={{ fontSize: "24px" }}>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
        </div>
        <i>by Samaryar Aziz</i>
        <div className="mt-3" style={{ fontSize: "20px" }}>
          Went on a trip to Murree with them. Can vouch for their excellent
          service and professionalism.
        </div>
      </div>

      {/* Dummy Reviews end*/}

      <Footer className="my-5" />
    </>
  );
};

export default AgencyDetails;
