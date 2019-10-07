import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <div className="d-flex flex-column align-items-center m-3">
        <Card>
          <Card.Body>
            <Link to="/recipe/create">
              <Card.Title>New Recipe</Card.Title>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
