import { useState } from "react";
import { toast } from "react-toastify";
import { travelAgencyLogin } from "../actions/auth";
import LoginForm from "../components/TravelAgencyLoginForm";
import { useDispatch } from "react-redux";

const TravelAgencyLogin = ({ history }) => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("SEND LOGIN DATA", { email, password });
    try {
      let res = await travelAgencyLogin({ email, password });
      if (res.data) {
        console.log(
          "SAVE USER RESPONSE IN REDUX AND ALSO IN LOCAL STORAGE THEN REDIRECT ===> "
        );
        // save user and token to local storage
        window.localStorage.setItem("auth", JSON.stringify(res.data));

        // save user and token to redux
        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data,
        });
        history.push("/dashboard/agency-dashboard");
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };

  return (
    <>
      <div className="container-fluid bg-info p-5 text-center">
        <h1>Travel Agency Login</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <LoginForm
              handleSubmit={handleSubmit}
              email={email}
              setemail={setemail}
              password={password}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelAgencyLogin;
