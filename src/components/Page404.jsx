import { Link } from "react-router-dom";
import Button from "./Button";

export default function Page404() {
  return (
    <>
      <section id="notFound">
        <div className="section-container">
          <div className="row wrap">
            <div className="col">
              <h1 className="light">
                Page not found.<div>Error 404</div>
              </h1>
              <p className="lead">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique est porro eius nihil ullam mollitia sequi unde.
              </p>
              <Link to="/">
                <Button classes="btn-secondary btn-sm">Return to home</Button>
              </Link>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </section>
    </>
  );
}
