import { capitalize } from "../helpers/string";
import heroBg from "../images/cooking.jpg";

export default function PageTitle({ children, id, title }) {
  let content;
  if (children) {
    content = children;
  } else {
    content = (
      <>
        <h1 className="light">
          Little Lemon<div>Chicago</div>
        </h1>
        <p className="lead">{capitalize(title)}</p>
      </>
    );
  }

  return (
    <section
      id={id ?? "pageTitle"}
      style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="bg-overlay dark"></div>
      <div className="section-container">
        <div className="row wrap">
          <div className="col">{content}</div>
          <div className="col"></div>
        </div>
      </div>
    </section>
  );
}
