import "./Services.css";

function Services() {
  return (
    <div className="services-page">

      <div className="services-header">
        <h1>Our Services</h1>
        <p>Explore our rooms, facilities and special offers.</p>
      </div>

      <div className="services-content">

        <div className="services-tabs">
          <a href="#rooms" className="active">Rooms</a>
          <a href="#facilities">Facilities</a>
          <a href="#offers">Offers</a>
        </div>

        <section id="rooms" className="rooms-section">
          <h2>Comfortable Rooms</h2>

          <p>
            Choose from comfortable rooms designed for individuals,
            couples and families.
          </p>

          <div className="room-links">
            <a href="/rooms">Deluxe Rooms</a>
            <a href="/rooms">Family Rooms</a>
            <a href="/rooms">Premium Suites</a>
          </div>
        </section>

        <section id="facilities" className="facilities-section">
          <h2>Modern Facilities</h2>
          <p>
            Enjoy modern facilities designed to make your stay comfortable
            and convenient.
          </p>
        </section>

        <section id="offers" className="offers-section">
          <h2>Special Offers</h2>
          <p>
            Discover special offers and packages for a memorable stay.
          </p>
        </section>

      </div>

    </div>
  );
}

export default Services;