import { useState, useEffect } from "react";
import { allHotels } from "../actions/hotel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SmallCard from "../components/cards/SmallCard2";

const CardSlider = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    loadAllhotels();
  }, []);

  const loadAllhotels = async () => {
    let res = await allHotels();
    setHotels(res.data);
  };

  let settings = {
    dot: true,
    infinite: false,
    speed: 200,
    slidesToShow: (5 / 1900) * window.innerWidth,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      {hotels.map((h) => (
        <div className="card-wrapper container-fluid mx-3">
          <SmallCard key={h._id} h={h} />
        </div>
      ))}
    </Slider>
  );
};

export default CardSlider;
