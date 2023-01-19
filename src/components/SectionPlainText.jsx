import Section from "./Section";

export default function Plaintext({ children, bg, classes }) {
  let content;
  if (children) {
    content = children;
  } else {
    content = (
      <>
        <p>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            quaerat facere perspiciatis dolorum impedit nihil dolores repellat
            in unde illum possimus dicta aliquid non dolore quam distinctio
            autem, ipsum iste!
          </span>
          <span>
            Maxime et nobis soluta rem quam illo accusamus officiis reiciendis
            blanditiis quidem. Porro, cupiditate aperiam deleniti quibusdam
            labore vero ex. Quae facilis illo consequuntur laudantium quidem
            dolorem ipsam ab fugit?
          </span>
        </p>
        <p>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            sequi numquam doloribus placeat et cumque. Libero nihil unde eum
            nostrum culpa, excepturi impedit ex odit, suscipit omnis natus
            laborum repellendus.
          </span>
          <span>
            Blanditiis, dolores animi sunt aut repellendus quos, eveniet aperiam
            voluptatibus distinctio vitae commodi ab eius dolore alias voluptate
            ad sit in recusandae voluptas possimus! Libero dolore quo quos
            impedit soluta?
          </span>
        </p>
        <p>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            velit id reprehenderit nulla, perferendis, repudiandae expedita
            aspernatur temporibus, inventore nobis earum. Quisquam atque magni
            sapiente modi rerum enim magnam iusto!
          </span>
          <span>
            Consequatur ex, unde voluptate voluptatibus corporis ullam nihil,
            suscipit quaerat neque optio incidunt quo alias nesciunt vel
            necessitatibus minus laborum repudiandae iusto voluptatem fugiat
            officiis esse assumenda! Eos, sunt ut.
          </span>
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
