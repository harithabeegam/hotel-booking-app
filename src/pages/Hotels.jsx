import { Link } from "react-router-dom";
import "./Hotels.css";

function Hotels() {
  const hotels = [
    {
      id: 1,
      name: "The Grand Palace",
      location: "Bangalore",
      price: "₹4,500",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80",
      type: "Luxury Hotel"
    },
    {
      id: 2,
      name: "Lake View Resort",
      location: "Hyderabad",
      price: "₹3,800",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
      type: "Resort"
    },
    {
      id: 3,
      name: "Royal Stay",
      location: "Chennai",
      price: "₹4,200",
      image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=900&q=80",
      type: "Premium Hotel"
    },
    {
      id: 4,
      name: "Palm Grove Retreat",
      location: "Goa",
      price: "₹5,200",
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=900&q=80",
      type: "Beach Resort"
    },
    {
      id: 5,
      name: "Urban Heights",
      location: "Mumbai",
      price: "₹4,800",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
      type: "City Hotel"
    },
    {
      id: 6,
      name: "Mountain Haven",
      location: "Ooty",
      price: "₹3,600",
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=80",
      type: "Nature Resort"
    }
  ];

  return (
    <div className="hotels-page">
      <section className="hotels-hero">
        <div className="hotels-hero-content">
          <span>STAYNEST COLLECTION</span>
          <h1>Find Your<br />Perfect Stay</h1>
          <p>Explore carefully selected hotels and resorts designed for comfort, relaxation, and memorable experiences.</p>
        </div>
      </section>

      <section className="hotel-list-section">
        <div className="hotel-list-header">
          <div>
            <span className="section-tag">OUR PROPERTIES</span>
            <h2>Explore Our Hotels</h2>
          </div>
          <p>Discover stays across beautiful destinations.</p>
        </div>

        <div className="hotel-grid">
          {hotels.map((hotel) => (
            <div className="hotel-card" key={hotel.id}>
              <div className="hotel-image-wrapper">
                <img src={hotel.image} alt={hotel.name} />
                <span className="hotel-type">{hotel.type}</span>
              </div>

              <div className="hotel-card-content">
                <p className="hotel-location">{hotel.location}</p>
                <h3>{hotel.name}</h3>
                <div className="hotel-bottom">
                  <div>
                    <span>From</span>
                    <strong>{hotel.price}</strong>
                    <small>/ night</small>
                  </div>
                  <Link to={`/hotels/${hotel.id}`}>View Stay →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="hotels-cta">
        <div>
          <span>YOUR NEXT JOURNEY</span>
          <h2>Where will you<br />stay next?</h2>
          <Link to="/booking/1">Book Your Stay</Link>
        </div>
      </section>
    </div>
  );
}

export default Hotels;