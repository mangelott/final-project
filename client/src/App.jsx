import React, { Component /* Fragment */ } from "react";

import "./App.css";

import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import SingInView from "./views/User/SignIn";
import HomeView from "./views/User/Home";
import SignUpView from "./views/User/SingUp";
import ErrorView from "./views/Error";
import CatchAllView from "./views/CatchAll";
import RecipeView from "./views/Recipe";
import CreateRecipeView from "./views/Recipe/newRecipe";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={SingInView} />
          <Route path="/homePage" component={HomeView} />
          <Route path="/signup" component={SignUpView} />
          <Route path="/recipe" exact component={RecipeView} />
          <Route path="/recipe/create" exact component={CreateRecipeView} />
          <Route path="/error/:code" component={ErrorView} />
          <Route path="/" component={CatchAllView} />
        </Switch>
      </div>
    );
  }
}
