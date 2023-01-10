import uuid from "react-uuid";
// Components
import CardDish from "./CardDish";
import CardTestimonial from "./CardTestimonial";
// Images
import greekSalad from "../images/greek-salad.jpeg";
import bruschetta from "../images/bruschetta.jpg";
import lemonDessert from "../images/lemon-dessert.webp";
import woman1 from "../images/woman1.jpg";
import man1 from "../images/man1.jpg";
import man2 from "../images/man2.jpg";
import mario from "../images/mario.jpg";
import adrian from "../images/adrian.jpg";

export default function Main() {
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
      constent:
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
      <section id="hero">
        <div className="section-container">
          <h1>Little Lemon</h1>
          <div className="lead-text">Chicago</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod
            elementum nisi quis.
          </p>
          <button className="btn btn-primary">Reserve a table</button>
        </div>
      </section>
      <section id="specials">
        <div className="section-container">
          <div className="row">
            <h2>This week's specials!</h2>
            <button className="btn btn-primary">Online menu</button>
          </div>
          <div className="row">
            {dishes.map((dish) => (
              <CardDish key={uuid()} dish={dish} />
            ))}
          </div>
        </div>
      </section>
      <section id="testimonials">
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
        <div className="row">
          <div className="col">
            <h2>Little Lemon</h2>
            <div className="lead-text">Chicago</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
              euismod nisi porta lorem mollis aliquam. Justo laoreet sit amet
              cursus sit amet dictum. Pharetra magna ac placerat vestibulum
              lectus mauris ultrices eros in. Sed viverra tellus in hac
              habitasse platea dictumst vestibulum rhoncus. Velit laoreet id
              donec ultrices. Arcu ac tortor dignissim convallis aenean et
              tortor. Massa tincidunt nunc pulvinar sapien et. Diam quam nulla
              porttitor massa id.
            </p>
          </div>
          <div className="col">
            <img
              src={adrian}
              alt="Photo of Adrian, co-founder of Little Lemon"
            />
            <img src={mario} alt="Photo of Mario, co-founder of Little Lemon" />
          </div>
        </div>
      </section>
    </main>
  );
}
