import React, { Component } from "react";
import * as AuthServ from "./../../services/auth-view-service";

import { Container, Form, Col } from "react-bootstrap/";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: ""
    };
  }

  componentDidMount() {
    AuthServ.loggedInViewServ()
      .then((username, email) => {
        this.setState({
          username,
          email
        });
      })
      .catch(error => {
        console.log("error trying to load the profile", error);
      });
  }
  render() {
    return (
      <div>
        <Container>
          <Form>
            <Col src={this.state.user.image} roundedCircle></Col>
          </Form>
        </Container>
      </div>
    );
  }
}
