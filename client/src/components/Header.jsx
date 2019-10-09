import React, { Component } from "react";

import { Link } from "react-router-dom";

import Image from "react-bootstrap/Image";

export default class Header extends Component {
  render() {
    return (
      <div className="d-flex justify-content-around ">
        <Link to={"/home"}>
          {
            <Image
              src="/image/logo.png"
              style={{ width: "100px", height: "50px" }}
            />
          }
        </Link>
        <Link className="btn" to={"/"} onSubmit={this.signOut}>
          Log out
        </Link>
      </div>
    );
  }
}
