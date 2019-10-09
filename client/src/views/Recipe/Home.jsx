import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeInput from "./RecipeInput";
import RecipeList from "./RecipeList";

export default class index extends Component {
  state = {
    items: [],
    item: "",
    title: "",
    query: ""
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

  performSearch = value => {
    this.setState({
      query: value
    });
  };

  get filteredRecipeList() {
    const query = this.state.query;
    const recipeList = this.state.items;
    return recipeList.filter(recipe =>
      recipe.title.toLowerCase().includes(query.toLocaleLowerCase())
    );
  }

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
          performSearch={this.performSearch}
          query={this.query}
        />
        <RecipeList
          // items={this.state.items}
          // title={this.state.title}
          // handleEdit={this.handleEdit}
          items={this.filteredRecipeList}
          // title={filteredRecipeList.recipe.title}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}
