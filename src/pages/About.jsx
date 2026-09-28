import "./About.css";
function About() {
  return (
    <div className="about-page">
      <section className="about-header">
        <p>ABOUT STAYNEST</p>
        <h1>Comfort That Feels Like Home</h1>
        <p className="about-intro">
          StayNest helps travelers discover comfortable,
          reliable and memorable stays across popular
          destinations.
        </p>
      </section>
      <section className="about-content">
        <div className="about-card">
          <h2>Our Story</h2>
          <p>
            StayNest was created to make hotel booking
            simple and convenient. We bring different
            stays together in one place so travelers can
            easily explore their options.
          </p>
        </div>
        <div className="about-card">
          <h2>What We Offer</h2>
          <p>
            From comfortable city hotels to peaceful
            resorts, StayNest provides a variety of
            accommodation options for different types
            of travelers.
          </p>
        </div>
        <div className="about-card">
          <h2>Why StayNest?</h2>
          <p>
            We focus on a simple booking experience,
            clear hotel information and an easy-to-use
            interface for every traveler.
          </p>
        </div>
      </section>
      <section className="about-features">
        <div>
          <strong>100+</strong>
          <span>Hotels</span>
        </div>
        <div>
          <strong>25+</strong>
          <span>Destinations</span>
        </div>
        <div>
          <strong>10K+</strong>
          <span>Travelers</span>
        </div>
        <div>
          <strong>24/7</strong>
          <span>Support</span>
        </div>
      </section>
    </div>
  );
}
export default About;