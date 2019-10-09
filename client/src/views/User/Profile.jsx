import React, { Component } from "react";
import * as AuthServ from "./../../services/auth-view-service";

import { Link } from "react-router-dom";

import { Container, Button, Card, Figure } from "react-bootstrap/";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
    this.loadUser = this.loadUser.bind(this);
  }

  loadUser() {
    AuthServ.loadUserServ()
      .then(user => {
        console.log("profile user>>>>>>>>", user);
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
    const user = this.state.user;
    return (
      <div>
        <Link className="btn btn-primary" to={`/user/${user._id}/edit`}>
          Edit
        </Link>
        <Container>
          <Card className="border-0" style={{ width: "300px" }}>
            <Figure>
              <Figure.Image variant="top" src={user.image} roundedCircle />
            </Figure>
          </Card>

          <h1>{user.username}'s Profile</h1>
          <span className="text-muted">{user.email}</span>
          <p>{user.about}</p>
        </Container>
      </div>
    );
  }
}
