import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { dayToString, nextMonthDays } from "../helpers/dateTime";
// Components
import Button from "./Button";

const BookingForm = ({ data, handleChange, availableTimes, dispatchTimes }) => {
  const availableDates = () =>
    nextMonthDays().map((date) => dayToString(date, true));

  return (
    <>
      <div className="row">
        <div className="form-group">
          <label htmlFor="date">Choose date</label>
          <select
            id="date"
            data-testid="date"
            name="date"
            value={data.date}
            onChange={(e) => dispatchTimes({ event: e })}>
            {availableDates().map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="time">Choose time</label>
          <select
            id="time"
            data-testid="time"
            name="time"
            onChange={(e) => handleChange(e, "time")}>
            {availableTimes.map((hour) => (
              <option key={hour} value={hour}>
                {hour}:00
              </option>
            ))}
          </select>
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
      </div>
      <div className="row">
        <Button type="submit">
          <FontAwesomeIcon icon={faCheck} />
          Confirm
        </Button>
      </div>
      <h3>Debug</h3>
      {Object.entries(data).map(([key, val]) => (
        <li key={key}>
          {key}: {val}
        </li>
      ))}
    </>
  );
};

export default BookingForm;
