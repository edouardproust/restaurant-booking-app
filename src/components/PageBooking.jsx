import { useState } from "react";
import {
  dateToString,
  stringToDate,
  bookingStartDate,
} from "../helpers/dateTime";
import { fetchAPI } from "../helpers/API";
// Components
import BookingForm from "./BookingForm";
import BookingSuccess from "./BookingSuccess";
import ImagesCol from "./ImagesCol";
import Section from "./Section";
import PageTitle from "./SectionPageTitle";
// Images
import restoIndoor from "../images/resto-indoor.jpg";
import cooks from "../images/cooks.jpg";

export default function PageBooking() {
  const [isSubmitted, setSubmited] = useState(false);

  const getSlots = (e = null) => {
    const slots = fetchAPI(
      e ? stringToDate(e.target.value) : bookingStartDate()
    );
    return slots;
  };

  const [data, setData] = useState({
    date: dateToString(bookingStartDate(), true),
    time: getSlots()[0],
    dinners: 1,
    occasion: "",
    seatingOptions: "Indoor",
    specialRequest: "",
  });

  return (
    <>
      <div className={`popup ${!isSubmitted ? "hidden" : ""}`}>
        <BookingSuccess data={data} />
      </div>
      <PageTitle title="Table details" />
      <Section>
        <div className="row gap-2 wrap">
          <div className="col">
            <p className="lead">
              Please fill in the details concerning your reservation.
            </p>
            <BookingForm
              setSubmited={setSubmited}
              data={data}
              setData={setData}
              getSlots={getSlots}
            />
          </div>
          <div className="col">
            <ImagesCol imgLeft={restoIndoor} imgRight={cooks} />
          </div>
        </div>
      </Section>
    </>
  );
}
