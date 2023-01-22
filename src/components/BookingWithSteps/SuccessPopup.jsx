import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from "../Button";

const SuccessPopup = () => {
  return (
    <div className="popup-container">
      <Link to="/">
        <div className="close">
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </div>
      </Link>
      <div className="content">
        <h3>Your reservation has been successfully completed.</h3>
        <p>
          Your reservation has been saved. We are waiting for you{" "}
          <b>at Little Lemon, 122 Main Street, Chicago</b> on{" "}
          <b>18/12/22, 8:00pm.</b>
        </p>
        <p className="text-strong">Next steps:</p>
        <ul>
          <li>
            You will receive a notification remainder by SMS one hour before the
            scheduled time
          </li>
          <li>
            Our staff will call you in case you don’t show up on the time you
            chose
          </li>
        </ul>
        <div id="gmaps">
          <iframe
            title="gmaps"
            width="500"
            height="280"
            src="https://maps.google.com/maps?hl=en&amp;q=58 Middle Point Rd San Francisco, California(CA), 94124+(Little Lemon)&amp;ie=UTF8&amp;t=&amp;z=11&amp;iwloc=B&amp;output=embed"></iframe>
          <div className="gmaps">
            <div className="gmaps-sub">
              <a href="https://googlemapsembed.net/">Embed Google Map</a>
            </div>
          </div>
        </div>
        <div className="row" style={{ justifyContent: "center" }}>
          <a
            href="https://www.google.com/maps?ll=37.736611,-122.379577&z=11&t=m&hl=en&gl=US&mapclient=embed&q=58+Middle+Point+Rd+San+Francisco,+CA+94124+USA"
            target="blank"
            className="btn-link">
            <Button classes="btn-secondary">Open in Google Maps</Button>
          </a>
          <Link to="/" className="btn-link">
            <Button classes="btn-primary">Close</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;
