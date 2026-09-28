function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>StayNest</h2>
          <p>
            Comfortable stays, memorable experiences,
            and easy hotel booking.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/hotels">Hotels</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📧 staynest@gmail.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Bangalore, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 StayNest. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;