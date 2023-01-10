import logo from "../images/logo.png";
import Nav from "./Nav";

export default function Header(props) {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <Nav mainMenu={props.mainMenu} />
    </header>
  );
}
