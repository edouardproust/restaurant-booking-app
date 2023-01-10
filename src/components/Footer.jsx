import uuid from "react-uuid";
import logoIcon from "../images/logo-icon.png";

export default function Footer(props) {
  const phone = "(415) 206-1786";
  const email = "contact@littlelemon.com";
  const social = [
    { label: "Instagram", url: "https://www.instagram.com/" },
    { label: "Twitter", url: "https://www.twitter.com" },
    { label: "Facebook", url: "https://www.facebook.com" },
    { label: "Pinterest", url: "https://www.pinterest.com" },
  ];

  return (
    <footer>
      <div className="section-container">
        <div className="col">
          <img src={logoIcon} alt="Icon Little Lemon restaurant" />
        </div>
        <div className="col">
          <h3>Links</h3>
          <ul>
            {props.mainMenu.map((link) => (
              <li key={uuid()}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h3>Contact</h3>
          <ul>
            <li>
              58 Middle Point Rd <br />
              San Francisco, California(CA), <br />
              94124
            </li>
            <li>
              <a href={"tel:" + phone}>{phone}</a>
            </li>
            <li>
              <a href={"mailto:" + email}>{email}</a>
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
    </footer>
  );
}
