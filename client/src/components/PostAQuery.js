import { useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createQuery } from "../actions/hotel";
import QueryForm from "./QueryForm";
import Footer from "./Footer";

const PostAQuery = () => {
  // redux
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;

  //state
  const [values, setValues] = useState({
    destination: "",
    participants: "",
    days: "",
    departure: "",
    information: "",
  });

  const { destination, participants, days, departure, information } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let queryData = new FormData();
    queryData.append("destination", destination);
    queryData.append("participants", participants);
    queryData.append("days", days);
    queryData.append("departure", departure);
    queryData.append("information", information);

    console.log([...queryData]);

    try {
      let res = await createQuery(token, queryData);
      console.log("QUERY CREATE RES", res);
      toast.success("QUERY CREATED");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="h1 text-center bg-info p-5">Post a Query</div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <QueryForm
              values={values}
              setValues={setValues}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostAQuery;
