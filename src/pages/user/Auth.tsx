import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Login from "../../components/Login";
import { AuthContext } from "../../contexts/AuthContext";

const LoginDiv = () => (
  <div>
    <Login />
    <p>Don't have an account?</p>
    <Link to="/users/signup">Sign Up</Link>
  </div>
);

const Auth: React.FC<{}> = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Auth</h1>
      {user ? "Go home" : <LoginDiv />}
    </div>
  );
};

export default Auth;
