import React, { Component } from "react";
import * as AuthServ from "./../../services/auth-view-service";

import { Container, Form } from "react-bootstrap/";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
    console.log("this.state", this.props);
    this.loadUser = this.loadUser.bind(this);
  }

  loadUser() {
    AuthServ.loadUserServ(this.props.match.params.id)
      .then(user => {
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

  render() {
    // const user = this.state.user;
    return (
      <div>
        {JSON.stringify(this.state)}
        <Container>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Upload Picture</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Form>
          <h1>{}</h1>
        </Container>
      </div>
    );
  }
}
