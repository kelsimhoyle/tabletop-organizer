import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Redirect } from "react-router";

import SignUpForm from "../SignUpForm";
import AuthCodeConfirm from "../AuthCodeConfirm";
import { stringValueLength1to1024 } from "aws-sdk/clients/finspacedata";

import { Form, FormDiv, MainButton } from "../../styles";

export interface SignUpVals {
  username: string;
  password: string;
  email: string;
  phone_number: stringValueLength1to1024;
  authCode: string;
}

const SignUp: React.FC<{ handleToggle: () => void }> = ({ handleToggle }) => {
  const [vals, setVals] = useState<SignUpVals>({
    username: "",
    password: "",
    email: "",
    phone_number: "",
    authCode: "",
  });
  const [stage, setStage] = useState<Number>(0);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setVals({
      ...vals,
      [name]: value,
    });
  };

  const { username, password, email, phone_number, authCode } = vals;

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Auth.signUp({
      username,
      password,
      attributes: { email, phone_number },
    })
      .then((user) => {
        console.log(user);
        setStage(1);
      })
      .catch((err) => console.error(err));
  };

  const submitAuth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Auth.confirmSignUp(username, authCode)
      .then((data) => {
        console.log("signed up");
        Auth.signIn(username, password)
          .then((user) => {
            console.log(user);
            setSuccess(true);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  if (success) return <Redirect to="/users/dashboard" push={true} />;
  return (
    <FormDiv>
      {stage === 0 ? (
        <SignUpForm
          handleSignUp={handleSignUp}
          handleChange={handleChange}
          vals={vals}
        />
      ) : (
        <AuthCodeConfirm
          handleChange={handleChange}
          submitAuth={submitAuth}
          vals={vals}
        />
      )}
      <div>
        <h2>Nice to meet you!</h2>
        <p>Sign up to start exploring board games.</p>
        <p>Already have an account?</p>
        <MainButton onClick={() => handleToggle()}>Sign In</MainButton>
      </div>
    </FormDiv>
  );
};

export default SignUp;
