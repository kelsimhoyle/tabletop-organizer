import React, { useState, useContext, useCallback } from "react";
import { Auth } from "aws-amplify";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";

import { Form, FormDiv, MainButton, ErrorDiv, AuthPage } from "../../../styles";

interface State {
  username: string;
  password: string;
  authorizationCode: string;
  stage: number;
  errors: string[] | [];
  success: boolean;
}

const ForgotPassword: React.FC<{}> = () => {
  const { handleStateChange } = useContext(AuthContext);

  const [state, setState] = useState<State>({
    username: "",
    password: "",
    authorizationCode: "",
    stage: 0,
    errors: [],
    success: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const changeState = useCallback(
    (key: string, value: string) => {
      let newState;
      if (key === "errors") {
        newState = state.errors ? [...state.errors, value] : [value];
        setState({
          ...state,
          errors: [...newState],
        });
      } else {
        setState({
          ...state,
          [key]: value,
        });
      }
    },
    [setState]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password, authorizationCode, stage } = state;

    if (stage === 0) {
      if (username.length < 3) {
        return changeState(
          "errors",
          "Must provide a username in order to reset password."
        );
      }
      Auth.forgotPassword(username)
        .then(() => {
          setState({ ...state, stage: 1 });
          console.log("requesting auth code");
        })
        .catch((err) => {
          console.log(err);
          changeState("errors", "Username not found");
        });
    } else if (password.length && authorizationCode.length) {
      Auth.forgotPasswordSubmit(username, authorizationCode, password)
        .then(() => {
          // go to login
          console.log("password reset");
          handleStateChange("signedOut", username);

          setState({
            ...state,
            success: true,
          });
        })
        .catch((err) => {
          console.log(err);
          changeState("errors", "Authorization code does not match.");
        });
    }
  };

  if (state.success) {
    return (
      <Redirect
        to={{ pathname: "/users/login", state: { username: state.username } }}
        push={true}
      />
    );
  }

  return (
    <AuthPage>
      <FormDiv>
        <div className="form">
          <Form onSubmit={(e) => handleSubmit(e)}>
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
            {state.errors.length > 0 ? (
              <ErrorDiv>
                {state.errors.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </ErrorDiv>
            ) : null}
            <MainButton color="main" type="submit">
              Reset Password
            </MainButton>
          </Form>
        </div>
        <div className="about">
          <h2>Forgot your password?</h2>
          <p>
            No worries! We will get your password reset ASAP and get you on your
            way!
          </p>
          <div className="flex-row">
            <div>
              <p>Ready to login?</p>
              <Link to="/users/auth/login">
                <MainButton>Login</MainButton>
              </Link>
            </div>
            <div>
              <p>Don't have an account?</p>
              <Link to="/users/auth/signup">
                <MainButton>Sign Up</MainButton>
              </Link>
            </div>
          </div>
        </div>
      </FormDiv>
    </AuthPage>
  );
};

export default ForgotPassword;
