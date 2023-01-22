import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
// Components
import Button from "../Button";
import Section from "../Section";
import PageTitle from "../SectionPageTitle";
import SuccessPopup from "./SuccessPopup";
import valid from "card-validator";
// Images
import cvv from "../../images/cvv.png";
import CardBookingRecap from "./CardBookingRecap";

const Confirmation = ({ updateStep, formData, setFormData }) => {
  const [isSubmitted, setSubmitted] = useState(false);
  const initialValues = {
    cardNumber: "",
    nameOnCard: "",
    expDate: "",
    cvv: "",
    sendSms: true,
    sendEmail: true,
  };
  const validationSchema = Yup.object().shape({
    cardNumber: Yup.string()
      .required("Required")
      .test(
        "test-number",
        "Invalid Credit Card number",
        (value) => valid.number(value, 3).isValid
      ),
    nameOnCard: Yup.string().required("Required").min(2, "Too short"),
    expDate: Yup.string()
      .required("Required")
      .test(
        "test-exp-date",
        "Invalid expiration date",
        (value) => valid.expirationDate(value).isValid
      ),
    cvv: Yup.string()
      .required("Required")
      .test("test-cvv", "Invalid CVV", (value) => valid.cvv(value).isValid),
  });

  const handleSubmit = (values) => {
    setSubmitted(true);
    setFormData([...formData, { ...values }]);
  };

  const previous = () => {
    updateStep("prev");
  };

  return (
    <>
      <div className={`popup ${!isSubmitted ? "hidden" : ""}`}>
        <SuccessPopup />
      </div>
      <PageTitle title="Booking confirmation" />
      <Section>
        <div className="row gap-2 wrap">
          <div className="col">
            <p className="lead">
              Please enter your payment details in order to confirm your
              booking. No fees will be charged.
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}>
              {({ errors, touched, isValid, dirty }) => (
                <Form>
                  <div className="form-group">
                    <label className="text-strong">Card number</label>
                    <Field type="number" name="cardNumber" />
                    {errors.cardNumber && touched.cardNumber && (
                      <div className="input-error">{errors.cardNumber}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="text-strong">
                      First name & Last name
                    </label>
                    <Field type="text" name="nameOnCard" />
                    {errors.nameOnCard && touched.nameOnCard && (
                      <div className="input-error">{errors.nameOnCard}</div>
                    )}
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label className="text-strong">Expiration date</label>
                        <Field type="month" name="expDate" />
                        {errors.expDate && touched.expDate && (
                          <div className="input-error">{errors.expDate}</div>
                        )}
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <label className="text-strong">CVV</label>
                        <Field type="number" name="cvv" />
                        {errors.cvv && touched.cvv && (
                          <div className="input-error">{errors.cvv}</div>
                        )}
                      </div>
                    </div>
                    <div className="cvv">
                      <img src={cvv} alt="CVV help" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>
                      <Field type="checkbox" name="sendSms" />
                      Send me booking confirmation via sms
                    </label>
                    <label>
                      <Field type="checkbox" name="sendEmail" />
                      Send me booking confirmation via email
                    </label>
                  </div>
                  <div className="row">
                    <Button classes="btn-secondary" onClick={previous}>
                      Back
                    </Button>
                    <Button type="submit" disabled={!dirty || !isValid}>
                      <FontAwesomeIcon icon={faCheck} />
                      Confirm
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <CardBookingRecap>
            <h3>Table details</h3>
            <ul>
              {[
                ["Date", "date"],
                ["Time", "time"],
                ["Dinners", "dinners"],
                ["Occasion", "occasion"],
                ["Special request", "specialRequest"],
              ].map((row) => (
                <li>
                  <span className="text-strong">{row[0]}:</span>{" "}
                  {formData[0][row[1]]}
                </li>
              ))}
            </ul>
            <h3>Client informations</h3>
            <ul>
              {[
                ["First name", "firstName"],
                ["Last name", "lastName"],
                ["Email", "email"],
              ].map((row) => (
                <li>
                  <span className="text-strong">{row[0]}:</span>{" "}
                  {formData[1][row[1]]}
                </li>
              ))}
            </ul>
          </CardBookingRecap>
        </div>
      </Section>
    </>
  );
};

export default Confirmation;
