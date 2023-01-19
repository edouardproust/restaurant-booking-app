import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// Components
import Button from "../../Button";
import Section from "../../Section";
import PageTitle from "../../SectionPageTitle";

const PersonalDetails = ({ updateStep, formData, setFormData }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const next = () => {
    updateStep("next");
    setFormData("TODO");
  };
  const previous = () => {
    updateStep("prev");
  };

  return (
    <>
      <PageTitle title="Personal informations" />
      <Section>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={next}>
          {({ values, errors, touched, isValid, dirty }) => (
            <div className="row gap-2 wrap">
              <div className="col">
                <p className="lead">Sign-up to collect points</p>

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
                      <div className="input-error">{errors.password}</div>
                    )}
                  </div>
                  <div className="row">
                    <Button classes="btn-secondary" onClick={previous}>
                      Back
                    </Button>
                    <Button type="submit" disabled={!dirty || !isValid}>
                      Next
                    </Button>
                  </div>
                </Form>
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
          )}
        </Formik>
      </Section>
    </>
  );
};

export default PersonalDetails;
