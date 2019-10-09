import React, { Component } from "react";
import * as ServiceRecipe from "./../../services/recipe-view-service";

import { Container, Card } from "react-bootstrap/";

export default class FindRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    ServiceRecipe.listRecipes()
      .then(items => {
        console.log("itemssss", items);
        const randomIndex = Math.floor(Math.random() * items.length + 1);
        this.setState({
          items: items[randomIndex]
        });
        console.log("recipe:", this.state);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const recipe = this.state.items;
    console.log("recipe>>>", recipe);
    return (
      <div>
        <Card
          style={{
            width: "22rem",
            backgroundImage: `url(${recipe.image})`,
            height: "10em"
          }}
          className="mt-4 border-0 rounded-lg text-white component-image"
          key={recipe._id}
        >
          <Card.ImgOverlay className="purple-filter">
            <Card.Title>{recipe.title}</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
}
