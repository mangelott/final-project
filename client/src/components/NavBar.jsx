import React, { Component } from "react";

import * as AuthServ from "./../services/auth-view-service";

import { Navbar, Row, Form, Button } from "react-bootstrap/";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    // event.preventDefault();
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
              <Form onSubmit={this.signOut}>
                <Button type="submit" href="/">
                  Log Out
                </Button>
              </Form>
            </Row>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}
