import "./styles/app.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainHome from "./components/MainHome";

function App() {
  const mainMenu = [
    { label: "Home", url: "#a" },
    { label: "About", url: "#b" },
    { label: "Reservation", url: "#c" },
    { label: "Order online", url: "#d" },
    { label: "Login", url: "#e" },
  ];

  return (
    <>
      <Header mainMenu={mainMenu} />
      <MainHome />
      <Footer mainMenu={mainMenu} />
    </>
  );
}

export default App;
