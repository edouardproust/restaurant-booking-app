import { useState } from "react";
// Components
import PersonalDetails from "./PersonalDetails";
import BookingForm from "./TableDetails";
import Confirmation from "./Confirmation";

export default function BookingWithSteps() {
  const [formData, setFormData] = useState([]);
  const [step, setStep] = useState(1);

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

  return (
    <>
      {step === 1 ? (
        <BookingForm updateStep={updateStep} setFormData={setFormData} />
      ) : step === 2 ? (
        <PersonalDetails
          updateStep={updateStep}
          formData={formData}
          setFormData={setFormData}
        />
      ) : step === 3 ? (
        <Confirmation
          updateStep={updateStep}
          formData={formData}
          setFormData={setFormData}
        />
      ) : (
        ""
      )}
    </>
  );
}
