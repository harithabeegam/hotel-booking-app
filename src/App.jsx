import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";
import Services from "./pages/Services";
import Rooms from "./pages/Rooms";
import Facilities from "./pages/Facilities";
import Offers from "./pages/Offers";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/hotels" element={<Hotels />} />

        <Route path="/hotels/:id" element={<HotelDetails />} />

        <Route path="/booking/:id" element={<Booking />} />

        <Route path="/my-bookings" element={<MyBookings />} />

        <Route path="/services" element={<Services />}>
          <Route path="rooms" element={<Rooms />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="offers" element={<Offers />} />
        </Route>

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;