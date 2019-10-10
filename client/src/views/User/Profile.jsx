import React, { Component } from "react";
import * as AuthServ from "./../../services/auth-view-service";
import FindRecipes from "./../../components/Recipe/FindRecipes";

import { Link } from "react-router-dom";

import { Container, Card, Form, Button } from "react-bootstrap/";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut(event) {
    event.preventDefault();
    AuthServ.logOutService()
      .then(() => {
        console.log("SIGN OUT SERVICE FEEDBACK");
        this.props.changeUser(null);
        this.props.history.push("/");
      })
      .catch(error => {
        console.log("errrrrro", error);
      });
  }

  render() {
    const user = this.props.user;
    return (
      user && (
        <div className="mt-4 pb-5">
          <pre>{JSON.stringify(user, null, 2)}</pre>

          <Container className="">
            <Link className="btn btn-primary" to={`/user/${user._id}/edit`}>
              Edit
            </Link>
            <Button className="btn btn-primary" onClick={this.signOut}>
              Log out
            </Button>
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
      )
    );
  }
}
