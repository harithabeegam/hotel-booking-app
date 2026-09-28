import { NavLink, Outlet } from "react-router-dom";
import "./services.css";

function Services() {
  return (
    <div className="services-page">
      <div className="services-header">
        <p>STAYNEST SERVICES</p>

        <h1>
          Everything You Need for a Comfortable Stay
        </h1>

        <span>
          Explore our rooms, facilities and special offers.
        </span>
      </div>

      <div className="services-menu">
        <NavLink to="/services/rooms">
          Rooms
        </NavLink>

        <NavLink to="/services/facilities">
          Facilities
        </NavLink>

        <NavLink to="/services/offers">
          Offers
        </NavLink>
      </div>

      <div className="services-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Services;