import { useRef, useState } from "react";
import uuid from "react-uuid";

export default function Nav({ mainMenu }) {
  const hamburgerEl = useRef(null);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleHamburgerToogle = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <nav>
      <ul className={`nav-menu ${isMenuActive ? "active" : ""}`}>
        {mainMenu.map((link) => (
          <li key={uuid()}>
            <a className={`text-strong ${link.active}`} href={link.url}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div
        className={`hamburger ${isMenuActive ? "active" : ""}`}
        ref={hamburgerEl}
        onClick={handleHamburgerToogle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}
