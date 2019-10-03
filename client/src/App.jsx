import React, { Component /* Fragment */ } from "react";

import "./App.css";

import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import SingInView from "./views/SignIn";
import HomeView from "./views/Home";
import LoggedInView from "./views/LoggedIn";
import ErrorView from "./views/Error";
import CatchAllView from "./views/CatchAll";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={SingInView} />
          <Route path="/loggedin" component={LoggedInView} />
          <Route path="/error/:code" component={ErrorView} />
          <Route path="/" component={CatchAllView} />
        </Switch>
      </div>
    );
  }
}
