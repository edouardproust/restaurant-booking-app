import "./styles/app.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
// Routes
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Home";
import About from "./components/pages/About";
import Order from "./components/pages/Order";
import Login from "./components/pages/Login";
import Booking from "./components/pages/Booking/Booking";

const siteName = "Little Lemon Chicago";

function App() {
  const mainMenu = [
    { label: "Home", route: "/" },
    { label: "About", route: "/about" },
    { label: "Booking", route: "/booking" },
    { label: "Order online", route: "/order" },
    { label: "Login", route: "/login" },
  ];

  return (
    <>
      <Header mainMenu={mainMenu} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer mainMenu={mainMenu} siteName={siteName} />
    </>
  );
}

export default App;
