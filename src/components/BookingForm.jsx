import { useState } from "react";
import { dateToString, nextMonthDays } from "../helpers/dateTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
// Components
import Button from "./Button";

const BookingForm = ({ handleSubmit, data, setData, getSlots, isLoading }) => {
  const [slots, setSlots] = useState(getSlots());

  const handleChange = (e, fieldId) => {
    setData({ ...data, [fieldId]: e.target.value });
  };

  const updateSlots = (e) => {
    // Update date input value
    handleChange(e, "date");
    // Update times input options
    const slots = getSlots(e);
    setSlots(slots);
  };

  const availableDates = () =>
    nextMonthDays().map((date) => dateToString(date, true));

  const getIsValid = () => {
    return (
      data.date &&
      data.time &&
      data.dinners > 0 &&
      (!data.specialRequest || data.specialRequest.length >= 10)
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group">
          <label htmlFor="date">Choose date</label>
          <select
            id="date"
            data-testid="date"
            name="date"
            value={data.date}
            onChange={updateSlots}>
            {availableDates().map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {!data.date ? <p className="input-error">Required</p> : ""}
        </div>
        <div className="form-group">
          <label htmlFor="time">Choose time</label>
          <select
            id="time"
            data-testid="time"
            name="time"
            onChange={(e) => handleChange(e, "time")}
            value={data.time}>
            {slots.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          {!data.time ? <p className="input-error">Required</p> : ""}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="dinners">Number of guests</label>
        <input
          type="number"
          id="dinners"
          name="dinners"
          value={data.dinners}
          min="1"
          max="30"
          onChange={(e) => handleChange(e, "dinners")}
        />
        {!data.dinners ? <p className="input-error">Required</p> : ""}
        {data.dinners && data.dinners < 1 ? (
          <p className="input-error">There must be at least one guest</p>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          onChange={(e) => handleChange(e, "occasion")}>
          {["None", "Birthday", "Engagement", "Wedding", "Anniversary"].map(
            (option) => (
              <option value={option} key={option}>
                {option}
              </option>
            )
          )}
        </select>
      </div>
      <div className="form-group">
        <label>Seating options</label>
        {["Indoor", "Outdoor"].map((option, i) => (
          <label key={option}>
            <input
              type="radio"
              name="seatingOptions"
              value={option}
              onChange={(e) => handleChange(e, "seatingOptions")}
              checked={option === data.seatingOptions}
            />
            {option}
          </label>
        ))}
      </div>
      <div className="form-group">
        <label htmlFor="specialRequest">Special request</label>
        <textarea
          id="specialRequest"
          name="specialRequest"
          rows={3}
          placeholder="Add any comment here"
          onChange={(e) => handleChange(e, "specialRequest")}
          style={{ resize: "none" }}
        />
        {data.specialRequest && data.specialRequest.length < 10 ? (
          <p className="input-error">Minimum 10 characters</p>
        ) : (
          ""
        )}
      </div>
      <div className="row">
        <Button type="submit" disabled={!getIsValid() || isLoading}>
          <FontAwesomeIcon icon={faCheck} />
          {isLoading ? "Loading..." : "Confirm"}
        </Button>
      </div>
    </form>
  );
};

export default BookingForm;
