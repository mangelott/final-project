import React, { Component } from "react";

import { Dropdown } from "react-bootstrap";
export default class TodoInput extends Component {
  render() {
    const { item, handleChange, performSearch, query } = this.props;
    return (
      <div className="card card-body my-3">
        <form>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-success text-white">
                <i className="fas fa-clipboard-list"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="search a recipe item"
              value={query}
              onChange={event => performSearch(event.target.value)}
            ></input>
          </div>
          <Dropdown className="d-flex flex-column align-items-center m-3">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dish Type
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Breakfast</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Dish</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Dessert</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Drink</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Snack</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </form>
      </div>
    );
  }
}
