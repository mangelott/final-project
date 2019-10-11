import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

export default class RecipeItem extends Component {
  render() {
    const { title, id, handleDelete, image } = this.props;
    return (
      <Container>
        <Card style={{ width: "20rem" }} className="border-0">
          <Card.Img
            variant="top"
            src={image}
            alt="Image"
            className="border-0"
          />
          <Card.Body className="li list-group-item text-capitalize d-flex justify-content-between my-2 border-0">
            <Link to={`/recipe/${id}`}>
              <h6>{title}</h6>
            </Link>
            {this.props.user.role === "Hospital" && (
              <div className="todo-icon">
                <Link to={`/recipe/${id}/edit`}>
                  <span className="mx-2 purple-icon">
                    <i className="fas fa-pen"></i>
                  </span>
                </Link>
                <span className="mx-2 text-danger" onClick={handleDelete}>
                  <i className="fas fa-trash"></i>
                </span>
              </div>
            )}
          </Card.Body>
        </Card>
        <br></br>
        <br></br>
      </Container>
    );
  }
}
