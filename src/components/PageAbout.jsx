import PageTitle from "./SectionPageTitle";
import Plaintext from "./SectionPlainText";
import SectionAbout from "./SectionAbout";

export default function PageAbout() {
  return (
    <>
      <PageTitle title={"About us"} />
      <Plaintext classes="lead">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
        tempore natus ipsum numquam facere. Adipisci ullam, maiores excepturi
        similique voluptatem cupiditate suscipit mollitia dignissimos ut at
        deleniti porro tempora qui. Fugiat consectetur sint, veniam at velit
        doloribus perspiciatis dolor corporis magni qui a voluptate natus est
        magnam quasi quae vel, fugit tempora impedit ullam! Voluptatem aliquid
        voluptatibus ea sint quisquam!
      </Plaintext>
      <SectionAbout bg="light" />
    </>
  );
}
