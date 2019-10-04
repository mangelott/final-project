import React, { Component /* Fragment */ } from "react";

import "./App.css";

import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

//-------------------------- USER VIEWS
import SingInView from "./views/User/SignIn";
import HomeView from "./views/User/Home";
import SignUpView from "./views/User/SingUp";

//--------------------------RECIPE VIEWS
import CreateRecipeView from "./views/Recipe/newRecipe";

//----------------------------BLOG VIEWS
import BlogView from "./views/Blog/Posts";
import CreatePostView from "./views/Blog/CreatePost";

//----------------------------DEFAULT VIEWS
import ErrorView from "./views/Error";
import CatchAllView from "./views/CatchAll";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div>
          <Switch>
            <Route path="/" exact component={SingInView} />
            <Route path="/homePage" component={HomeView} />
            <Route path="/signup" component={SignUpView} />
            <Route path="/recipe/create" component={CreateRecipeView} />
            <Route path="/blog" exact component={BlogView} />
            <Route path="/blog/create" component={CreatePostView} />
            <Route path="/error/:code" component={ErrorView} />
            <Route path="/" component={CatchAllView} />
          </Switch>
        </div>
      </div>
    );
  }
}
