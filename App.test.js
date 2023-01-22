import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BookingForm from "./BookingForm";

describe("date & time inputs", () => {
  beforeEach(() => {
    const data = {
      date: "Jan 24",
      time: 17,
      dinners: 1,
      occasion: "/",
      seatingOptions: "Indoor",
      specialRequest: "/",
    };
    render(
      <BookingForm
        data={data}
        handleChange={jest.fn()}
        availableTimes={[]}
        dispatchTimes={[17, 18]}
      />
    );
  });
  it("returns the correct expected 'initializeTimes' value", () => {
    const dateLabel = screen.getByText("Choose date");
    expect(dateLabel).toBeInTheDocument();
  });

  it("returns the correct expected 'initializeTimes' value", () => {
    const availableTimes = screen.getByTestId("time");
  });

  it("returns the same value for Booking::updateTimes as the one provided in the state", () => {});
});
