import React, { Component } from "react";
import * as AuthServ from "./../../services/auth-view-service";

import { Container, Form, Button } from "react-bootstrap/";
export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      image: "",
      about: ""
    };
    this.onFormValueChange = this.onFormValueChange.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.editProfile = this.editProfile.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    AuthServ.loadUserServ(id).then(user => {
      console.log("user>>>>>>>>>>>>>>", user);
      this.setState({
        ...user
      });
    });
  }

  editProfile(event) {
    event.preventDefault();
    const id = this.props.match.params.id;
    const user = this.state;
    AuthServ.editUserServ(id, user)
      .then(user => {
        this.props.history.push("/user");
      })
      .catch(error => {
        console.log("error editing", error);
      });
  }

  onFormValueChange(event) {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      ...this.state,
      //about: event.target.value,
      [name]: value
    });
  }

  handleChangeImage = event => {
    this.setState({
      ...this.state,
      image: event.target.files[0]
    });
  };
  render() {
    const user = this.state;
    return (
      <div>
        <Container>
          <Form onSubmit={this.editProfile}>
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
                // type="text"
                value={user.about}
                onChange={this.onFormValueChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="purple">
              Edit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
