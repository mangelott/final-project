import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Container, Form, Button } from "react-bootstrap/";

import * as AuthServ from "./../../services/auth-view-service";

export default class SingIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.onSignInChange = this.onSignInChange.bind(this);
    this.onSignInSubmit = this.onSignInSubmit.bind(this);
  }

  onSignInChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    console.log(this.props);
  }

  onSignInSubmit(event) {
    event.preventDefaul();
    console.dir(this.props);
    const { email, password } = this.state;
    AuthServ.signInViewServ({
      email,
      password
    })
      .then(user => {
        this.props.history.push("/home");
        console.log("push", this.props.history.push());
      })
      .catch(error => {
        console.log("uv got an error trying to login", error);
      });
  }

  render() {
    return (
      <div>
        <Container>
          <Form onSubmit={this.onSignInSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={this.state.email}
                onChange={this.onSignInChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onSignInChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Log in
            </Button>
            <Form.Text className="text-muted">
              Don't you have an user account yet? Click{" "}
              <Link to="/signup">here</Link> to Sign up
            </Form.Text>
          </Form>
        </Container>
      </div>
    );
  }
}
