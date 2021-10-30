import React from "react";
import { SignUpVals } from "../SignUp";

import { Form, MainButton } from "../../styles";

const AuthCodeConfirm: React.FC<{
  submitAuth: (e: React.FormEvent<HTMLFormElement>) => void;
  vals: SignUpVals;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ handleChange, submitAuth, vals }) => {
  return (
    <Form onSubmit={submitAuth}>
      <label>
        Auth Code
        <input
          value={vals.authCode}
          type="text"
          name="authCode"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <MainButton type="submit" color="main">Submit Auth Code</MainButton>
    </Form>
  );
};

export default AuthCodeConfirm;
