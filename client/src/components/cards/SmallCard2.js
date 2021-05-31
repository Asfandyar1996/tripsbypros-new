// import { diffDays } from "../../actions/hotel";
import { useHistory, Link } from "react-router-dom";
import {
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
  CompassOutlined,
} from "@ant-design/icons";

const SmallCard2 = ({
  h,
  handleHotelDelete = (f) => f,
  owner = false,
  showViewMoreButton = true,
}) => {
  const history = useHistory();
  return (
    <div className="col-sm-3 mx-5">
      <div
        className="card mb-3 innerbox"
        style={{
          width: "18rem",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        {h.image && h.image.contentType ? (
          <img
            className="card-img-top"
            src={`${process.env.REACT_APP_API}/hotel/image/${h._id}`}
            alt="default hotel image"
          />
        ) : (
          <img
            className="card-img-top"
            src="https://via.placeholder.com/900x500.png?text=MERN+Booking"
            alt="default hotel image"
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{h.title}</h5>
          <h4>Rs. {h.price}</h4>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div style={{ fontSize: "24px" }}>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
            </div>
          </li>
          <li className="list-group-item d-flex v-align">
            Posted by:
            <Link className="mx-1" to={`/travel-agency/${h.postedBy._id}`}>
              <i>{h.postedBy.name}</i>
            </Link>
          </li>
          <li className="list-group-item alert alert-info">
            <div className="d-flex">
              <CompassOutlined
                className="mx-2"
                style={{ fontSize: "20px", color: "#0000FF" }}
              />
              {h.location}
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-flex">
              <CalendarOutlined
                className="mx-2"
                style={{ fontSize: "20px", color: "#0000FF" }}
              />
              {h.duration}
              {h.duration == 1 ? " day" : " days"}
            </div>
          </li>
          <li className="list-group-item">
            Departure Date: {new Date(h.from).toLocaleDateString()}
          </li>
        </ul>
      </div>
      <div className="card-body justify-content-between">
        {showViewMoreButton && (
          <button
            onClick={() => history.push(`/hotel/${h._id}`)}
            className="btn btn-primary"
          >
            Details
          </button>
        )}
        {owner && (
          <>
            <Link to={`/hotel/edit/${h._id}`}>
              <EditOutlined className="text-warning" />
            </Link>
            <DeleteOutlined
              onClick={() => handleHotelDelete(h._id)}
              className="text-danger"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SmallCard2;
