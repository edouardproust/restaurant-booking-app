import Button from "../../Button";
import ImagesCol from "../../ImagesCol";
import Section from "../../Section";
import PageTitle from "../../SectionPageTitle";
// Images
import restoIndoor from "../../../images/resto-indoor.jpg";
import cooks from "../../../images/cooks.jpg";

const TableDetails = ({ updateStep, handleChange, data }) => {
  const next = (e) => {
    e.preventDefault();
    updateStep("next");
  };

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
                <input
                  type="date"
                  name="date"
                  value={data["date"].value}
                  onChange={handleChange("date")}
                />
              </div>
              <div className="form-group">
                <label className="text-strong">Time</label>
                <input
                  type="time"
                  name="time"
                  value={data["time"].value}
                  onChange={handleChange("time")}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="text-strong">Dinners</label>
              <input
                type="number"
                name="dinners"
                value={data["dinners"].value}
                onChange={handleChange("dinners")}
              />
            </div>
            <div className="form-group">
              <label className="text-strong">Occasion</label>
              <select
                name="occasion"
                value={data["occasion"].value}
                onChange={handleChange("occasion")}>
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
              </select>
            </div>
            <div className="form-group">
              <label className="text-strong">Seating options</label>
              {["Indoor", "Outdoor"].map((option, i) => (
                <label key={option}>
                  <input
                    type="radio"
                    name="seatingOptions"
                    value={option}
                    checked={data["seatingOptions"].value === option}
                    onChange={handleChange("seatingOptions")}
                  />
                  {option}
                </label>
              ))}
            </div>
            <div className="form-group">
              <label className="text-strong">Special request</label>
              <textarea
                name="specialRequest"
                value={data["specialRequest"].value}
                onChange={handleChange("specialRequest")}
              />
            </div>
            <div className="row">
              <Button onClick={next}>Next</Button>
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
