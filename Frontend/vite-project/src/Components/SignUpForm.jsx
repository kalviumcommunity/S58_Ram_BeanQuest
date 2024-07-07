import React from "react";

function SignUpForm() {
  return (
    <div>
      <div className="input">
      <label className="emailLabel visually-hidden" htmlFor="email">Email address</label>
      <input
        type="email"
        id="email"
        className="inputField"
        placeholder="Email address"
      />
      <div className="passwordWrapper">
        <label className="passwordLabel visually-hidden" htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="inputField"
          placeholder="Password"
        />
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-eye-410-367828.png?f=webp&w=256" alt="Show password" className="passwordIcon" />
      </div>
      <div className="confirmPasswordWrapper">
        <label className="confirmPasswordLabel visually-hidden" htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          className="inputField"
          placeholder="Confirm Password"
        />
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-eye-410-367828.png?f=webp&w=256" alt="Show password" className="confirmPasswordIcon" />
      </div>
      <div className="formFooter">
        <div className="formOptions">
          <div className="rememberMeWrapper">
            <input type="checkbox" id="rememberMe" />
            <label className="rememberMeLabel" htmlFor="rememberMe">Remember me</label>
          </div>
          <a href="/" className="forgotPassword">Forgot password?</a>
        </div>
        <button className="signUpButton">Sign Up</button>
      </div>
      </div>
    </div>
  );
}

export default SignUpForm;
