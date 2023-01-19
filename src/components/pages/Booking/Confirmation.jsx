import { useState } from "react";
import Button from "../../Button";
import Section from "../../Section";
import PageTitle from "../../SectionPageTitle";
import SuccessPopup from "./SuccessPopup";
import ccv from "../../../images/ccv.png";

const Confirmation = ({ updateStep, handleChange, data }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const confirm = (e) => {
    e.preventDefault();
    setIsConfirmed(true);
  };
  const previous = (e) => {
    e.preventDefault();
    updateStep("prev");
  };
  console.log(Object.values(data));
  return (
    <>
      <div className={`popup ${!isConfirmed ? "hidden" : ""}`}>
        <SuccessPopup />
      </div>
      <PageTitle title="Booking confirmation" />
      <Section>
        <div className="row gap-2 wrap">
          <div className="col">
            <p className="lead">
              Please enter your payment details in order to confirm your
              booking. No fees will be charged.
            </p>
            <div className="form-group">
              <label className="text-strong">Card number</label>
              <input
                type="number"
                name="cardNumber"
                value={data["cardNumber"].value}
                onChange={handleChange("cardNumber")}
              />
            </div>
            <div className="form-group">
              <label className="text-strong">First name & Last name</label>
              <input
                type="text"
                name="cardName"
                value={data["cardName"].value}
                onChange={handleChange("cardName")}
              />
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label className="text-strong">Expiration date</label>
                  <input
                    type="date"
                    name="expDate"
                    value={data["expDate"].value}
                    onChange={handleChange("expDate")}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label className="text-strong">CCV</label>
                  <input
                    type="number"
                    name="ccv"
                    value={data["ccv"].value}
                    onChange={handleChange("ccv")}
                  />
                </div>
              </div>
              <div className="ccv">
                <img src={ccv} alt="CCV help" />
              </div>
            </div>
            <div className="row">
              <Button classes="btn-secondary" onClick={previous}>
                Back
              </Button>
              <Button onClick={confirm}>Confirm</Button>
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
              <h3>Client informations</h3>
              {Object.values(data)
                .filter((input) => input.step === 2 && input.value)
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

export default Confirmation;
