import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Login from "../../components/Login";
import { AuthContext } from "../../contexts/AuthContext";

const Auth: React.FC<{ props: any }> = ({ props }) => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Auth</h1>
      {user ? (
        "Go home"
      ) : (
        <div>
          <Login />
          <p>Don't have an account?</p>
          <Link to="/users/signup">
            Sign Up
          </Link>
          <p>Forgot your password?</p>
          <Link to="/users/forgotpassword">
            Reset your password
          </Link>
        </div>
      )}
    </div>
  );
};

export default Auth;
