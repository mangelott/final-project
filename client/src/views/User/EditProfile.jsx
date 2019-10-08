import React, { Component } from "react";
import * as AuthServ from "./../../services/auth-view-service";

import { Container, Form, Button } from "react-bootstrap/";
export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        email: "",
        password: "",
        image: "",
        about: ""
      }
    };
    this.onFormValueChange = this.onFormValueChange.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
  }

  componentDidMount() {
    const id = this.state.user._id;
    AuthServ.loadUserServ(id).then(user => {
      this.setState({
        user: {
          ...user
        }
      });
    });
  }

  editProfile(event) {
    event.preventDefault();
    const id = this.state.user._id;
    const user = this.state.user;
    AuthServ.editUserServ(id, user)
      .then(user => {
        this.props.history.push("/user");
        console.log("userrrrr", user);
      })
      .catch(error => {
        console.log("error editing", error);
      });
  }

  onFormValueChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    });
    console.log("this is it", this.state.user.username);
  }

  handleChangeImage = event => {
    this.setState({
      user: {
        ...this.state.user,
        image: event.target.files[0]
      }
    });
  };
  render() {
    const user = this.state.user;
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
                value={user.email}
                onChange={this.onFormValueChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="username"
                placeholder="Enter a username"
                value={user.username}
                onChange={this.onFormValueChange}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="image" className="file-input">
                Upload a picture
              </label>
              <Form.Control
                id="user-profile"
                type="file"
                name="image"
                onChange={this.handleChangeImage}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>About</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="about"
                type="text"
                value={user.about}
                onChange={this.onFormValueChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Edit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
