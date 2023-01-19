import Button from "../../Button";
import ImagesCol from "../../ImagesCol";
import Section from "../../Section";
import PageTitle from "../../SectionPageTitle";
// Images
import restoIndoor from "../../../images/resto-indoor.jpg";
import cooks from "../../../images/cooks.jpg";
import { Field } from "formik";

const TableDetails = ({ updateStep, formik }) => {
  const { errors, touched, isValid, dirty } = formik;
  const next = (e) => {
    e.preventDefault();
    updateStep("next");
  };

  console.log(isValid);
  console.log(errors);

  return (
    <>
      <PageTitle title="Table details" />
      <Section>
        <div className="row gap-2 wrap">
          <div className="col">
            <p className="lead">Please choose your table.</p>
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
                  "None",
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
                  <Field type="radio" name="seatingOptions" value={option} />
                  {option}
                </label>
              ))}
            </div>
            <div className="form-group">
              <label className="text-strong">Special request</label>
              <Field as="textarea" name="specialRequest" />
            </div>
            <div className="row">
              <Button onClick={next} disabled={!dirty || !isValid}>
                Next
              </Button>
            </div>
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
