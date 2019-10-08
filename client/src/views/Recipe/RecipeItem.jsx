import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class RecipeItem extends Component {
  render() {
    const { title, id, handleDelete } = this.props;
    return (
      <div>
        <li className="li list-group-item text-capitalize d-flex justify-content-between my-2">
          <Link to={`/recipe/${id}`}>
            <span>
              <h6>{title}</h6>
            </span>
          </Link>
          <div className="todo-icon">
            <Link to={`/recipe/${id}/edit`}>
              <span className="mx-2 text-success">
                <i className="fas fa-pen"></i>
              </span>
            </Link>
            <span className="mx-2 text-danger" onClick={handleDelete}>
              <i className="fas fa-trash"></i>
            </span>
          </div>
        </li>
      </div>
    );
  }
}
