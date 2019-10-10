import React, { Component } from "react";
import RecipeItem from "./RecipeItem";
// import * as ServiceRecipe from "../../services/recipe-view-service";

export default class RecipeList extends Component {
  render() {
    const { loadAll, handleDelete, items } = this.props;
    // console.log(this.props.filtered);
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">Recipe List</h3>
          {items &&
            items.map(recipe => {
              return (
                <RecipeItem
                  key={recipe._id}
                  title={recipe.title}
                  image={recipe.image}
                  handleDelete={() => handleDelete(recipe._id)}
                  loadAll={loadAll}
                  id={recipe._id}
                />
              );
            })}
        </ul>
      </div>
    );
  }
}
