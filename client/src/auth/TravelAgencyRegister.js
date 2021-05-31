import { useState } from "react";
import RegisterForm from "../components/TravelAgencyRegisterForm";
import axios from "axios";
import { toast } from "react-toastify";
import { travelAgencyRegister } from "../actions/auth";

const TravelAgencyRegister = ({ history }) => {
  const [companyName, setCompanyName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [name, setName] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8000/api/travel-agency-register`,
        {
          companyName,
          streetAddress,
          city,
          province,
          postalCode,
          introduction,
          name,
          // firstName,
          // lastName,
          email,
          phone,
          password,
        }
      );
      console.log("Register User ===> ", res);
      toast.success("Register Success. Please Login.");
      history.push("./travel-agency-login");
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };

  return (
    <>
      <div className="container-fluid bg-secondary h1 p-5 text-center">
        <h1>Travel Agency Register</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <RegisterForm
              handleSubmit={handleSubmit}
              companyName={companyName}
              setCompanyName={setCompanyName}
              streetAddress={streetAddress}
              setStreetAddress={setStreetAddress}
              city={city}
              setCity={setCity}
              province={province}
              setProvince={setProvince}
              postalCode={postalCode}
              setPostalCode={setPostalCode}
              introduction={introduction}
              setIntroduction={setIntroduction}
              name={name}
              setName={setName}
              // firstName={firstName}
              // setFirstName={setFirstName}
              // lastName={lastName}
              // setLastName={setLastName}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              password={password}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelAgencyRegister;
