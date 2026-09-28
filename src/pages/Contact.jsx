import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Your message has been sent successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <div className="contact-page">

      <section className="contact-hero">
        <p>GET IN TOUCH</p>
        <h1>Contact StayNest</h1>
        <span>
          We are here to help you with your stay.
        </span>
      </section>

      <section className="contact-section">

        <div className="contact-info">

          <p className="contact-small-title">
            CONTACT STAYNEST
          </p>

          <h2>
            We Would Love to Hear From You
          </h2>

          <p className="contact-text">
            Have a question about your booking or need help
            choosing the right hotel? Get in touch with our
            StayNest team.
          </p>

          <div className="contact-detail">

            <div className="contact-item">
              <div className="contact-icon">A</div>
              <div>
                <strong>Address</strong>
                <span>
                  MG Road, Bangalore, Karnataka, India
                </span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">P</div>
              <div>
                <strong>Phone</strong>
                <span>
                  +91 98765 43210
                </span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">@</div>
              <div>
                <strong>Email</strong>
                <span>
                  support@staynest.com
                </span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">T</div>
              <div>
                <strong>Working Hours</strong>
                <span>
                  Monday - Sunday, 9:00 AM - 9:00 PM
                </span>
              </div>
            </div>

          </div>
        </div>

        <div className="contact-form">

          <h2>Send Us a Message</h2>

          <p>
            Fill in the details below and our team will
            get back to you.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="input-row">

              <div className="input-group">
                <label>Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="input-group">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>

            </div>

            <div className="input-group">
              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                required
              />
            </div>

            <div className="input-group">
              <label>Message</label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit">
              Send Message
            </button>

          </form>
        </div>

      </section>

    </div>
  );
}

export default Contact;