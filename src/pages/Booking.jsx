import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addBooking } from "../redux/bookingSlice";
import "./Booking.css";

function Booking() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    room: "Deluxe Room"
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ""
    });
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Please enter your email";
    } else if (!formData.email.includes("@")) {
      validationErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      validationErrors.phone = "Please enter your phone number";
    } else if (formData.phone.length !== 10) {
      validationErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.checkIn) {
      validationErrors.checkIn = "Please select check-in date";
    }

    if (!formData.checkOut) {
      validationErrors.checkOut = "Please select check-out date";
    }

    if (
      formData.checkIn &&
      formData.checkOut &&
      formData.checkOut <= formData.checkIn
    ) {
      validationErrors.checkOut = "Check-out must be after check-in";
    }

    return validationErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const bookingData = {
      id: Date.now(),
      hotelId: id,
      ...formData
    };

    dispatch(addBooking(bookingData));

    setSuccess(true);

    setTimeout(() => {
      navigate("/my-bookings");
    }, 1200);
  };

  if (success) {
    return (
      <div className="booking-success">
        <div className="success-box">
          <div className="success-icon">✓</div>
          <span>STAYNEST</span>
          <h1>Booking Confirmed</h1>
          <p>Your hotel reservation has been successfully created.</p>
          <button onClick={() => navigate("/my-bookings")}>
            View My Bookings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <section className="booking-header">
        <span>STAYNEST RESERVATION</span>
        <h1>Book Your Stay</h1>
        <p>Complete your details and reserve your room.</p>
      </section>

      <section className="booking-section">
        <div className="booking-form-wrapper">
          <div className="form-heading">
            <span>RESERVATION DETAILS</span>
            <h2>Tell us about yourself</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
                {errors.name && <small>{errors.name}</small>}
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                {errors.email && <small>{errors.email}</small>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter 10 digit number"
                  maxLength="10"
                />
                {errors.phone && <small>{errors.phone}</small>}
              </div>

              <div className="form-group">
                <label>Number of Guests</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Check-in Date</label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                />
                {errors.checkIn && <small>{errors.checkIn}</small>}
              </div>

              <div className="form-group">
                <label>Check-out Date</label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                />
                {errors.checkOut && <small>{errors.checkOut}</small>}
              </div>
            </div>

            <div className="form-group full-width">
              <label>Room Type</label>
              <select
                name="room"
                value={formData.room}
                onChange={handleChange}
              >
                <option value="Deluxe Room">Deluxe Room</option>
                <option value="Premium Room">Premium Room</option>
                <option value="Suite">Suite</option>
                <option value="Family Room">Family Room</option>
              </select>
            </div>

            <button className="confirm-btn" type="submit">
              Confirm Reservation
            </button>
          </form>
        </div>

        <div className="booking-info">
          <span>YOUR RESERVATION</span>

          <h3>Stay comfortably.<br />Travel freely.</h3>

          <p>
            Fill in your details carefully. Your booking information will be
            stored and available under My Bookings.
          </p>

          <div className="info-line"></div>

          <div className="info-item">
            <span>01</span>
            <p>Enter your personal details</p>
          </div>

          <div className="info-item">
            <span>02</span>
            <p>Select your stay dates</p>
          </div>

          <div className="info-item">
            <span>03</span>
            <p>Confirm your reservation</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Booking;