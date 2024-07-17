import React, { useState } from "react";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true); 
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = (event) => {
    event.preventDefault();

    // Validate passwords
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return; 
    } else {
      setPasswordsMatch(true);
      console.log("Signing up...");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Handle password change and reset error state if passwords match
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value === confirmPassword) {
      setPasswordsMatch(true);
    }
  };

  // Handle confirm password change and reset error state if passwords match
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value === password) {
      setPasswordsMatch(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <div className="input">
          <label className="emailLabel visually-hidden" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="inputField"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="passwordWrapper">
            <label className="passwordLabel visually-hidden" htmlFor="password">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="inputField"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-eye-410-367828.png?f=webp&w=256"
              alt="Show password"
              className="passwordIcon"
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className="confirmPasswordWrapper">
            <label className="confirmPasswordLabel visually-hidden" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              className="inputField"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-eye-410-367828.png?f=webp&w=256"
              alt="Show password"
              className="confirmPasswordIcon"
              onClick={toggleConfirmPasswordVisibility}
            />
          </div>
          {!passwordsMatch && (
            <p className="passwordMismatchError">Passwords do not match.</p>
          )}
          <div className="formFooter">
            <div className="formOptions">
              <div className="rememberMeWrapper">
                <input type="checkbox" id="rememberMe" />
                <label className="rememberMeLabel" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <a href="/" className="forgotPassword">
                Forgot password?
              </a>
            </div>
            <button type="submit" className="signUpButton">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
