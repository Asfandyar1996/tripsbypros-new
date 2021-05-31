import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="main-footer mt-5">
      <div className="container">
        <div className="row">
          <div className="col mx-5">
            <h2>TRIPSBYPROS</h2>
            <div style={{ color: "black" }}>
              TRIPSBYPROS is a one-stop shop to discover and book amazing
              experiences for both travelers and locals
            </div>
            <br />
            <div
              className="my-2"
              style={{
                fontSize: "42px",
                color: "#0000FF",
              }}
            >
              <InstagramOutlined className="mx-2" />
              <FacebookOutlined className="mx-2" />
              <TwitterOutlined className="mx-2" />
            </div>
          </div>
          <div className="col">
            <h4>Discover</h4>
            <ul
              className="list-unstyled"
              style={{ color: "black", lineHeight: "200%" }}
            >
              <li>Operators</li>
              <li>Corporate Virtual Events</li>
              <li>Jobs</li>
              <li>About TRIPSBYPROS</li>
              <li>Press Kit</li>
            </ul>
          </div>
          <div className="col">
            <h4>Company</h4>
            <ul
              className="list-unstyled"
              style={{ color: "black", lineHeight: "200%" }}
            >
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
          <div className="col">
            <h4>Customer Support</h4>
            <ul className="list-unstyled" style={{ color: "black" }}>
              <li>experiences@tripsbypros.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm" style={{ color: "black", textAlign: "center" }}>
            &copy;{new Date().getFullYear()} TRIPSBYPROS | All Rights Reserved |
            Terms of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
