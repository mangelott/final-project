import React, { Component /* Fragment */ } from "react";

import "./App.css";

import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

//-------------------------- USER VIEWS
import SingInView from "./views/User/SignIn";
import HomeView from "./views/User/Home";
import SignUpView from "./views/User/SingUp";
import ProfileView from "./views/User/Profile";

//--------------------------RECIPE VIEWS
import HomeRecipeView from "./views/Recipe/Home";
import ViewRecipe from "./views/Recipe/Load";
import CreateRecipeView from "./views/Recipe/NewRecipe";
import EditRecipeView from "./views/Recipe/EditRecipe";

//----------------------------BLOG VIEWS
import BlogView from "./views/Blog/ListOfPosts";
import PostView from "./views/Blog/Post";
import CreatePostView from "./views/Blog/CreatePost";
import EditPostView from "./views/Blog/EditPost";

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
            <Route path="/home" component={HomeView} />
            <Route path="/signup" component={SignUpView} />
            <Route path="/user/:id" component={ProfileView} />
            <Route path="/recipe" exact component={HomeRecipeView} />
            <Route path="/recipe/create" exact component={CreateRecipeView} />
            <Route path="/recipe/:id" exact component={ViewRecipe} />
            <Route path="/recipe/:id/edit" component={EditRecipeView} />
            <Route path="/blog" exact component={BlogView} />
            <Route path="/blog/create" component={CreatePostView} />
            <Route path="/blog/:id" exact component={PostView} />
            <Route path="/blog/:id/edit" component={EditPostView} />
            <Route path="/error/:code" component={ErrorView} />
            <Route path="/" component={CatchAllView} />
          </Switch>
        </div>
      </div>
    );
  }
}
