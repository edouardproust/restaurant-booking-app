import { useRef, useState } from "react";
import uuid from "react-uuid";
import { NavLink } from "react-router-dom";

export default function Nav({ mainMenu }) {
  const hamburgerEl = useRef(null);
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <>
      <nav>
        <ul className={`nav-menu ${isMenuActive ? "active" : ""}`}>
          {Object.entries(mainMenu).map((link) => (
            <li key={uuid()}>
              <NavLink
                to={link[1]}
                className={({ isActive }) =>
                  `text-strong ${isActive ? "active" : ""}`
                }
                onClick={() => setIsMenuActive(false)}>
                {link[0]}
              </NavLink>
            </li>
          ))}
        </ul>
        <div
          className={`hamburger ${isMenuActive ? "active" : ""}`}
          ref={hamburgerEl}
          onClick={() => setIsMenuActive(!isMenuActive)}>
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <span key={i} className="bar"></span>
            ))}
        </div>
      </nav>
    </>
  );
}
