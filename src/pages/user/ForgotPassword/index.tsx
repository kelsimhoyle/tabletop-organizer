import React, { useState, useContext} from "react";
import { Auth } from "aws-amplify";
import { Redirect } from "react-router";

import { AuthContext } from "../../../contexts/AuthContext";

const ForgotPassword: React.FC<{}> = () => {
  const { handleStateChange } = useContext(AuthContext)

  const [state, setState] = useState({
    username: "",
    password: "",
    authorizationCode: "",
    stage: 0,
    errors: [""],
    success: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password, authorizationCode, stage } = state;

    if (stage === 0) {
      Auth.forgotPassword(username)
        .then(() => {
          setState({ ...state, stage: 1 })
          console.log("requesting auth code")
        })
        .catch((err) => {
          console.error(err);
          setState({
            ...state,
            errors: [...state.errors, err],
          });
        });
    } else if (password.length && authorizationCode.length) {
      Auth.forgotPasswordSubmit(username, authorizationCode, password)
        .then(() => {
          // go to login
          console.log("password reset")
          handleStateChange("signedOut", username);
          
          setState({
            ...state,
            success: true
          })
        })
        .catch((err) => {
          console.error(err);
          setState({
            ...state,
            errors: [...state.errors, err],
          });
        });
    }
  };

  if (state.success) {
    return <Redirect to={{pathname: "/users/login", state: {username: state.username}}} push={true}  />
  }

  return (
    <>
      <h1>ForgotPassword</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        {state.stage === 0 ? (
          <label>
            Username
            <input
              value={state.username}
              type="text"
              name="username"
              onChange={(e) => handleChange(e)}
            />
          </label>
        ) : (
          <>
            <label>
              Authorization Code
              <input
                value={state.authorizationCode}
                type="text"
                name="authorizationCode"
                onChange={(e) => handleChange(e)}
              />
            </label>
            <label>
              New Password
              <input
                value={state.password}
                type="password"
                name="password"
                onChange={(e) => handleChange(e)}
              />
            </label>
          </>
        )}

        <button type="submit">Reset Password</button>
      </form>
    </>
  );
};

export default ForgotPassword;
