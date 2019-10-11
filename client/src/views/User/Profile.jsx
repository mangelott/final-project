import React, { Component } from "react";
import * as AuthServ from "./../../services/auth-view-service";
import FindRecipes from "./../../components/Recipe/FindRecipes";

import { Link } from "react-router-dom";

import { Container, Card, Button } from "react-bootstrap/";
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
        <div className=" content-text">
          <Container className="pt-5 ">
            <div className="d-flex justify-content-between mb-2">
              <Link className="btn purple" to={`/user/${user._id}/edit`}>
                Edit Profile
              </Link>
              <Button className="btn purple " onClick={this.signOut}>
                Log out
              </Button>
            </div>
            <div className="d-flex flex-column mt-3">
              <div>
                <Card className="border-0 mb-4">
                  <div
                    className="border border-dark rounded-circle profile-image"
                    variant="top"
                    // src={user.image}
                    style={{
                      width: "150px",
                      height: "150px",
                      backgroundImage: `url(${user.image})`,
                      margin: "0 auto"
                    }}
                  ></div>
                </Card>
              </div>
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
            </div>
          </Container>
        </div>
      )
    );
  }
}
