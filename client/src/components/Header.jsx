import React, { Component } from "react";

import { Link } from "react-router-dom";

import Image from "react-bootstrap/Image";

export default class Header extends Component {
  render() {
    return (
      <div className="d-flex space-between ml-4">
        <div className="mt-4">
          <Link to={"/home"}>
            {
              <i className=" mx-2 purple mr-2 pr-3">
                <i className="fas fa-home fa-2x"></i>
              </i>
            }
          </Link>
          <Image
            src="/image/happy.png"
            style={{ width: "100px", height: "50px" }}
            className="ml-5"
          />
        </div>
      </div>
    );
  }
}
