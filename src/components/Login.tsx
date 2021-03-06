import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

import { Form, FormDiv, MainButton } from "../styles";

const Login: React.FC<{handleToggle: () => void}> = ({handleToggle}) => {
  const [val, setVal] = useState({ username: "", password: "" });
  const [success, setSuccess] = useState<boolean>(false);

  const { username, authState } = useContext(AuthContext);

  useEffect(() => {
    if (username) setVal({ ...val, username: username });

  }, [username])
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setVal({
      ...val,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = val;

    if (username.length && password.length) {
      Auth.signIn(username, password)
        .then((user) => {
          console.log("signed in");
          setVal({ username: "", password: "" });
          setSuccess(true);
        })
        .catch((err) => console.error(err));
    }
  };

  if (success) return <Redirect to="/users/dashboard" push={true} />
  return (
    <FormDiv>
      <div className="form">
        <h2>Login</h2>
        {authState === "signedIn" && (
          <>
          <p>It looks like you're already logged in.</p>
          <Link to="/users/dashboard"> Go to your dashboard.</Link>
          </>
        )}
      <Form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Username
          <input
            value={val.username}
            type="text"
            name="username"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Password
          <input
            value={val.password}
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <MainButton type="submit" color="main">Login</MainButton>
      </Form>
      <Link to="/users/forgotpassword">
            Reset your password
          </Link>
      </div>
      <div className="about">
        <h2>Welome back!</h2>
        <p>Sign in to start exploring board games.</p>
        <p>Don't have an account?</p>
          <MainButton onClick={() => handleToggle()} >
          Sign Up
        </MainButton>
      </div>
    </FormDiv>
  );
};

export default Login;
