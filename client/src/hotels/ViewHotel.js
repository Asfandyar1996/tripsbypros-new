import React, { useState, useEffect } from "react";
import { read, diffDays } from "../actions/hotel";
import moment from "moment";
import { useSelector } from "react-redux";
import {
  FieldTimeOutlined,
  CalendarOutlined,
  CompassOutlined,
} from "@ant-design/icons";

const ViewHotel = ({ match, history }) => {
  const [hotel, setHotel] = useState({});
  const [image, setImage] = useState("");

  const { auth } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadSellerHotel();
  }, []);

  const loadSellerHotel = async () => {
    let res = await read(match.params.hotelId);
    setHotel(res.data);
    setImage(`${process.env.REACT_APP_API}/hotel/image/${res.data._id}`);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!auth) {
      history.push("/login");
    } else {
      history.push("/checkout-form");
    }
  };

  return (
    <>
      <div className="container-fluid bg-info h1 p-5 text-center">
        <h2>{hotel.title}</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <br />
            <img
              style={{
                width: "auto",
                height: "500px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
              src={image}
              alt={hotel.title}
              className="img img-fluid m-2"
            />
          </div>

          <div className="col-md-6">
            <br />
            <div className="mb-3">
              <b style={{ fontSize: "32px" }}>Overview</b>
            </div>

            {hotel.content != undefined && (
              <div className="ml-5">
                <p style={{ whiteSpace: "pre-line", fontSize: "16px" }}>
                  {hotel.content}
                </p>
              </div>
            )}

            <div className="mb-3" style={{ fontSize: "32px" }}>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
            </div>

            <p className="alert alert-info" style={{ fontSize: "32px" }}>
              PKR {hotel.price}
            </p>
            <p className="card-text">
              {/* <span className="float-right text-primary">
                for {diffDays(hotel.from, hotel.to)}{" "}
                {diffDays(hotel.from, hotel.to) <= 1 ? " day" : " days"}
              </span> */}

              <div className="d-flex">
                <FieldTimeOutlined
                  className="mx-3"
                  style={{ fontSize: "24px", color: "#0000FF" }}
                />
                <p style={{ fontSize: "16px" }}>
                  Trip Duration: <b>{hotel.duration} days</b>
                </p>
              </div>
            </p>
            <div className="d-flex">
              <CalendarOutlined
                className="mx-3"
                style={{ fontSize: "24px", color: "#0000FF" }}
              />
              <p style={{ fontSize: "16px" }}>
                <b>From </b>
                <i>{moment(new Date(hotel.from)).format("MMMM Do YYYY")}</i>
              </p>
              <p className="d-flex" style={{ fontSize: "16px" }}>
                <div className="mx-2">
                  <b> To </b>
                </div>

                <i>{moment(new Date(hotel.to)).format("MMMM Do YYYY")}</i>
              </p>
            </div>
            <div className="d-flex">
              <CompassOutlined
                className="mx-3"
                style={{ fontSize: "24px", color: "#0000FF" }}
              />
              <p style={{ fontSize: "16px" }}>{hotel.location}</p>
            </div>

            <br />
            <br />
            <b style={{ fontSize: "24px" }}>Itinerary</b>
            {hotel.itinerary != undefined && (
              <p style={{ whiteSpace: "pre-line", fontSize: "16px" }}>
                {hotel.itinerary.trim()}
              </p>
            )}
            <div className="mt-5">
              <i style={{ fontSize: "16px" }}>
                Posted by {hotel.postedBy && hotel.postedBy.name}
              </i>
            </div>
            <br />
            <button
              onClick={handleClick}
              className="btn btn-block btn-lg btn-primary mt-3 mb-5"
            >
              {auth && auth.token ? "Book Now" : "Login to Book"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewHotel;
