import React, { useState } from "react";
import axios from "axios";
import "./app.css";

function App() {
  const [instructionsDisplay, setInstructionsDisplay] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [displayResult, setDisplayResult] = useState(false);
  const [resetMessage, setResetMessage] = useState("");
  const [additionalMessage, setAdditionalMessage] = useState(false);

  const handleReset = () => {
    axios
      .post("http://localhost:3005/customer/account/resetPassword", {
        email,
      })
      .then(() => {
        setDisplayResult(true);
        setResetMessage("Success, we have emailed your password reset link.");
        setAdditionalMessage(true);
      })
      .catch((err) => {
        setError(err);
        setDisplayResult(true);
        setResetMessage(
          "Sorry, there is no account attached to that email address"
        );
      });
  };

  const handleInstructions = () => {
    setInstructionsDisplay(!instructionsDisplay);
  };

  return (
    <div className="App">
      <h1 className="title">Forgot your Password?</h1>
      <h5 className="subtitle">
        Please enter your email address below to receive a password reset link.
      </h5>
      <div className="reset-form">
        {displayResult && <span className="reset-message">{resetMessage}</span>}
        {additionalMessage && (
          <p className="reset-detailed-message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
        )}
        <div>
          <p className="email-label">Email Address</p>
          <input
            className="email"
            type="email"
            placeholder="Your email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          {(error && !email) && (
            <p className="invalid-email">Please enter a valid email.</p>
          )}
          <div className="buttons">
            <button className="reset-btn" onClick={handleReset}>
              Reset Password
            </button>
            <a href="#!">Go back</a>
          </div>
        </div>

        <span className="instructions-btn" onClick={handleInstructions}>
          Are you having trouble receiving your password reset?
        </span>

        <div
          className={
            instructionsDisplay ? "instructions-visible" : "instructions-hidden"
          }
        >
          <p className="paragraphs">
            We have had some customers who mistakenly believe they have store
            account when in fact they are only signed up to receive our VIP Club
            newsletter.
          </p>
          <p className="paragraphs">
            If you receive our newsletter but have never made a purchase online
            this might apply to you, the best way to check this is to do the
            following:
          </p>
          <p className="bullet-point">
            1. Go back to the <a href="#!">register page</a>.
          </p>
          <p className="bullet-point">
            2. Register with your email address.
            <br />
            <span className="extra-info">
              If you do have already an account the form will tell you
            </span>
          </p>
          <p className="paragraphs">
            If the form tells you you already have an account and the password
            reset doesn't work please contact the Customer Service Team on 033
            900 0094.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
