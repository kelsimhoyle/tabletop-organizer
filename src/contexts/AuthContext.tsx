import React, { useState, useEffect, createContext, useCallback } from "react";
import Amplify, { Auth, Hub } from "aws-amplify";

type authContextType = {
  authState: string;
  user: any;
  username: string;
  handleStateChange: (authState: string, user: any) => void;
};

const authContextDefaultValues: authContextType = {
  authState: "loading",
  user: null,
  username: "",
  handleStateChange: (authState: string, user: any) => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

const AuthContextProvider: React.FC<{
  children: JSX.Element[] | JSX.Element;
  awsconfig: any;
}> = ({ children, awsconfig }) => {
  const [authState, setAuthState] = useState("loading");
  const [user, setUser] = useState<{} | null>(null);
  const [username, setUsername] = useState("");

  const handleStateChange = useCallback((authState: string, user: any) => {
    if (authState === "signedOut" && user) {
      setUsername(user);
    } else {
      setAuthState(authState);
      setUser(user);
    }

  }, []);

  const val: authContextType = {
    authState,
    user,
    username,
    handleStateChange,
  };

  const checkAuthStatus = useCallback(async () => {
    try {
      const creds = await Auth.currentAuthenticatedUser();
      setAuthState("signedIn");
      setUser(creds);
    } catch (e) {
      setAuthState((oldAuthState) =>
        oldAuthState === "loading" ? "signedOut" : oldAuthState
      );
    }
  }, []);

  useEffect(() => {
    Amplify.configure({ ...awsconfig });

    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          handleStateChange("signedIn", data);
          break;
        case "signOut":
          handleStateChange("signedOut", null);
          break;
        default:
          break;
      }
    });

    checkAuthStatus();
  }, []);

  return <AuthContext.Provider value={val}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
