import React, { Component } from "react";

import { Link } from "react-router-dom";

import Image from "react-bootstrap/Image";

export default class Header extends Component {
  render() {
    return (
      <div className="d-flex justify-content-around ">
        <div className="mt-3">
          <Link to={"/home"}>
            {
              <i className=" mx-2 purple">
                <i className="fas fa-home fa-2x"></i>
              </i>
            }
          </Link>
          <Image
            src="/image/happy.png"
            style={{ width: "100px", height: "50px" }}
          />
        </div>
      </div>
    );
  }
}
