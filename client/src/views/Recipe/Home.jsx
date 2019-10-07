import React, { Component } from "react";
// import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import RecipeInput from "./RecipeInput";
import RecipeList from "./RecipeList";

export default class index extends Component {
  state = {
    items: [],
    item: "",
    title: ""
  };

  handleChange = event => {
    this.setState({
      item: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    //SEARCH RECIPES
  };

  handleEdit = event => {
    event.preventDefault();
    //Edit RECIPES
  };

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  render() {
    return (
      <div className="d-flex flex-column align-items-center m-3">
        <Link to="/recipe/create">
          <button type="submit" className="btn btn-block btn-success mt-3">
            New Recipe
          </button>
        </Link>
        <RecipeInput
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipeList
          items={this.state.items}
          title={this.state.title}
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}
