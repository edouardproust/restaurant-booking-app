import Section from "./Section";
import mario from "../images/mario.jpg";
import adrian from "../images/adrian.jpg";
import ImagesCol from "./ImagesCol";

export default function About({ bg }) {
  return (
    <Section id="about" bg={bg}>
      <div className="row wrap">
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
            Velit laoreet id donec ultrices. Arcu ac tortor dignissim convallis
            aenean et tortor. Massa tincidunt nunc pulvinar sapien et. Diam quam
            nulla porttitor massa id.
          </p>
        </div>
        <ImagesCol imgLeft={adrian} imgRight={mario} />
      </div>
    </Section>
  );
}
