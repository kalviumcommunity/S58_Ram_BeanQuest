import React from "react";
import SignUpForm from "./SignUpForm";
import LoginPrompt from "./LoginPrompt";
import "./BeanQuest.css";

function BeanQuest() {
  return (
    <div className="container">
      <div className="imageColumn">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dab75df110a7565f62f442e3368def9857b6ea43ef89c861f3bb96e4a59c035?apiKey=8e4e6299ad324b319eddb1cf70c73764&"
          alt="Coffee beans"
          className="heroImage"
        />
      </div>
      <div className="formColumn">
        <h1 className="title">Bean Quest</h1>
        <h2 className="subtitle">
          Join us today and start <br /> exploring!
        </h2>
        <SignUpForm />
        <LoginPrompt />
      </div>
    </div>
  );
}

export default BeanQuest;
