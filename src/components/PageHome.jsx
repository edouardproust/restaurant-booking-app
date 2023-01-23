// Libraries
import uuid from "react-uuid";
// Components
import Section from "./Section";
import Button from "./Button";
import CardDish from "./CardDish";
import CardTestimonial from "./CardTestimonial";
import SectionAbout from "./SectionAbout";
// Images
import greekSalad from "../images/greek-salad.jpeg";
import bruschetta from "../images/bruschetta.jpg";
import lemonDessert from "../images/lemon-dessert.webp";
import woman1 from "../images/woman1.jpg";
import man1 from "../images/man1.jpg";
import man2 from "../images/man2.jpg";
import testimonialsBg from "../images/restaurant-room.jpg";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PageTitle from "./SectionPageTitle";

export default function PageHome({ links }) {
  const dishes = [
    {
      name: "Greek Salad",
      photo: greekSalad,
      price: "12.99",
      content:
        "Quaerat eligendi accusamus, ducimus veritatis maiores necessitatibus nobis at amet numquam odio deserunt.",
    },
    {
      name: "Bruschetta",
      photo: bruschetta,
      price: "9.99",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate molestias doloremque animi praesentium, ea quasi voluptatibus dolores, quaerat eligendi accusamus.",
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
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate molestias doloremque animi praesentium, ea quasi voluptatibus dolores, quaerat eligendi accusamus, ducimus veritatis maiores.",
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
        "Cupiditate molestias doloremque animi praesentium, ea quasi voluptatibus dolores, quaerat eligendi accusamus, ducimus veritatis maiores necessitatibus nobis at amet numquam odio deserunt.",
    },
  ];

  return (
    <>
      <PageTitle>
        <h1 className="light">
          Little Lemon<div>Chicago</div>
        </h1>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod
          elementum nisi quis.
        </p>
        <Link to={links["Booking"]}>
          <Button>Reserve a table</Button>
        </Link>
      </PageTitle>
      <Section id="specials">
        <div className="row row-title">
          <h2>This week's specials!</h2>
          <Link to="/order" className="btn-link">
            <Button>
              <FontAwesomeIcon icon={faBookOpen} /> Online menu
            </Button>
          </Link>
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
      </Section>
      <Section id="testimonials" bg={testimonialsBg} overlay="light">
        <h2>Testimonials</h2>
        <div className="row">
          {testimonials.map((testimonial) => (
            <CardTestimonial key={uuid()} testimonial={testimonial} />
          ))}
        </div>
      </Section>
      <SectionAbout />
    </>
  );
}
