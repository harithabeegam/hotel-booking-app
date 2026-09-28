import { Link, useParams } from "react-router-dom";
import "./HotelDetails.css";

function HotelDetails() {
  const { id } = useParams();

  const hotels = {
    1: {
      name: "The Grand Palace",
      location: "Bangalore",
      price: "₹4,500",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=85",
      description: "A refined city stay combining elegant rooms, thoughtful hospitality, and modern comfort in the heart of Bangalore."
    },
    2: {
      name: "Lake View Resort",
      location: "Hyderabad",
      price: "₹3,800",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
      description: "A peaceful resort designed for guests looking for beautiful surroundings, relaxing spaces, and comfortable accommodation."
    },
    3: {
      name: "Royal Stay",
      location: "Chennai",
      price: "₹4,200",
      image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1600&q=85",
      description: "Experience stylish rooms, warm hospitality, and convenient access to the city's popular attractions."
    },
    4: {
      name: "Palm Grove Retreat",
      location: "Goa",
      price: "₹5,200",
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1600&q=85",
      description: "A relaxing coastal escape with spacious rooms, peaceful surroundings, and a laid-back atmosphere."
    },
    5: {
      name: "Urban Heights",
      location: "Mumbai",
      price: "₹4,800",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
      description: "A modern city hotel offering comfortable accommodation and convenient access to Mumbai's business and entertainment districts."
    },
    6: {
      name: "Mountain Haven",
      location: "Ooty",
      price: "₹3,600",
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1600&q=85",
      description: "A peaceful mountain retreat surrounded by beautiful landscapes and refreshing natural surroundings."
    }
  };

  const hotel = hotels[id] || hotels[1];

  const amenities = [
    "Free Wi-Fi",
    "Swimming Pool",
    "Breakfast",
    "Parking",
    "Room Service",
    "24/7 Reception"
  ];

  return (
    <div className="hotel-details-page">
      <section className="details-hero">
        <img src={hotel.image} alt={hotel.name} />

        <div className="details-overlay">
          <div className="details-hero-content">
            <span>{hotel.location}</span>
            <h1>{hotel.name}</h1>
          </div>
        </div>
      </section>

      <section className="details-content">
        <div className="details-main">
          <span className="section-tag">ABOUT THE STAY</span>

          <h2>
            A Comfortable Stay
            <br />
            Made For You
          </h2>

          <p>{hotel.description}</p>

          <p>
            Whether you are travelling for work or taking a relaxing break,
            our thoughtfully designed spaces are created to make your stay
            comfortable and memorable.
          </p>

          <div className="amenities-section">
            <span className="section-tag">AMENITIES</span>

            <div className="amenities-grid">
              {amenities.map((amenity) => (
                <div className="amenity-item" key={amenity}>
                  <span>✓</span>
                  <p>{amenity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="booking-card">
          <span>STARTING FROM</span>

          <div className="price-row">
            <h3>{hotel.price}</h3>
            <p>per night</p>
          </div>

          <div className="booking-line"></div>

          <p className="booking-note">
            Choose your dates and complete your reservation.
          </p>

          <Link to={`/booking/${id}`} className="book-now-btn">
            Book Your Stay
          </Link>
        </aside>
      </section>

      <section className="details-bottom">
        <div>
          <span className="section-tag">STAYNEST</span>

          <h2>
            Your stay should
            <br />
            feel effortless.
          </h2>

          <Link to="/hotels">← Explore Other Hotels</Link>
        </div>
      </section>
    </div>
  );
}

export default HotelDetails;