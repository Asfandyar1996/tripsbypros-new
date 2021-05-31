import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { allTravelerQueries } from "../actions/hotel";

const TravelerActiveQueries = () => {
  // redux
  const { auth } = useSelector((state) => ({ ...state }));
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    loadAllTravelerQueries();
  }, []);

  const loadAllTravelerQueries = async () => {
    let { data } = await allTravelerQueries(auth.token);
    setQueries(data);
  };

  return (
    <div>
      <div className="h1 p-5 bg-info text-center">Active Queries</div>
      {queries.map((q) => (
        <div className="container">
          <div className="card my-3">
            <div className="card-body">
              <h5 className="card-title">Destination: {q.destination}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                For {q.days} days
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Total Participants: {q.participants}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Departure from {q.departure}
              </h6>
              <p className="card-text">{q.information}</p>
              <Link to={`/see-bids/${q._id}`} className="card-link">
                See Bids
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelerActiveQueries;
