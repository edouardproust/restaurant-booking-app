import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function CardDish({ photo, name, price, content }) {
  return (
    <article className="col card card-light">
      <div className="head" style={{ backgroundImage: `url(${photo})` }}></div>
      <div className="body">
        <div className="row">
          <h3 className="title">{name}</h3>
          <div className="price lead">${price}</div>
        </div>
        <p className="content">{content}</p>

        <Link to="/order" className="btn-link">
          <Button classes="btn-secondary btn-sm">
            <FontAwesomeIcon icon={faBicycle} />
            Order a delivery
          </Button>
        </Link>
      </div>
    </article>
  );
}
