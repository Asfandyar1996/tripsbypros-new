import { Link } from "react-router-dom";

const AgencyBids = () => {
  return (
    <div>
      <div className="bg-info p-5 text-center h1">My Bids</div>
      <div className="container">
        <div className="row">
          <div className="card my-3">
            <div className="card-body">
              <h5 className="card-title">Karachi</h5>
              <h6 className="card-subtitle mb-2 text-muted">For 2 days</h6>
              <h6 className="card-subtitle mb-2 text-muted">7 People</h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Departure from Lahore
              </h6>
              <p className="card-text">Info</p>
              <Link className="card-link">Bid on this Query</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyBids;
