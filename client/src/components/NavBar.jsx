import React, { Component } from "react";

import { Navbar, Row } from "react-bootstrap/";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark">
          <Navbar.Brand href="#home">
            <Row>
              {/* <img
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "} */}
              {/* <a hrf="/sign-in"></a> */}
              <h2>Happy Cure</h2>
            </Row>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}
