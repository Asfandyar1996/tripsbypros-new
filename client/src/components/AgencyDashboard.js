import ConnectNav from "./ConnectNav";
import DashboardNav from "./DashboardNav";
import Footer from "./Footer";

import Chart from "./Chart";
import { RiseOutlined, FallOutlined } from "@ant-design/icons";

const AgencyDashboard = () => {
  return (
    <>
      <div className="container-fluid bg-info p-5">
        <ConnectNav />
      </div>

      <div className="container-fluid.p-4">
        <DashboardNav />
      </div>
      {/* <div className="h1 bg-info container-fluid p-5 text-center">
        Dashboard
      </div> */}
      <div className="container my-3">
        <div className="row">
          <div
            className="card bg-info mb-3 mx-2 h-100"
            style={{ maxWidth: "18rem", borderRadius: 20 }}
          >
            {/* <div className="card-header">Header</div> */}
            <div style={{ height: "150px" }} className="card-body">
              <h1 className="card-title">1317</h1>
              <div className="d-flex">
                <p
                  style={{ fontSize: "16px", fontWeight: "bold" }}
                  className="card-text"
                >
                  Profile Views Today
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
                  <p className="p-1 mx-1">4.7%</p>
                </div>
              </div>
            </div>
          </div>

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

          <div
            className="card text-white bg-info mb-3 mx-2 h-100"
            style={{ maxWidth: "18rem", borderRadius: 20 }}
          >
            {/* <div className="card-header">Header</div> */}
            <div style={{ height: "150px" }} className="card-body">
              <h1
                style={{
                  color: "black",
                  //   textShadow:
                  //     "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
                }}
                className="card-title"
              >
                650K
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
                  Last Month Revenue
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
                  <p className="p-1 mx-1">2.3%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Chart />
      <Footer />
    </>
  );
};

export default AgencyDashboard;
