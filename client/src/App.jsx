import React, { Component /* Fragment */ } from "react";

import "./App.css";

import { Switch, Route } from "react-router-dom";

import * as AuthServ from "./services/auth-view-service";

import Header from "./components/Header";
import Footer from "./components/Footer";

import ProtectedRoute from "./components/ProtectedRoute";

import HomeView from "./views/Home/HomeView";

//-------------------------- USER VIEWS
import SingInView from "./views/User/SignIn";
import SignUpView from "./views/User/SingUp";
import ProfileView from "./views/User/Profile";
import EditProfileView from "./views/User/EditProfile";

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

//-----------------------------VIDEOS VIEWS

import VideosView from "./views/VideosView/Home";

//----------------------------DEFAULT VIEWS
import ErrorView from "./views/Error";
import CatchAllView from "./views/CatchAll";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loaded: false
    };
    this.loadUser = this.loadUser.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.verifyUserLoggedIn = this.verifyUserLoggedIn.bind(this);
    this.verifyUserNotLoggedIn = this.verifyUserNotLoggedIn.bind(this);
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser() {
    AuthServ.loadUserServ()
      .then(user => {
        if (user) {
          this.setState({
            user
          });
        }
        this.setState({
          loaded: true
        });
      })
      .catch(error => {
        this.setState({
          loaded: true
        });
        console.log("loading user error:", error);
      });
  }

  verifyUserLoggedIn() {
    return !!this.state.user;
  }

  verifyUserNotLoggedIn() {
    return !this.state.user;
  }

  changeUser(user) {
    this.setState({
      user
    });
  }

  render() {
    return (
      <div className="App ">
        <div className="header-style mb-1 pb-3">
          <Header />
        </div>
        <div className="content-border content-style mt-5 pt-5">
          {this.state.loaded && (
            <Switch>
              <ProtectedRoute
                path="/"
                exact
                verify={this.verifyUserNotLoggedIn}
                redirectPath="/home"
                render={props => (
                  <SingInView changeUser={this.changeUser} {...props} />
                )}
              />
              <Route path="/signup" component={SignUpView} />
              <ProtectedRoute
                path="/home"
                verify={this.verifyUserLoggedIn}
                redirectPath="/"
                component={HomeView}
              />
              <Route
                path="/user"
                exact
                render={props => (
                  <ProfileView
                    user={this.state.user}
                    changeUser={this.changeUser}
                    {...props}
                  />
                )}
              />
              <Route path="/user/:id/edit" component={EditProfileView} />
              <Route path="/recipe" exact component={HomeRecipeView} />
              <Route path="/recipe/create" exact component={CreateRecipeView} />
              <Route path="/recipe/:id" exact component={ViewRecipe} />
              <Route path="/recipe/:id/edit" component={EditRecipeView} />
              <Route path="/blog" exact component={BlogView} />
              <Route path="/blog/create" component={CreatePostView} />
              <Route path="/blog/:id" exact component={PostView} />
              <Route path="/blog/:id/edit" component={EditPostView} />
              <Route path="/videos" component={VideosView} />
              <Route path="/error/:code" component={ErrorView} />
              <Route path="/" component={CatchAllView} />
            </Switch>
          )}
        </div>
        <div className="footer-style">
          <Footer />
        </div>
      </div>
    );
  }
}
