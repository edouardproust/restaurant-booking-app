import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// Components
import Button from "../Button";
import ImagesCol from "../ImagesCol";
import Section from "../Section";
import PageTitle from "../SectionPageTitle";
// Images
import restoIndoor from "../../images/resto-indoor.jpg";
import cooks from "../../images/cooks.jpg";

const TableDetails = ({ updateStep, setFormData }) => {
  const initialValues = {
    date: new Date().toJSON().slice(0, 10),
    time: new Date().getHours() + ":" + new Date().getMinutes(),
    dinners: 1,
    occasion: "none",
    seatingOptions: "Indoor",
    specialRequest: "",
  };

  const validationSchema = Yup.object().shape({
    date: Yup.date()
      .required("Required")
      .min(new Date().toJSON().slice(0, 10), "Must be today or later"),
    time: Yup.string().required("Required"),
    dinners: Yup.number()
      .required("Required")
      .min(1, "You must reserve at least 1 dinner.")
      .max(30, "You can reserve up to 20 dinners."),
    specialRequest: Yup.string()
      .min(3, "3 characters minimum")
      .max(200, "200 characters maximum"),
  });

  const next = (values) => {
    updateStep("next");
    setFormData([{ ...values }]);
  };

  return (
    <>
      <PageTitle title="Table details" />
      <Section>
        <div className="row gap-2 wrap">
          <div className="col">
            <p className="lead">Please choose your table.</p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={next}>
              {({ errors, touched, isValid }) => (
                <Form>
                  <div className="row">
                    <div className="form-group">
                      <label className="text-strong">Date</label>
                      <Field type="date" name="date" />
                      {errors.date && touched.date && (
                        <div className="input-error">{errors.date}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="text-strong">Time</label>
                      <Field type="time" name="time" />
                      {errors.time && touched.time && (
                        <div className="input-error">{errors.time}</div>
                      )}
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="text-strong">Dinners</label>
                    <Field type="number" name="dinners" min="1" max="30" />
                    {errors.dinners && touched.dinners && (
                      <div className="input-error">{errors.dinners}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="text-strong">Occasion</label>
                    <Field as="select" name="occasion">
                      {[
                        "--- Choose one ---",
                        "Birthday",
                        "Engagement",
                        "Wedding",
                        "Anniversary",
                      ].map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="form-group">
                    <label className="text-strong">Seating options</label>
                    {["Indoor", "Outdoor"].map((option, i) => (
                      <label key={option}>
                        <Field
                          type="radio"
                          name="seatingOptions"
                          value={option}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                  <div className="form-group">
                    <label className="text-strong">Special request</label>
                    <Field
                      as="textarea"
                      name="specialRequest"
                      rows="3"
                      placeholder="Add any comment here."
                    />
                    {errors.specialRequest && touched.specialRequest && (
                      <div className="input-error">{errors.specialRequest}</div>
                    )}
                  </div>
                  <div className="row">
                    <Button type="submit" disabled={!isValid}>
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
          <div className="col">
            <ImagesCol imgLeft={restoIndoor} imgRight={cooks} />
          </div>
        </div>
      </Section>
    </>
  );
};

export default TableDetails;
