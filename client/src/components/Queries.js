import { useState, useEffect } from "react";
import { allQueries } from "../actions/hotel";
import { Link } from "react-router-dom";

import React from "react";

const Queries = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    loadAllQueries();
  }, []);

  const loadAllQueries = async () => {
    let res = await allQueries();
    setQueries(res.data);
  };
  return (
    <div>
      <h1 className="bg-info text-center p-5">Active Queries</h1>
      <div className="container">
        <div className="row">
          {queries.map((q) => (
            <div className="card my-3">
              <div className="card-body">
                <h5 className="card-title">{q.destination}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  For {q.days} days
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  {q.participants} People
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Departure from {q.departure}
                </h6>
                <p className="card-text">{q.information}</p>
                <Link to={`/answer-query/${q._id}`} className="card-link">
                  Bid on this Query
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queries;
