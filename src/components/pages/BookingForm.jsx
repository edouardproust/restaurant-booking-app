import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { dayToString, nextMonthDays } from "../../helpers/dateTime";
// Components
import Button from "../Button";
import ImagesCol from "../ImagesCol";
import Section from "../Section";
import PageTitle from "../SectionPageTitle";
// Images
import restoIndoor from "../../images/resto-indoor.jpg";
import cooks from "../../images/cooks.jpg";

const BookingForm = ({ handleSubmit, availableTimes, dispatchTimes }) => {
  const initialValues = {
    date: dayToString(new Date(), true),
    time: "",
    dinners: 1,
    occasion: "none",
    seatingOptions: "Indoor",
    specialRequest: "",
  };

  const validationSchema = Yup.object().shape({
    time: Yup.string().required("Required"),
    dinners: Yup.number()
      .required("Required")
      .min(1, "You must reserve at least 1 dinner.")
      .max(30, "You can reserve up to 20 dinners."),
    specialRequest: Yup.string()
      .min(3, "3 characters minimum")
      .max(200, "200 characters maximum"),
  });

  const availableDates = () =>
    nextMonthDays().map((date) => dayToString(date, true));

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
              onSubmit={handleSubmit}>
              {({ values, errors, touched, isValid }) => (
                <Form>
                  <div className="row">
                    <div className="form-group">
                      <label htmlFor="date">Choose date</label>
                      <Field
                        as="select"
                        id="date"
                        name="date"
                        onChange={(e) =>
                          dispatchTimes({ time: e.target.value })
                        }>
                        {availableDates().map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </Field>
                    </div>
                    <div className="form-group">
                      <label htmlFor="time">Choose time</label>
                      <Field as="select" id="time" name="time">
                        {availableTimes.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </Field>
                      {errors.time && touched.time && (
                        <div className="input-error">{errors.time}</div>
                      )}
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="dinners">Number of guests</label>
                    <Field
                      type="number"
                      id="dinners"
                      name="dinners"
                      min="1"
                      max="30"
                    />
                    {errors.dinners && touched.dinners && (
                      <div className="input-error">{errors.dinners}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="occasion">Occasion</label>
                    <Field as="select" id="occasion" name="occasion">
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
                    <label>Seating options</label>
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
                    <label htmlFor="specialRequest">Special request</label>
                    <Field
                      as="textarea"
                      id="specialRequest"
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
                      <FontAwesomeIcon icon={faCheck} />
                      Confirm
                    </Button>
                  </div>
                  <h3>Debug</h3>
                  {Object.entries(values).map(([key, val]) => (
                    <li key={key}>
                      {key}: {val}
                    </li>
                  ))}
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

export default BookingForm;
