import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthContext } from "./contexts/AuthContext";
import Theme from "./styles/Theme";

import Header from "./components/Header";

import Auth from "./pages/user/Auth";
import ForgotPassword from "./pages/user/ForgotPassword";
import Dashboard from "./pages/user/Dashboard";
import Home from "./pages/Home";
import Game from "./pages/Game";

import "./App.css";

const App: React.FC<{}> = () => {
  const context = useContext(AuthContext);
  console.log(context);

  return (
    <Theme>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game/:gameId" component={Game} />
          <Route path="/users/auth/:step" component={Auth} />
          <Route path="/users/forgotpassword" component={ForgotPassword} />
          <Route path="/users/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </Theme>
  );
};

export default App;
