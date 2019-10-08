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
    console.log("this.state", this.props);
    this.loadUser = this.loadUser.bind(this);
  }

  loadUser() {
    AuthServ.loadUserServ()
      .then(user => {
        console.log("props", this.props);
        this.setState({
          user
        });
      })
      .catch(error => {
        console.log("loading user error:", error);
      });
  }

  // deleteUser() {
  //   const id = this.props.match.params.id;
  // }

  componentDidMount() {
    this.loadUser();
  }

  render() {
    const user = this.state.user;
    return (
      <div>
        <Link to={`/user/${user._id}/edit`}>
          <Button>Edit</Button>
        </Link>
        <Container>
          <Card className="border-0" style={{ width: "300px" }}>
            <Figure>
              <Figure.Image variant="top" src={user.image} roundedCircle />
            </Figure>
          </Card>

          <h1>{user.username}'s Profile</h1>
          <span className="text-muted">{user.email}</span>
        </Container>
      </div>
    );
  }
}
