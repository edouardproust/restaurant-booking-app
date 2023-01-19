import { Field } from "formik";
import Button from "../../Button";
import Section from "../../Section";
import PageTitle from "../../SectionPageTitle";

const PersonalDetails = ({ updateStep, formik }) => {
  const { values, errors, touched, isValid, dirty } = formik;
  const next = (e) => {
    e.preventDefault();
    updateStep("next");
  };
  const previous = (e) => {
    e.preventDefault();
    updateStep("prev");
  };

  return (
    <>
      <PageTitle title="Personal informations" />
      <Section>
        <div className="row gap-2 wrap">
          <div className="col">
            <p className="lead">Sign-up to collect points</p>
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
                <div className="input-error">{errors.password}</div>
              )}
            </div>
            <div className="row">
              <Button classes="btn-secondary" onClick={previous}>
                Back
              </Button>
              <Button onClick={next} disabled={!dirty || !isValid}>
                Next
              </Button>
            </div>
          </div>
          <div className="col card card-light booking-recap">
            <div className="body">
              <h3>Table details</h3>
              {Object.entries(values).map((val) => (
                <li>
                  {val[0]}: {val[1]}
                </li>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default PersonalDetails;
