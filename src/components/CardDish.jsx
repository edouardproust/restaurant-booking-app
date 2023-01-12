import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

export default function CardDish({ photo, name, price, content }) {
  return (
    <article className="col card dish">
      <div className="head" style={{ backgroundImage: `url(${photo})` }}></div>
      <div className="body">
        <div className="row">
          <h3 className="title">{name}</h3>
          <div className="price lead">${price}</div>
        </div>
        <p className="content">{content}</p>

        <Button classes="btn-secondary">
          <FontAwesomeIcon icon={faBicycle} />
          Order a delivery
        </Button>
      </div>
    </article>
  );
}
