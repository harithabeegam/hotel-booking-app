import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import About from "./pages/About";
import Services from "./pages/Services";
import Rooms from "./pages/Rooms";
import Facilities from "./pages/Facilities";
import Offers from "./pages/Offers";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/hotel/:id" element={<HotelDetails />} />
            <Route path="/about" element={<About />} />

            <Route path="/services" element={<Services />}>
              <Route path="rooms" element={<Rooms />} />
              <Route path="facilities" element={<Facilities />} />
              <Route path="offers" element={<Offers />} />
            </Route>

            <Route path="/booking/:id" element={<Booking />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;