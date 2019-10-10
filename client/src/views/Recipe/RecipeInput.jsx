import React, { Component } from "react";

import { Form } from "react-bootstrap";
export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = { dishType: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const type = event.target.value;
    this.setState({ dishType: type });
    this.props.performSearch({ type });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { performSearch, query } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text purple text-white">
                <i className="fas fa-clipboard-list"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="search a recipe item"
              value={query}
              onChange={event => performSearch({ query: event.target.value })}
            ></input>
          </div>
          <Form.Group className="d-flex flex-column align-items-center m-3">
            <Form.Control as="select" onChange={this.handleChange}>
              <option disabled selected>
                ...dish type
              </option>
              <option value="Breakfast">Breakfast</option>
              <option value="Dish">Dish</option>
              <option value="Dessert">Dessert</option>
              <option value="Drink">Drink</option>
              <option value="Snack">Snack</option>
              <option value="Other">Other</option>
            </Form.Control>
          </Form.Group>
        </form>
      </div>
    );
  }
}
