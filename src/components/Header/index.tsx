import React, { useContext } from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

import { Head } from "./styles";

const Header: React.FC<{}> = () => {
  const { user, authState } = useContext(AuthContext);

  console.log(user, authState);

  const handleSignOut = () => {
    Auth.signOut()
      .then(() => {
        console.log("signed out");
      })
      .catch((err) => console.error(err));
  };

  return (
    <Head>
      <div>
        <p>Tabletop Organizer</p>
      </div>
      <div>
        {user ? (
          <button type="button" onClick={handleSignOut}>
            SignOut{" "}
          </button>
        ) : (
          <Link to="/users/login"> 
          Login
          </Link>
        )}
      </div>
    </Head>
  );
};

export default Header;
