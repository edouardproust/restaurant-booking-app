import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import TableDetails from "./TableDetails";
import Confirmation from "./Confirmation";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SuccessPopup from "./SuccessPopup";

const initialValues = {
  date: new Date().toJSON().slice(0, 10),
  time: new Date().toLocaleTimeString(),
  dinners: 2,
  occasion: "none",
  seatingOptions: "Indoor",
  specialRequest: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  cardNumber: "",
  nameOnCard: "",
  expDate: "",
  ccv: "",
};

const validationSchema = Yup.object().shape({
  date: Yup.date().required("Required"),
  time: Yup.string().required("Required"),
  dinners: Yup.number().required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  cardNumber: Yup.string().required("Required"),
  nameOnCard: Yup.string().required("Required"),
  expDate: Yup.string().required("Required"),
  ccv: Yup.string().required("Required"),
});

export default function Booking() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setSubmitted] = useState(false);

  const onSubmit = (values) => setSubmitted(true);

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
      <div className={`popup ${!isSubmitted ? "hidden" : ""}`}>
        <SuccessPopup />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {(formik) => (
          <Form>
            {step === 1 ? (
              <TableDetails formik={formik} updateStep={updateStep} />
            ) : step === 2 ? (
              <PersonalDetails formik={formik} updateStep={updateStep} />
            ) : step === 3 ? (
              <Confirmation formik={formik} updateStep={updateStep} />
            ) : (
              ""
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}
