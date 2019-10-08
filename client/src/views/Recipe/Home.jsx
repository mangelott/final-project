import React, { Component } from "react";
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

  handleEdit = event => {
    event.preventDefault();
    //Edit RECIPES
  };

  render() {
    return (
      <div className="d-flex flex-column align-items-center m-3">
        <Link to="/recipe/create">
          <button type="submit" className="btn btn-block btn-success mt-3">
            New Recipe
          </button>
        </Link>
        <RecipeInput item={this.state.item} handleChange={this.handleChange} />
        <RecipeList
          items={this.state.items}
          title={this.state.title}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}
