import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        StayNest
      </div>

      <div className="navbar-links">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/hotels">Hotels</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/services">Services</NavLink>

        <NavLink to="/contact">Contact</NavLink>

        <NavLink to="/my-bookings">My Bookings</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;