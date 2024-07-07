import React from "react";
import styled from "styled-components";
import "./SignUpForm.css";

const SignUpForm = () => {
  return (
    <FormWrapper>
      <FormHeading>
        Join us today and start <br /> exploring!
      </FormHeading>
      <form>
        <FormGroup>
          <Label htmlFor="email">Email address</Label>
          <Input type="email" id="email" placeholder="Please enter you mail id" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <PasswordInput>
            <Input type="password" id="password" />
            <PasswordToggle src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1a8e7eaef8fb53e14b0d8556ef59915c7a4f49b86b6624ba4dfd381f0e689b7?apiKey=8e4e6299ad324b319eddb1cf70c73764&" alt="Toggle password visibility" />
          </PasswordInput>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <PasswordInput>
            <Input type="password" id="confirmPassword" />
            <PasswordToggle src="https://cdn.builder.io/api/v1/image/assets/TEMP/42be85ad2bd7d4fd8f4bdffe5422e99edb2e5e03899e9758fd3a022c7ccd327e?apiKey=8e4e6299ad324b319eddb1cf70c73764&" alt="Toggle password visibility" />
          </PasswordInput>
        </FormGroup>
        <FormOptions>
          <RememberMe>
            <Checkbox type="checkbox" id="rememberMe" />
            <CheckboxLabel htmlFor="rememberMe">Remember me</CheckboxLabel>
          </RememberMe>
          <ForgotPassword>Forgot password ?</ForgotPassword>
        </FormOptions>
        <SignUpButton type="submit">Sign Up</SignUpButton>
        <LoginPrompt>
          Already have an account? <LoginLink>Login</LoginLink>
        </LoginPrompt>
      </form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  z-index: 10;
  display: flex;
  margin-left: 40px;
  width: 671px;
  max-width: 100%;
  flex-direction: column;

  @media (max-width: 640px) {
    display: none;
  }
`;

const FormHeading = styled.h2`
  margin: 40px 30px 44px 0;
  font: 45px Inter, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 10px;
    font-size: 40px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const Label = styled.label`
  display: block;
  font: 24px Inter, sans-serif;
  margin-bottom: 8px;
`;

const Input = styled.input`
  mix-blend-mode: color-dodge;
  box-shadow: 0 4px 4.9px 0 rgba(185, 185, 185, 0.25);
  background-color: #504848;
  width: 100%;
  padding: 33px 40px;
  font: 36px Inter, sans-serif;
  border: none;
  color: #fff;

  @media (max-width: 991px) {
    padding: 20px;
  }
`;

const PasswordInput = styled.div`
  position: relative;
`;

const PasswordToggle = styled.img`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 43px;
  cursor: pointer;
`;

const FormOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 34px;
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const CheckboxLabel = styled.label`
  font: 16px Inter, sans-serif;
`;

const ForgotPassword = styled.a`
  font: 16px Inter, sans-serif;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;

const SignUpButton = styled.button`
  text-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 29px;
  background-color: #eceaea;
  color: #525050;
  padding: 13px 56px;
  font: 600 48px Inter, sans-serif;
  border: none;
  cursor: pointer;
  width: 100%;

  @media (max-width: 991px) {
    font-size: 40px;
    padding: 10px 20px;
  }
`;

const LoginPrompt = styled.p`
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 59px;
  font: 32px Inter, sans-serif;
  text-align: center;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const LoginLink = styled.span`
  font-weight: 700;
  cursor: pointer;
`;

export default SignUpForm;
