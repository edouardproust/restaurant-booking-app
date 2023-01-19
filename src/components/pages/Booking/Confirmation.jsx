import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
// Components
import Button from "../../Button";
import Section from "../../Section";
import PageTitle from "../../SectionPageTitle";
import SuccessPopup from "./SuccessPopup";
// Images
import ccv from "../../../images/ccv.png";

const Confirmation = ({ updateStep, formformData, setFormDataik }) => {
  const [isSubmitted, setSubmitted] = useState(false);
  const initialValues = {
    cardNumber: "",
    nameOnCard: "",
    expDate: "",
    ccv: "",
  };
  const validationSchema = Yup.object().shape({
    cardNumber: Yup.string().required("Required"),
    nameOnCard: Yup.string().required("Required"),
    expDate: Yup.string().required("Required"),
    ccv: Yup.string().required("Required"),
  });

  const handleSubmit = (values) => setSubmitted(true);
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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {({ values, errors, touched, isValid, dirty }) => (
            <div className="row gap-2 wrap">
              <div className="col">
                <p className="lead">
                  Please enter your payment details in order to confirm your
                  booking. No fees will be charged.
                </p>
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
                        <Field type="date" name="expDate" />
                        {errors.expDate && touched.expDate && (
                          <div className="input-error">{errors.expDate}</div>
                        )}
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <label className="text-strong">CCV</label>
                        <Field type="number" name="ccv" />
                        {errors.ccv && touched.ccv && (
                          <div className="input-error">{errors.ccv}</div>
                        )}
                      </div>
                    </div>
                    <div className="ccv">
                      <img src={ccv} alt="CCV help" />
                    </div>
                  </div>
                  <div className="row">
                    <Button classes="btn-secondary" onClick={previous}>
                      Back
                    </Button>
                    <Button type="submit" disabled={!dirty || !isValid}>
                      Confirm
                    </Button>
                  </div>
                </Form>
              </div>
              <div className="col card card-light booking-recap">
                <div className="body">
                  <h3>Table details</h3>TODO
                  <h3>Client informations</h3>
                  {Object.entries(values).map((val) => (
                    <li>
                      {val[0]}: {val[1]}
                    </li>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Formik>
      </Section>
    </>
  );
};

export default Confirmation;
