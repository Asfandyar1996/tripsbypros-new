import { useState, useEffect } from "react";
import { allHotels } from "../actions/hotel";
import Search from "../components/forms/Search";
import CardSlider from "../components/SwiperSlider";
import TopDestinations from "../components/TopDestinations";
import Bar from "../images/bestpricebar2.jpg";
import Banner from "../images/banner.png";
import Footer from "../components/Footer";

const Home = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    loadAllhotels();
  }, []);

  const loadAllhotels = async () => {
    let res = await allHotels();
    setHotels(res.data);
  };

  return (
    <>
      <div className="col">
        <img style={{ width: "100%", height: "auto" }} src={Banner} />
      </div>
      <div className="col">
        <br />
        <Search />
      </div>
      <div className="container-fluid bg-info p-5 text-center">
        <h1>Travel deals around you</h1>
      </div>
      <br />
      <CardSlider />
      <div
        style={{
          backgroundImage: `url(${Bar})`,
          width: "1870px",
          height: "200px",
        }}
        className="mx-3 my-5"
      ></div>
      <div className="container-fluid bg-info p-5 text-center mt-5">
        <h1>Top Destinations</h1>
      </div>
      <TopDestinations />
      <Footer className="my-5" />
    </>
  );
};

export default Home;
