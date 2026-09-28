import { useSelector, useDispatch } from "react-redux";
import { deleteBooking } from "../redux/BookingSlice";
import "./MyBookings.css";

function MyBookings() {

  const bookings = useSelector(
    (state) => state.booking.bookings
  );

  const dispatch = useDispatch();

  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (confirmDelete) {
      dispatch(deleteBooking(id));
    }
  };

  return (
    <div className="my-bookings-page">

      <div className="bookings-header">

        <p>STAYNEST</p>

        <h1>My Bookings</h1>

        <span>
          View and manage your hotel reservations.
        </span>

      </div>

      <div className="bookings-container">

        {bookings.length === 0 ? (

          <div className="empty-bookings">

            <h2>No Bookings Yet</h2>

            <p>
              Your confirmed hotel bookings will appear here.
            </p>

          </div>

        ) : (

          bookings.map((booking) => (

            <div
              className="booking-card"
              key={booking.id}
            >

              <div className="booking-info">

                <h2>{booking.name}</h2>

                <p>
                  Email: {booking.email}
                </p>

                <p>
                  Phone: {booking.phone}
                </p>

                <p>
                  Guests: {booking.guests}
                </p>

                <p>
                  Check-in: {booking.checkIn}
                </p>

                <p>
                  Check-out: {booking.checkOut}
                </p>

              </div>

              <button
                className="cancel-btn"
                onClick={() => handleDelete(booking.id)}
              >
                Cancel Booking
              </button>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default MyBookings;