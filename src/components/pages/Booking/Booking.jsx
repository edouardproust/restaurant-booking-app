import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import TableDetails from "./TableDetails";
import Confirmation from "./Confirmation";

export default function Booking() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    date: { label: "Date", value: "2023-01-19", step: 1 },
    time: { label: "Time", value: "03:14", step: 1 },
    dinners: { label: "Dinners", value: 1, step: 1 },
    occasion: { label: "Occasion", value: "none", step: 1 },
    seatingOptions: { label: "Seating options", value: "Indoor", step: 1 },
    specialRequest: { label: "Special request", value: "", step: 1 },
    firstname: { label: "First name", value: "", step: 2 },
    lastname: { label: "Last name", value: "", step: 2 },
    email: { label: "Email", value: "", step: 2 },
    password: { label: "Password", value: "", step: 2 },
    cardNumber: { label: "Card number", value: "", step: 3 },
    cardName: { label: "First name / Last name", value: "", step: 3 },
    expDate: { label: "Expiration date", value: "", step: 3 },
    ccv: { label: "CCV", value: "", step: 3 },
  });

  const updateStep = (action = "next") => {
    switch (action) {
      case "next":
        setStep(step + 1);
        break;
      case "prev":
        setStep(step - 1);
        break;
      default:
        throw new Error("Action should be either 'prev' or 'next'.");
    }
  };
  const handleChange = (input) => (e) => {
    setData({
      ...data,
      [input]: { ...data[input], value: e.target.value },
    });
  };

  switch (step) {
    case 1:
      return (
        <TableDetails
          updateStep={updateStep}
          handleChange={handleChange}
          data={data}
        />
      );
    case 2:
      return (
        <PersonalDetails
          updateStep={updateStep}
          handleChange={handleChange}
          data={data}
        />
      );
    case 3:
      return (
        <Confirmation
          updateStep={updateStep}
          handleChange={handleChange}
          data={data}
        />
      );
    default:
    // Do nothing
  }
}
