export default function Section({ children, id, bg, overlay }) {
  let sectionStyle;
  let sectionClass;
  if (!bg) {
    sectionStyle = null;
    sectionClass = null;
  } else if (bg[0] === "/") {
    sectionStyle = { backgroundImage: `url(${bg})` };
    sectionClass = null;
  } else {
    sectionStyle = null;
    sectionClass = "bg-light";
  }

  return (
    <section id={id} style={sectionStyle} className={sectionClass}>
      {overlay ? <div className={`bg-overlay ${overlay}`}></div> : ""}
      <div className="section-container">{children}</div>
    </section>
  );
}
