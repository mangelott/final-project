import React, { Component } from "react";
import * as ServiceRecipe from "./../../services/recipe-view-service";

import { Card } from "react-bootstrap/";

export default class FindRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
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
    const recipe = this.state.recipes;
    return (
      <div>
        {this.state.recipes.map(recipe => (
          <Card className="mt-4 border-0 rounded-lg text-white">
            <Card.Img src={recipe.image} alt={recipe._id} />
            <Card.ImgOverlay className="purple-filter">
              <Card.Title>{recipe.title}</Card.Title>
            </Card.ImgOverlay>
          </Card>
        ))}
      </div>
    );
  }
}
