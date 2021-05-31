import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { readQuery } from "../actions/hotel";
import AnswerQueryForm from "./AnswerQueryForm";
import { createAnswerQuery } from "../actions/hotel";

const AnswerQuery = ({ match }) => {
  // redux
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;

  const [values, setValues] = useState({
    cost: "",
    proposedItinerary: "",
    message: "",
  });

  const [query, setQuery] = useState({});
  const [owner, setOwner] = useState({});
  const [queryId, setQueryId] = useState({});
  const [companyName, setCompanyName] = useState("");

  const { cost, proposedItinerary, message } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let answerQueryData = new FormData();
    answerQueryData.append("cost", cost);
    answerQueryData.append("proposedItinerary", proposedItinerary);
    answerQueryData.append("message", message);
    answerQueryData.append("queryOwner", owner);
    answerQueryData.append("companyName", companyName);

    try {
      let res = await createAnswerQuery(token, answerQueryData, query._id);
      console.log("ANSWER QUERY CREATE RES", res);
      toast.success("BID SUCCESSFUL");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
    }
  };

  useEffect(() => {
    loadAllQueries();
    getQueryOwner();
    getQueryId();
  }, []);

  const loadAllQueries = async () => {
    let res = await readQuery(match.params.queryId);
    setQuery(res.data);
  };

  const getQueryOwner = async () => {
    let res = await readQuery(match.params.queryId);
    setOwner(res.data.postedBy._id);
  };

  const getQueryId = async () => {
    let res = await readQuery(match.params.queryId);
    setQueryId(res.data._id);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setCompanyName(auth.user.companyName);
  };
  
  return (
    <>
      <div className="p-5 h1 text-center bg-info">Answer Query</div>
      <div className="container">
        {/* Displaying query details */}
        <div className="d-flex">
          <h4>Query by:</h4>
          <h5 className="mx-3 mt-1 link-primary">
            {query.postedBy && <i>{query.postedBy.name}</i>}
          </h5>
        </div>
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">{query.destination}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              For {query.days} days
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              {query.participants} People
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              Departure from {query.departure}
            </h6>
            <p className="card-text">{query.information}</p>
          </div>
        </div>
        <AnswerQueryForm
          values={values}
          setValues={setValues}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default AnswerQuery;
