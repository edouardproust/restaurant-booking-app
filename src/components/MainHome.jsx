import uuid from "react-uuid";
// Components
import CardDish from "./CardDish";
import CardTestimonial from "./CardTestimonial";
import Button from "./Button";
// Images
import heroBg from "../images/cooking.jpg";
import testimonialsBg from "../images/restaurant-room.jpg";
import greekSalad from "../images/greek-salad.jpeg";
import bruschetta from "../images/bruschetta.jpg";
import lemonDessert from "../images/lemon-dessert.webp";
import woman1 from "../images/woman1.jpg";
import man1 from "../images/man1.jpg";
import man2 from "../images/man2.jpg";
import mario from "../images/mario.jpg";
import adrian from "../images/adrian.jpg";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

export default function MainHome() {
  const dishes = [
    {
      name: "Greek Salad",
      photo: greekSalad,
      price: "12.99",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Bruschetta",
      photo: bruschetta,
      price: "9.99",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Lemon Dessert",
      photo: lemonDessert,
      price: "5.99",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const testimonials = [
    {
      name: "C. Leman",
      photo: woman1,
      notation: 5,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "P. Marchant",
      photo: man1,
      notation: 4.5,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "R. Lebois",
      photo: man2,
      notation: 5,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <main>
      <section id="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="bg-overlay"></div>
        <div className="section-container">
          <div className="col">
            <h1 className="light">
              Little Lemon<div>Chicago</div>
            </h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Euismod elementum nisi quis.
            </p>
            <Button>Reserve a table</Button>
          </div>
        </div>
      </section>
      <section id="specials">
        <div className="section-container">
          <div className="row row-title">
            <h2>This week's specials!</h2>
            <Button>
              <FontAwesomeIcon icon={faBookOpen} /> Online menu
            </Button>
          </div>
          <div className="row">
            {dishes.map((dish) => (
              <CardDish
                key={uuid()}
                photo={dish.photo}
                name={dish.name}
                price={dish.price}
                content={dish.content}
              />
            ))}
          </div>
        </div>
      </section>
      <section
        id="testimonials"
        style={{ backgroundImage: `url(${testimonialsBg})` }}>
        <div className="bg-overlay"></div>
        <div className="section-container">
          <h2>Testimonials</h2>
          <div className="row">
            {testimonials.map((testimonial) => (
              <CardTestimonial key={uuid()} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="section-container">
        <div className="row gap-20">
          <div className="col">
            <h2>Little Lemon</h2>
            <div className="lead">Chicago</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
              euismod nisi porta lorem mollis aliquam.
            </p>
            <p>
              Justo laoreet sit amet cursus sit amet dictum. Pharetra magna ac
              placerat vestibulum lectus mauris ultrices eros in. Sed viverra
              tellus in hac habitasse platea dictumst vestibulum rhoncus.
            </p>
            <p>
              Velit laoreet id donec ultrices. Arcu ac tortor dignissim
              convallis aenean et tortor. Massa tincidunt nunc pulvinar sapien
              et. Diam quam nulla porttitor massa id.
            </p>
          </div>
          <div className="col">
            <div
              className="photo-adrian"
              style={{ backgroundImage: `url(${adrian})` }}></div>
            <div
              className="photo-mario"
              style={{ backgroundImage: `url(${mario})` }}></div>
          </div>
        </div>
      </section>
    </main>
  );
}
