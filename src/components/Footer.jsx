import uuid from "react-uuid";
import logoIcon from "../images/logo-icon.png";
import footerBg from "../images/lemons.jpg";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Footer({ mainMenu, siteName }) {
  const phone = "(415) 206-1786";
  const email = "contact@littlelemon.com";
  const social = [
    { label: "Instagram", url: "https://www.instagram.com/" },
    { label: "Twitter", url: "https://www.twitter.com" },
    { label: "Facebook", url: "https://www.facebook.com" },
    { label: "Pinterest", url: "https://www.pinterest.com" },
  ];

  return (
    <footer style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="bg-overlay dark"></div>
      <div className="section-container">
        <div className="row gap-2 wrap">
          <div className="col">
            <img src={logoIcon} alt="Icon Little Lemon restaurant" />
          </div>
          <div className="col">
            <h3>Links</h3>
            <ul>
              {Object.entries(mainMenu).map((link) => (
                <li key={uuid()}>
                  <Link to={link[1]}>{link[0]}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h3>Contact</h3>
            <ul>
              <li className="text-light">
                <div>
                  <FontAwesomeIcon icon={faLocationDot} />
                  58 Middle Point Rd
                </div>
                <div>San Francisco, California(CA),</div>
                <div>94124</div>
              </li>
              <li>
                <a href={"tel:" + phone}>
                  <FontAwesomeIcon icon={faPhone} />
                  {phone}
                </a>
              </li>
              <li>
                <a href={"mailto:" + email}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  {email}
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Social Medias</h3>
            <ul>
              {social.map((link) => (
                <li key={uuid()}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div id="copyright">
        © {siteName} {new Date().getFullYear()}
      </div>
    </footer>
  );
}
