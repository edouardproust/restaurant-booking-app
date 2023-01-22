import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// Components
import Button from "../Button";
import Section from "../Section";
import PageTitle from "../SectionPageTitle";
import CardBookingRecap from "./CardBookingRecap";

const PersonalDetails = ({ updateStep, formData, setFormData }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  YupPassword(Yup);
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("Required")
      .min(2, "Too short")
      .max(100, "Too long"),
    lastName: Yup.string()
      .required("Required")
      .min(2, "Too short")
      .max(100, "Too long"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required")
      .min(5, "Too short")
      .max(100, "Too long"),
    password: Yup.string().password().required("Required"),
  });

  const next = (values) => {
    updateStep("next");
    const valuesStep2 = { ...values };
    delete valuesStep2["password"];
    setFormData([...formData, { ...valuesStep2 }]);
  };
  const previous = () => {
    updateStep("prev");
  };

  return (
    <>
      <PageTitle title="Personal informations" />
      <Section>
        <div className="row gap-2 wrap">
          <div className="col">
            <p className="lead">Sign-up to collect points</p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={next}>
              {({ errors, touched, isValid, dirty }) => (
                <Form>
                  <div className="row">
                    <div className="form-group">
                      <label className="text-strong">First name</label>
                      <Field type="text" name="firstName" />
                      {errors.firstName && touched.firstName && (
                        <div className="input-error">{errors.firstName}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="text-strong">Last name</label>
                      <Field type="text" name="lastName" />
                      {errors.lastName && touched.lastName && (
                        <div className="input-error">{errors.lastName}</div>
                      )}
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="text-strong">Email</label>
                    <Field type="email" name="email" />
                    {errors.email && touched.email && (
                      <div className="input-error">{errors.email}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="text-strong">Password</label>
                    <Field type="password" name="password" />
                    {errors.password && touched.password && (
                      <div className="input-error">
                        {errors.password.charAt(0).toUpperCase() +
                          errors.password.slice(1)}
                      </div>
                    )}
                  </div>
                  <div className="row">
                    <Button classes="btn-secondary" onClick={previous}>
                      Back
                    </Button>
                    <Button type="submit" disabled={!dirty || !isValid}>
                      Next{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="mg-left"
                      />
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
                ["Seating options", "seatingOptions"],
                ["Special request", "specialRequest"],
              ].map((row) => (
                <li>
                  <span className="text-strong">{row[0]}:</span>{" "}
                  {formData[0][row[1]]}
                </li>
              ))}
            </ul>
          </CardBookingRecap>
        </div>
      </Section>
    </>
  );
};

export default PersonalDetails;
