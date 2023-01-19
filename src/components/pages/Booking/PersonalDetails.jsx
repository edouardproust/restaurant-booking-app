import Button from "../../Button";
import Section from "../../Section";
import PageTitle from "../../SectionPageTitle";

const PersonalDetails = ({ updateStep, handleChange, data }) => {
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
                <input
                  type="text"
                  name="firstname"
                  value={data["firstname"].value}
                  onChange={handleChange("firstname")}
                />
              </div>
              <div className="form-group">
                <label className="text-strong">Last name</label>
                <input
                  type="text"
                  name="lastname"
                  value={data["lastname"].value}
                  onChange={handleChange("lastname")}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="text-strong">Email</label>
              <input
                type="email"
                name="email"
                value={data["email"].value}
                onChange={handleChange("email")}
              />
            </div>
            <div className="form-group">
              <label className="text-strong">Password</label>
              <input
                type="password"
                name="password"
                value={data["password"].value}
                onChange={handleChange("password")}
              />
            </div>
            <div className="row">
              <Button classes="btn-secondary" onClick={previous}>
                Back
              </Button>
              <Button onClick={next}>Next</Button>
            </div>
          </div>
          <div className="col card card-light booking-recap">
            <div className="body">
              <h3>Table details</h3>
              {Object.values(data)
                .filter((input) => input.step === 1 && input.value)
                .map((input) => (
                  <li>
                    <span className="text-strong">{input.label}:</span>{" "}
                    {input.value}
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
