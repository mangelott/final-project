import React, { Component } from "react";

import * as AuthServ from "./../services/auth-view-service";

import { Navbar, Row, Form, Button } from "react-bootstrap/";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
    this.profilePage = this.profilePage.bind(this);
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

  profilePage(event) {
    event.preventDefault();
    AuthServ.loadUserServ(this.props.match.user.id)
      .then(user => {
        this.props.history.push(`/user/${user._id}`);
      })
      .catch(error => {
        console.log("loading user error:", error);
      });
  }

  render() {
    return (
      <div>
        <Navbar bg="dark">
          <Navbar.Brand>
            <Row>
              <h2>Happy Cure</h2>
              <Form onSubmit={this.signOut}>
                <Button type="submit" href="/">
                  Log Out
                </Button>
              </Form>
              <Form>
                <Button type="submit" href="/blog">
                  Blog
                </Button>
              </Form>
              <Form>
                <Button type="submit" href="/recipe">
                  Recipes
                </Button>
              </Form>
              <Form onSubmit={this.profilePage}>
                <Button type="submit">Profile Page</Button>
              </Form>
            </Row>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}
