import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-tag">WELCOME TO STAYNEST</span>
            <h1>Stay Somewhere<br />Worth Remembering</h1>
            <p>Discover beautiful stays, thoughtful comfort, and unforgettable experiences in every destination.</p>
            <div className="hero-buttons">
              <Link to="/hotels" className="primary-btn">Explore Hotels</Link>
              <Link to="/about" className="secondary-btn">Discover More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-text">
          <span className="section-tag">THE STAYNEST EXPERIENCE</span>
          <h2>More Than Just<br />A Place To Stay</h2>
          <p>We bring together carefully selected hotels, beautiful locations, and genuine hospitality to make every stay feel special.</p>
          <Link to="/about" className="text-link">Discover StayNest →</Link>
        </div>
        <div className="intro-image">
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80" alt="Luxury hotel" />
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <span className="section-tag">WHY STAYNEST</span>
          <h2>Everything You Need<br />For A Perfect Stay</h2>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">01</div>
            <h3>Handpicked Hotels</h3>
            <p>Stay at carefully selected properties that meet our standards for comfort and quality.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">02</div>
            <h3>Premium Comfort</h3>
            <p>Enjoy thoughtfully designed rooms, modern facilities, and a relaxing atmosphere.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">03</div>
            <h3>Easy Booking</h3>
            <p>Find your stay, choose your dates, and complete your booking with a simple experience.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">04</div>
            <h3>Personal Service</h3>
            <p>We focus on making your journey comfortable from the moment you arrive.</p>
          </div>
        </div>
      </section>

      <section className="popular-section">
        <div className="section-heading popular-heading">
          <div>
            <span className="section-tag">OUR COLLECTION</span>
            <h2>Popular Stays</h2>
          </div>
          <Link to="/hotels" className="text-link">View All Hotels →</Link>
        </div>

        <div className="hotel-preview-grid">
          <div className="hotel-preview">
            <img src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80" alt="Luxury hotel" />
            <div className="hotel-preview-content">
              <span>BANGALORE</span>
              <h3>The Grand Palace</h3>
              <p>From ₹4,500 / night</p>
            </div>
          </div>

          <div className="hotel-preview">
            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80" alt="Lake resort" />
            <div className="hotel-preview-content">
              <span>HYDERABAD</span>
              <h3>Lake View Resort</h3>
              <p>From ₹3,800 / night</p>
            </div>
          </div>

          <div className="hotel-preview">
            <img src="https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=900&q=80" alt="Royal hotel" />
            <div className="hotel-preview-content">
              <span>CHENNAI</span>
              <h3>Royal Stay</h3>
              <p>From ₹4,200 / night</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <span className="section-tag">YOUR NEXT ESCAPE</span>
          <h2>Ready To Find<br />Your Perfect Stay?</h2>
          <p>Explore our collection of comfortable and memorable stays.</p>
          <Link to="/hotels" className="primary-btn">Start Exploring</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;