import { useReducer, useState } from "react";
import { dayToString, bookingStartDate } from "../../helpers/dateTime";
import ImagesCol from "../ImagesCol";
import Section from "../Section";
import PageTitle from "../SectionPageTitle";
// Components
import BookingForm from "./BookingForm";
import BookingSuccess from "./BookingSuccess";
// Images
import restoIndoor from "../../images/resto-indoor.jpg";
import cooks from "../../images/cooks.jpg";

export default function Booking() {
  const [isSubmitted, setSubmited] = useState(false);
  const [data, setData] = useState({
    date: dayToString(bookingStartDate(), true),
    time: 17,
    dinners: 1,
    occasion: "/",
    seatingOptions: "Indoor",
    specialRequest: "/",
  });
  const initializeTimes = () => {
    return [17, 18, 19, 20, 21];
  };

  const handleChange = (e, fieldId) => {
    setData({ ...data, [fieldId]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmited(true);
  };

  const updateTimeReducer = (state, action) => {
    console.log("TODO: Booking::updateTimeReducer");
    console.log("date (action):", action.event.target.value);
    console.log("availableTimes (state):", state);
    handleChange(action.event, "date");
    return [...state];
  };

  const [availableTimes, dispatchTimes] = useReducer(
    updateTimeReducer,
    initializeTimes()
  );

  return (
    <>
      <div className={`popup ${!isSubmitted ? "hidden" : ""}`}>
        <BookingSuccess />
      </div>
      <PageTitle title="Table details" />
      <Section>
        <div className="row gap-2 wrap">
          <div className="col">
            <p className="lead">
              Please fill in the details concerning your reservation.
            </p>
            <form onSubmit={handleSubmit}>
              <BookingForm
                data={data}
                handleChange={handleChange}
                availableTimes={availableTimes}
                dispatchTimes={dispatchTimes}
              />
            </form>
          </div>
          <div className="col">
            <ImagesCol imgLeft={restoIndoor} imgRight={cooks} />
          </div>
        </div>
      </Section>
    </>
  );
}
