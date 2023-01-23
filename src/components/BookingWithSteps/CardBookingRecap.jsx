import cooks from "../../images/cooks.jpg";

export default function CardBookingRecap({ children }) {
  return (
    <article
      className="col card card-booking-recap"
      style={{
        backgroundImage: `url(${cooks})`,
        backgroundPositionX: "right",
      }}>
      <div className="bg-overlay light"></div>
      <div className="body">{children}</div>
    </article>
  );
}
