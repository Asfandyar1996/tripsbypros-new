import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { seeBids, readQuery } from "../actions/hotel";
import Toggle from "./utility/Toggle";

const SeeBids = ({ match }) => {
  // redux
  const { auth } = useSelector((state) => ({ ...state }));
  const [bids, setBids] = useState([]);
  const [query, setQuery] = useState({});

  const [isActive, setActive] = useState(true);
  const handleToggle = () => {
    setActive(!isActive);
  };

  const loadAllBids = async () => {
    let { data } = await seeBids(auth.token, match.params.queryId);
    setBids(data);
  };

  const loadQuery = async () => {
    let res = await readQuery(match.params.queryId);
    setQuery(res.data);
  };

  useEffect(() => {
    loadAllBids();
    loadQuery();
  }, []);

  return (
    <div>
      {/* <div>{JSON.stringify(bids)}</div> */}
      {/* <div>{JSON.stringify(query)}</div> */}
      <div className="h1 p-5 text-center bg-info">
        Bids on{" "}
        <i style={{ fontSize: "32px" }}>
          {query.days} days trip to {query.destination}
        </i>
      </div>
      <div className="container my-5">
        <h3>Trip Details</h3>
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">Destination: {query.destination}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              For {query.days} days
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              {query.participants} People
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              Departure from {query.departure}
            </h6>
            <p className="card-text d-flex">
              <h6>Further Information: </h6>
              <p className="mx-2">{query.information}</p>
            </p>
          </div>
        </div>
        <hr />
        <h3>Bids</h3>

        {bids.map((b) => (
          <div className="card my-3">
            <div className="card-body">
              <div className="d-flex align-items-start">
                <Link className="mx-2 h4">{b.companyName}</Link>
              </div>
              <div className="d-flex align-items-start mb-2">
                <p className="h5 mx-2">PKR {b.cost}</p>
              </div>

              <div className="h6">Proposed Itinerary: </div>
              <Toggle prop={b.proposedItinerary} />

              <div className="mt-2 h6">Agent's Message: </div>
              <Toggle prop={b.message} />

              <div className="link-primary pointer mt-4">Award Bid</div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SeeBids;
