import React, { useState } from "react";
import "./app.css";

function App() {
  const [instructionsDisplay, setInstructionsDisplay] = useState(false);

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
        <div>
          <p className="email-label">Email Address</p>
          <input
            className="email"
            type="email"
            placeholder="Your email address"
          />

          <div className="buttons">
            <button className="reset-btn">Reset Password</button>
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
