import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BookingForm from "./components/BookingForm";

describe("BookingForm", () => {
  beforeEach(() => {
    const data = {
      date: "Jan 24",
      time: 17,
      dinners: 1,
      occasion: "/",
      seatingOptions: "Indoor",
      specialRequest: "/",
    };

    const handleChange = jest.fn();
    const dispatchTimes = jest.fn();
    render(
      <BookingForm
        data={data}
        handleChange={handleChange}
        availableTimes={[17, 18]}
        dispatchTimes={dispatchTimes}
      />
    );
  });

  it("renders the 'date' input heading", () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toBeInTheDocument();
  });

  it("renders the 'time' input heading", () => {
    const timeInput = screen.getByLabelText(/choose time/i);
    expect(timeInput).toBeInTheDocument();
  });

  it("returns the correct expected 'initializeTimes' value", () => {
    // TODO
  });

  it("returns the same value for Booking::updateTimes as the one provided in the state", () => {
    // TODO
  });
});
