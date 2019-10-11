import React, { Component } from "react";
import * as AuthServ from "./../../services/auth-view-service";

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
    this.onValueChange = this.onValueChange.bind(this);
    this.onSignUpSubmit = this.onSignUpSubmit.bind(this);
  }

  onValueChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  onSignUpSubmit(event) {
    event.preventDefault();
    const { username, email, password } = this.state;
    AuthServ.signUpViewServ({
      username,
      email,
      password
    })
      .then(user => {
        this.props.changeUser(user);
        this.props.history.push("/home");
      })
      .catch(error => {
        console.log("there was an error on signup>>>", error);
      });
  }

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
                required
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
                required
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
                required
                data-container="body"
                data-toggle="popover"
                data-placement="top"
                data-content="Tip: Your password must have at least 8 characters with letters and numbers"
              />
            </Form.Group>
            {this.state.password.length >= 8 && (
              <Button type="submit" className="purple">
                Sign Up
              </Button>
            )}
            {this.state.password.length < 8 && (
              <div>
                <Button disabled type="submit" className="purple">
                  Sign Up
                </Button>
                <p className="text-feedback">
                  Your password must have at least 8 characters between letters
                  and numbers. Example: "yourpassword12345"
                </p>
              </div>
            )}

            <Form.Text className="text-muted">
              If you already has an account go to <Link to="/">Sign In</Link>
            </Form.Text>
          </Form>
        </Container>
      </div>
    );
  }
}
