import React from "react";
import { SignUpVals } from "../../pages/user/SignUp";

const  SignUpForm: React.FC<{handleSignUp: (e: React.FormEvent<HTMLFormElement>) => void, vals: SignUpVals, handleChange: (e: React.ChangeEvent<HTMLInputElement>)  => void}> = ({handleChange, handleSignUp, vals}) => {
    return (
        <form onSubmit={handleSignUp}>
          <label>
            Username
            <input
              value={vals.username}
              type="text"
              name="username"
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label>
            Password
            <input
              value={vals.password}
              type="password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label>
            Email
            <input
              value={vals.email}
              type="text"
              name="email"
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label>
            Phone Number
            <input
              value={vals.phone_number}
              type="text"
              name="phone_number"
              onChange={(e) => handleChange(e)}
            />
          </label>
          <button type="submit">
              Sign Up
          </button>
        </form>
    );
};

export default SignUpForm