import React, { Component } from "react";
import RecipeItem from "./RecipeItem";
import * as ServiceRecipe from "../../services/recipe-view-service";

export default class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

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

  clearList = () => {
    this.setState({
      items: []
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
        console.log("recipe:", this.state);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { handleEdit } = this.props;
    const { handleDelete, clearList } = this;
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">Recipe List</h3>
          {this.state.items &&
            this.state.items.map(recipe => {
              return (
                <RecipeItem
                  key={recipe._id}
                  title={recipe.title}
                  handleEdit={() => handleEdit(recipe._id)}
                  handleDelete={() => handleDelete(recipe._id)}
                  loadAll={this.loadAll}
                />
              );
            })}
          <button
            type="button"
            onClick={this.clearList}
            className="btn btn-danger btn-block text-capitalize mt-5"
          >
            Clear All Recipes
          </button>
        </ul>
      </div>
    );
  }
}
