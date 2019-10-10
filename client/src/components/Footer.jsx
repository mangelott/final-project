import React, { Component } from "react";
import * as AuthServ from "../services/auth-view-service";

import { Link } from "react-router-dom";

import { Image } from "react-bootstrap/";

export default class NavBar extends Component {
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
    return (
      <div>
        <div className="d-flex justify-content-around mt-1 mb-1">
          <Link className="btn" to={"/blog"}>
            <Image
              style={{ width: "50px", height: "50px" }}
              src="/image/blog-icon.png"
            />
          </Link>
          <Link className="btn" to={"/recipe"}>
            <Image
              style={{ width: "50px", height: "50px" }}
              src="/image/recipe-icon.png"
            />
          </Link>
          <Link className="btn" to={"/videos"}>
            <Image
              style={{ width: "50px", height: "50px" }}
              src="/image/videos-icon.png"
            />
          </Link>
          <Link className="btn" to={"/user"}>
            <Image
              style={{ width: "50px", height: "50px" }}
              src="/image/profile-icon.png"
            />
          </Link>
        </div>
      </div>
    );
  }
}
