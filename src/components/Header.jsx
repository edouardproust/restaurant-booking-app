import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import Nav from "./Nav";

export default function Header({ mainMenu, multiStepsBooking }) {
  return (
    <header>
      <div className="section-container block">
        <div className="row">
          <Link to="/" className="img-link">
            <img src={logo} alt="Logo" />
          </Link>
          <Nav mainMenu={mainMenu} multiStepsBooking={multiStepsBooking} />
        </div>
      </div>
    </header>
  );
}
