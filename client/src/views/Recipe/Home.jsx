import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeInput from "./RecipeInput";
import RecipeList from "./RecipeList";
import * as ServiceRecipe from "../../services/recipe-view-service";

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

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item._id !== id);
    ServiceRecipe.remove(id)
      .then(recipe => {
        this.setState({
          items: filteredItems
        });
      })
      .catch(error => {
        console.log("error when delete", error);
      });
  };

  componentDidMount() {
    this.loadAll();
  }

  loadAll() {
    ServiceRecipe.listRecipes()
      .then(items => {
        this.setState({
          items
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  performSearch = value => {
    this.setState({
      query: value
    });
  };

  // get filteredRecipeList() {
  //   const query = this.state.query;
  //   const recipeList = this.state.items;
  //   return recipeList.filter(recipe =>
  //     recipe.toLowerCase().includes(query.toLocaleLowerCase())
  //   );
  // }

  render() {
    // const filtered = this.filteredRecipeList;
    const loadAll = this.loadAll;
    const handleDelete = this.handleDelete;
    const performSearch = this.performSearch;
    console.log(this.state.items);
    return (
      <div className="d-flex flex-column align-items-center m-3">
        <Link to="/recipe/create">
          <button type="submit" className="btn btn-block btn-success mt-3">
            New Recipe
          </button>
        </Link>
        <RecipeInput performSearch={performSearch} query={this.query} />
        <RecipeList
          items={this.state.items}
          loadAll={loadAll}
          handleDelete={handleDelete}
        />
      </div>
    );
  }
}
