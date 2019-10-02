import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Container, Form, Button } from "react-bootstrap/";

export default class SingUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  // onSignUpSubmit(event) {
  //   event.preventDefault();
  //   const {username, email, password} = this.state;

  // }
  render() {
    return (
      <div>
        <Container>
          <Form onSubmit={this.onSignUpSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.onValueChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="username"
                placeholder="Enter a username"
                value={this.state.username}
                onChange={this.onValueChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onValueChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
            <Form.Text className="text-muted">
              If you already has an account go to{" "}
              <Link to="/sign-in">Sign In</Link>
            </Form.Text>
          </Form>
        </Container>
      </div>
    );
  }
}
