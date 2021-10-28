import React, { useState } from "react";
import { Auth } from "aws-amplify";

import SignUpForm from "../../../components/SignUpForm";
import AuthCodeConfirm from "../../../components/AuthCodeConfirm";
import { stringValueLength1to1024 } from "aws-sdk/clients/finspacedata";

export interface SignUpVals {
  username: string;
  password: string;
  email: string;
  phone_number: stringValueLength1to1024;
  authCode: string;
}

const SignUp: React.FC<{}> = () => {
  const [vals, setVals] = useState<SignUpVals>({
    username: "",
    password: "",
    email: "",
    phone_number: "",
    authCode: "",
  });
  const [stage, setStage] = useState(0);

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
          .then((user) => console.log(user))
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <h1>SignUp</h1>
      <div>
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
      </div>
    </div>
  );
};

export default SignUp;
