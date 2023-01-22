import { useReducer, useState } from "react";
// Components
import BookingForm from "./BookingForm";
import BookingSuccess from "./BookingSuccess";

const updateTime = (state, action) => {
  console.log("action:", action.time);
  console.log("state:", state);
  return ["12:00", "13:00", "14:00", ...state];
};

export default function Booking() {
  const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00"];
  };
  const [availableTimes, dispatchTimes] = useReducer(
    updateTime,
    initializeTimes()
  );
  const [formData, setFormData] = useState([]);
  const [isSubmitted, setSubmitted] = useState(false);

  const handleSubmit = (values) => {
    setSubmitted(true);
    setFormData([...formData, { ...values }]);
  };

  return (
    <>
      <div className={`popup ${!isSubmitted ? "hidden" : ""}`}>
        <BookingSuccess />
      </div>
      <BookingForm
        handleSubmit={handleSubmit}
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
      />
    </>
  );
}
