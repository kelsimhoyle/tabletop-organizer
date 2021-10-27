import React, { useState, useEffect, createContext, useCallback } from "react";
import Amplify, { Auth, Hub } from "aws-amplify";

type authContextType = {
  authState: string;
  user: any;
  login?: (param: string, param2: string) => Promise<void>;
  logout?: () => Promise<void>;
  resetPassword?: (username: string) => Promise<void>;
  confirmResetPassword?: (
    username: string,
    password: string,
    authorizationCode: string
  ) => Promise<void>;
  signUp?: (
    username: string,
    password: string,
    email: string,
    phone_number: string
  ) => Promise<void>;
  confirmSignUp?: (username: string, authCode: string) => Promise<void>;
};

const authContextDefaultValues: authContextType = {
  authState: "loading",
  user: null,
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

const AuthContextProvider: React.FC<{
  children: JSX.Element[] | JSX.Element;
  awsconfig: any;
}> = ({ children, awsconfig }) => {
  const [authState, setAuthState] = useState("loading");
  const [user, setUser] = useState<{} | null>(null);

  const handleStateChange = useCallback((authState: string, user: any) => {
    setAuthState(authState);
    setUser(user);
  }, []);

  const val: authContextType = {
    authState,
    user,
    login: async (username: string, password: string) => {
      setAuthState("loading");
      try {
        await Auth.signIn(username, password);
        console.log("signed in!");
      } catch (err) {
        console.error(err);
      }
    },
    logout: async () => {
      setAuthState("loading");
      try {
        await Auth.signOut();
        console.log("signed out!");
      } catch (err) {
        console.error(err);
      }
    },
    resetPassword: async (username) => {
      setAuthState("loading");
      Auth.forgotPassword(username)
        .then(() => {
          handleStateChange("signedOut", null);
        })
        .catch((err) => {
          console.log("error: ", err);
        });
    },
    confirmResetPassword: async (username, password, authorizationCode) => {
      setAuthState("loading");

      Auth.forgotPasswordSubmit(username, authorizationCode, password)
        .then(() => {
          // setFormType('showSignIn')
          // go to signin
        })
        .catch((err) => console.log("error resetting password:", err));
    },
    signUp: async (username, password, email, phone_number) => {
      setAuthState("loading");

      try {
        await Auth.signUp({
          username,
          password,
          attributes: { email, phone_number },
        });
        console.log("successful sign up..");
        // setStage(1)
      } catch (err) {
        console.log("error signing up...", err);
      }
    },
    confirmSignUp: async (username, authCode) => {
      setAuthState("loading");

      try {
        await Auth.confirmSignUp(username, authCode);
        // setFormType('showSignIn')
      } catch (err) {
        console.log("error signing up...", err);
      }
    },
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
