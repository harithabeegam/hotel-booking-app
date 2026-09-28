import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>StayNest</h2>
          <p>
            Comfortable stays, memorable experiences, and easy hotel booking.
          </p>
        </div>

        <div className="footer-links-section">
          <h3>Quick Links</h3>

          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/hotels">Hotels</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>

          <p>staynest@gmail.com</p>
          <p>+91 98765 43210</p>
          <p>Bangalore, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 StayNest. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;