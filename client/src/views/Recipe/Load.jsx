import React, { Component } from "react";
import { Card } from "react-bootstrap";

import * as Service from "./../../services/recipe-view-service";

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
        console.log(error); // ERROR HERE <<<<<<<---------------------------
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
      <div className="d-flex flex-column align-items-center m-3">
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={recipe.image} alt="Image" />
          <Card.Body>
            <Card.Text>
              <b>{recipe.title}</b>
              <br></br>
              {recipe.duration} minutes
              <br></br>
              {recipe.calories} calories
            </Card.Text>
            <Card.Text className="list-group-flush">
              <b>Ingredients:</b>
              <br></br>
              {recipe.ingredients}
              <br></br>
              <b>Steps:</b>
              <br></br> {recipe.directions}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

// title: "",
// ingredients: "",
// directions: "",
// duration: "",
// calories: "",
// image: ""
