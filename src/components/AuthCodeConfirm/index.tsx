import React from "react";
import { SignUpVals } from "../../pages/user/SignUp";

const AuthCodeConfirm: React.FC<{
  submitAuth: (e: React.FormEvent<HTMLFormElement>) => void;
  vals: SignUpVals;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ handleChange, submitAuth, vals }) => {
  return (
    <form onSubmit={submitAuth}>
      <label>
        Auth Code
        <input
          value={vals.authCode}
          type="text"
          name="authCode"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <button type="submit">Submit Auth Code</button>
    </form>
  );
};

export default AuthCodeConfirm;
