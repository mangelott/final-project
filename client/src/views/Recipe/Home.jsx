import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeInput from "./RecipeInput";
import RecipeList from "./RecipeList";
import * as ServiceRecipe from "../../services/recipe-view-service";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      item: "",
      title: "",
      query: "",
      dishType: ""
    };
    this.performSearch = this.performSearch.bind(this);
  }
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
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
  performSearch = ({ query, type }) => {
    this.setState({
      // query: value
      ...(query !== undefined && { query }),
      ...(type && { dishType: type })
    });
  };
  get filteredRecipeList() {
    const query = this.state.query;
    const dishType = this.state.dishType;
    const recipeList = this.state.items;

    return recipeList.filter(
      recipe =>
        recipe.title.toLowerCase().includes(query.toLowerCase()) &&
        (recipe.dishType
          ? recipe.dishType.toLowerCase().includes(dishType.toLowerCase())
          : true)
    );
  }
  render() {
    const filtered = this.filteredRecipeList;
    const loadAll = this.loadAll;
    const handleDelete = this.handleDelete;
    const performSearch = this.performSearch;

    return (
      <div className="d-flex flex-column align-items-center m-3 mb-5">
        {this.props.user.role === "Hospital" && (
          <Link to="/recipe/create">
            <button type="submit" className="btn btn-block purple mt-3">
              New Recipe
            </button>
          </Link>
        )}
        <RecipeInput
          performSearch={performSearch}
          query={this.query}
          dishType={this.dishType}
        />
        <RecipeList
          items={filtered}
          loadAll={loadAll}
          handleDelete={handleDelete}
          filtered={filtered}
          user={this.props.user}
        />
      </div>
    );
  }
}
