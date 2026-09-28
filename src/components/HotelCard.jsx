import { Link } from "react-router-dom";
import "./HotelCard.css";

function HotelCard({ hotel }) {
  return (
    <div className="hotel-card">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="hotel-card-image"
      />

      <div className="hotel-card-content">
        <div className="hotel-card-top">
          <h3>{hotel.name}</h3>
          <span className="hotel-rating">
            ⭐ {hotel.rating}
          </span>
        </div>

        <p className="hotel-location">
          📍 {hotel.location}
        </p>

        <p className="hotel-description">
          {hotel.description}
        </p>

        <div className="hotel-card-bottom">
          <div>
            <span className="price">₹{hotel.price}</span>
            <span className="per-night"> / night</span>
          </div>

          <Link
            to={`/hotel/${hotel.id}`}
            className="view-hotel-btn"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;