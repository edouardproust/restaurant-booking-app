import Section from "./Section";

export default function Plaintext({ children, bg, classes }) {
  let content;
  if (children) {
    content = children;
  } else {
    content = (
      <>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum beatae,
          ipsa quaerat dignissimos nam quasi. Dignissimos fugit architecto enim!
          Consequuntur ea doloremque quae sit at quos est numquam dicta
          accusantium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam,
          doloribus non repudiandae, eos alias praesentium esse perferendis
          soluta velit aliquid saepe necessitatibus minus odio sequi. Deserunt
          culpa doloribus facere eum.
        </p>
      </>
    );
  }

  return (
    <Section id="plainText" bg={bg}>
      <div className={`content ${classes}`}>{content}</div>
    </Section>
  );
}
