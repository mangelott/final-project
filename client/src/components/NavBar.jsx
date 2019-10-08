import React, { Component } from "react";
import * as AuthServ from "./../services/auth-view-service";

import { Link } from "react-router-dom";

import { Navbar, Row } from "react-bootstrap/";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
    this.signOut = this.signOut.bind(this);
    this.loadUser = this.loadUser.bind(this);
  }

  loadUser() {
    AuthServ.loadUserServ()
      .then(user => {
        console.log("props", this.props);
        this.setState({
          user
        });
      })
      .catch(error => {
        console.log("loading user error:", error);
      });
  }

  componentDidMount() {
    this.loadUser();
  }

  signOut(event) {
    event.preventDefault();
    AuthServ.logOutService()
      .then(() => {
        this.props.history.push("/home");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Navbar bg="dark">
          <Navbar.Brand>
            <Row>
              <h2>Happy Cure</h2>
              <Link
                className="btn btn-primary"
                to={"/"}
                onSubmit={this.signOut}
              >
                Log Out
              </Link>
              <Link className="btn btn-primary" to={"/blog"}>
                Blog
              </Link>
              <Link className="btn btn-primary" to={"/recipe"}>
                Recipes
              </Link>
              <Link className="btn btn-primary" to={"/user"}>
                Profile
              </Link>
            </Row>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}
