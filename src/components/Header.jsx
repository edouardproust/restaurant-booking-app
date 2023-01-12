import logo from "../images/logo.png";
import Nav from "./Nav";

export default function Header({ mainMenu }) {
  return (
    <header>
      <div className="row section-container block">
        <img src={logo} alt="Logo" />
        <Nav mainMenu={mainMenu} />
      </div>
    </header>
  );
}
