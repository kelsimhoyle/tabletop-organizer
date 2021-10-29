import React, { useContext, useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";

import Login from "../../components/Login";
import SignUp from "../../components/SignUp";
import SlideAnimation from "../../components/animations/SlideAnimation";
import { AuthContext } from "../../contexts/AuthContext";

interface RouteParams {
  step: string;
}

const Auth: React.FC<{ props: any }> = ({ props }) => {
  const { step } = useParams<RouteParams>()
  const { user } = useContext(AuthContext);
  const [toggle, setToggleView] = useState<boolean>(false);

  useEffect(() => {
    if (step === "signup") setToggleView(true)
  }, [])

  const handleToggle = useCallback(() => {
    setToggleView((prev) => !prev);
  }, [setToggleView]);

  return (
    <div>
      <h1>Auth</h1>
      <SlideAnimation toggle={toggle}>
        <SignUp handleToggle={handleToggle} />
        <Login handleToggle={handleToggle} />
      </SlideAnimation>
    </div>
  );
};

export default Auth;
