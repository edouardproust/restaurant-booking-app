import "./styles/app.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
// Routes
import { Routes, Route } from "react-router-dom";
import BookingWithSteps from "./components/BookingWithSteps";
import Page404 from "./components/Page404";
import PageHome from "./components/PageHome";
import PageAbout from "./components/PageAbout";
import PageOrder from "./components/PageOrder";
import PageBooking from "./components/PageBooking";
import PageLogin from "./components/PageLogin";

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
          <Route path="/" element={<PageHome links={updatedMainMenu} />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/order" element={<PageOrder />} />
          {multiStepsBooking ? (
            <Route path="/booking-steps" element={<BookingWithSteps />} />
          ) : (
            <Route path="/booking" element={<PageBooking />} />
          )}
          <Route path="/login" element={<PageLogin />} />
        </Routes>
      </main>
      <Footer mainMenu={updatedMainMenu} siteName={siteName} />
    </>
  );
}

export default App;
