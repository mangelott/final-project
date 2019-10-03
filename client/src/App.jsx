import React, { Component /* Fragment */ } from "react";

import "./App.css";

import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import SingInView from "./views/user-views/SignIn";
import HomeView from "./views/user-views/Home";
import SignUpView from "./views/user-views/SingUp";
import ErrorView from "./views/Error";
import CatchAllView from "./views/CatchAll";
import CreateRecipeView from "./views/Recipe/newRecipe";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={SingInView} />
          <Route path="/home" component={HomeView} />
          <Route path="/signup" component={SignUpView} />
          <Route path="/recipe/create" component={CreateRecipeView} />
          <Route path="/error/:code" component={ErrorView} />
          <Route path="/" component={CatchAllView} />
        </Switch>
      </div>
    );
  }
}
