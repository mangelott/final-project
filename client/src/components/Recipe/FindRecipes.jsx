import React, { Component } from "react";
import * as ServiceRecipe from "./../../services/recipe-view-service";

import { Link } from "react-router-dom";
import { Card } from "react-bootstrap/";

export default class FindRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomRecipe: null
    };
  }

  componentDidMount() {
    ServiceRecipe.listRecipes()
      .then(items => {
        // console.log("itemssss", items);
        const randomIndex = Math.floor(Math.random() * items.length + 1) - 1;
        // console.log("IS IT RANDOM", randomIndex);
        this.setState({
          randomRecipe: items[randomIndex]
        });
        // console.log("recipe:", this.state);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const recipe = this.state.randomRecipe;

    return this.state.randomRecipe ? (
      <div className="mb-3">
        <Link to={"/recipe"}>
          <Card
            style={{
              width: "22rem",
              backgroundImage: `url(${recipe.image})`,
              height: "10em"
            }}
            className="border-0 rounded-lg text-white component-image box-shadow "
            key={recipe._id}
          >
            <Card.ImgOverlay className="purple-filter">
              <Card.Title>{recipe.title}</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Link>
      </div>
    ) : (
      <div> Image loading ...</div>
    );
  }
}
