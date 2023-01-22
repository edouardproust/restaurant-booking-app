import "./styles/app.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
// Routes
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Home";
import About from "./components/pages/About";
import Order from "./components/pages/Order";
import Login from "./components/pages/Login";
import Booking from "./components/pages/Booking";
import BookingWithSteps from "./components/pages/BookingWithSteps";
import Page404 from "./components/pages/404";

// Global Settings
const siteName = "Little Lemon Chicago";
const mainMenu = {
  Home: "/",
  About: "/about",
  Booking: "/booking",
  "Order online": "/order",
  Login: "/login",
};
const multiStepsBooking = false;

// App
function App() {
  const updatedMainMenu = multiStepsBooking
    ? { ...mainMenu, Booking: "/booking-steps" }
    : { ...mainMenu };

  return (
    <>
      <Header mainMenu={updatedMainMenu} />
      <main>
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<Homepage links={updatedMainMenu} />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
          {multiStepsBooking ? (
            <Route path="/booking-steps" element={<BookingWithSteps />} />
          ) : (
            <Route path="/booking" element={<Booking />} />
          )}
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer mainMenu={updatedMainMenu} siteName={siteName} />
    </>
  );
}

export default App;
