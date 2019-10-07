import React, { Component } from "react";
import RecipeItem from "./RecipeItem";
// import { Link } from "react-router-dom";
import * as ServiceRecipe from "../../services/recipe-view-service";
// import { Card, Container } from "react-bootstrap/";

export default class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    // console.log(this.state);
  }

  componentDidMount() {
    ServiceRecipe.listRecipes()
      .then(items => {
        this.setState({
          items
        });
        console.log("recipe:", this.state);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { clearList, handleDelete, handleEdit } = this.props;
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">Recipe List</h3>
          {this.state.items &&
            this.state.items.map(recipe => {
              return (
                <RecipeItem
                  key={recipe.id}
                  title={recipe.title}
                  handleDelete={() => handleDelete(recipe.id)}
                  handleEdit={() => handleEdit(recipe.id)}
                />
              );
            })}
          <button
            type="button"
            onClick={clearList}
            className="btn btn-danger btn-block text-capitalize mt-5"
          >
            Clear All Recipes
          </button>
        </ul>
      </div>
    );
  }
}
