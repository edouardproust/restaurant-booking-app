import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";

export default function CardDish(props) {
  return (
    <article className="col card dish">
      <div className="head">
        <img src={props.dish.photo} alt={`Photo of ${props.dish.name}`} />
      </div>
      <div className="body">
        <div className="row">
          <h3 className="title">{props.dish.name}</h3>
          <div className="price">${props.dish.price}</div>
        </div>
        <p className="content">{props.dish.content}</p>
        <button className="btn btn-secondary btn-icon">
          <FontAwesomeIcon icon={faBicycle} />
          Order a delivery
        </button>
      </div>
    </article>
  );
}
