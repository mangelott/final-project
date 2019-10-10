import React, { Component } from "react";
import * as AuthServ from "./../../services/auth-view-service";
import FindRecipes from "./../../components/Recipe/FindRecipes";

import { Link } from "react-router-dom";

import { Container, Card } from "react-bootstrap/";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
    this.signOut = this.signOut.bind(this);
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

  signOut(event) {
    event.preventDefault();
    AuthServ.logOutService()
      .then(() => {
        this.props.history.push("/home");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const user = this.state.user;
    return (
      <div className="mt-4 pb-5">
        <Container className="">
          <Link className="btn btn-primary" to={`/user/${user._id}/edit`}>
            Edit
          </Link>
          <Link className="btn btn-primary" to={"/"} onSubmit={this.signOut}>
            Log out
          </Link>
          <Card
            className="border-0 mb-4"
            style={{ width: "150px", height: "150px" }}
          >
            <Card
              className="border border-dark rounded-circle profile-image"
              variant="top"
              // src={user.image}
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${user.image})`
              }}
            />
          </Card>
          <div>
            <p>
              <strong>{user.username}</strong>
            </p>
            <span className="text-muted">{user.email}</span>
          </div>
          <div>
            <p>{user.about}</p>
          </div>
          <FindRecipes />
        </Container>
      </div>
    );
  }
}
