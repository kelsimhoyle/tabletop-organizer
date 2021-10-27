import React, { useState, useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";
import { Auth } from "aws-amplify";

const Login: React.FC<{}> = () => {
  const [val, setVal] = useState({ username: "", password: "" });

  // const { user } = useContext(AuthContext);
  // console.log(user);

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
        })
        .catch((err) => console.error(err));
    }
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
