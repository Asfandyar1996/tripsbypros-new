import { useState, useEffect } from "react";

import DashboardNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { sellerHotels, deleteHotel } from "../actions/hotel";
import SmallCard from "../components/cards/SmallCard";
import { toast } from "react-toastify";

const DashboardSeller = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    loadSellersHotels();
  }, []);

  const loadSellersHotels = async () => {
    let { data } = await sellerHotels(auth.token);
    setHotels(data);
  };

  const handleHotelDelete = async (hotelId) => {
    if (!window.confirm("Are you sure?")) return;
    deleteHotel(auth.token, hotelId).then((res) => {
      toast.success("Hotel Deleted");
      loadSellersHotels();
    });
  };

  return (
    <>
      <div className="container-fluid bg-info p-5">
        <ConnectNav />
      </div>

      <div className="container-fluid.p-4">
        <DashboardNav />
      </div>

      <div className="container-fluid mt-4 mx-2">
        <div className="row">
          <div className="col-md-10">
            <h2>Your Trips</h2>
          </div>
          <div className="col-md-2">
            <Link to="/hotels/new" className="btn btn-primary">
              + Add new
            </Link>
          </div>
        </div>

        <div className="row container">
          {hotels.map((h) => (
            <SmallCard
              key={h._id}
              h={h}
              showViewMoreButton={false}
              owner={true}
              handleHotelDelete={handleHotelDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardSeller;
