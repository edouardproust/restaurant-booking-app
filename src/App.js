import "./styles/app.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

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
      <Main />
      <Footer mainMenu={mainMenu} />
    </>
  );
}

export default App;
