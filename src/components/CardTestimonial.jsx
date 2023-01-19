import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import uuid from "react-uuid";

export default function CardTestimonial(props) {
  const stars = Math.floor(props.testimonial.notation);
  const halfStar = stars !== props.testimonial.notation ? 1 : null;

  return (
    <article className="col card card-testimonial">
      <div className="body">
        <div className="stars">
          {[...Array(stars)].map(() => (
            <FontAwesomeIcon key={uuid()} icon={faStar} />
          ))}
          {halfStar && <FontAwesomeIcon icon={faStarHalfStroke} />}
        </div>
        <div className="row author">
          <div
            className="photo"
            style={{
              backgroundImage: `url(${props.testimonial.photo})`,
            }}></div>
          <div className="name lead">{props.testimonial.name}</div>
        </div>
        <div className="content">
          <p>{props.testimonial.content}</p>
        </div>
      </div>
    </article>
  );
}
