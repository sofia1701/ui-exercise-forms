import React, { useState } from "react";
import "./app.css";

function App() {
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

        <span className="instructions-btn">
          Are you having trouble receiving your password reset?
        </span>
      </div>
    </div>
  );
}

export default App;
