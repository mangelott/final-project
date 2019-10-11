import React, { Component } from "react";

import * as Service from "./../../services/recipe-view-service";

import Container from "react-bootstrap/Container";

export default class Load extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        title: "",
        dishType: "",
        ingredients: "",
        directions: "",
        duration: "",
        calories: "",
        image: ""
      }
    };
    this.loadRecipe = this.loadRecipe.bind(this);
    // this.onFileChange = this.onFileChange.bind(this);
  }

  loadRecipe() {
    Service.load(this.props.match.params.id)
      .then(recipe => {
        console.log(">>>", recipe);
        this.setState({
          recipe
        });
      })
      .catch(error => {
        console.log("this is the load error2:", error);
      });
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    Service.load(id)
      .then(recipe => {
        // console.log(recipe);
        this.setState({
          recipe
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate(previousProps, previousState) {
    if (
      !this.state.recipe ||
      previousProps.match.params.id !== this.props.match.params.id
    ) {
      this.loadRecipe();
    }
  }

  render() {
    const recipe = this.state.recipe;
    return (
      <div>
        <div className="content-image">
          <div
            className="recipe-image"
            style={{
              backgroundImage: `url(${recipe.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%"
            }}
          ></div>
          <div className="text-center content-text">
            <Container>
              <br></br>
              <h1>{recipe.title}</h1>
              <p>Ingredients: {recipe.ingredients}</p>
              <p>Steps: {recipe.directions}</p>
              <p>{recipe.duration} minutes</p>
              <p>{recipe.calories} calories</p>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
