import React, { Component } from "react";
import { Card, Container, Image } from "react-bootstrap";

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
      <div>
        <div
          className="content-image  mt-5 "
          style={{
            backgroundImage: `url(${recipe.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%"
          }}
        >
          <div className=" text-center content-text ">
            <h1>{recipe.title}</h1>
            <p>{recipe.title}</p>
            <p>{recipe.duration} minutes</p>
            <p>{recipe.calories} calories</p>
            <p>{recipe.ingredients}</p>
            <p>{recipe.directions}</p>
          </div>
        </div>

        {/* <div className="d-flex flex-column align-items-center m-3">
          <Card>
            {/* <Card.Img variant="top" src={recipe.image} alt="Image" /> */}
        {/* <Card.Body>
              <Card.Text>
                {recipe.title}
                <br></br>
                {recipe.duration} minutes
                <br></br>
                {recipe.calories} calories
              </Card.Text>
              <Card.Text className="list-group-flush">
                Ingredients:
                <br></br>
                {recipe.ingredients}
                <br></br>
                Steps:
                <br></br> {recipe.directions}
              </Card.Text>
            </Card.Body>
          </Card> */}
        {/* </div>  */}
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
