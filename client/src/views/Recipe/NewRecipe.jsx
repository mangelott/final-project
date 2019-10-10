import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

import * as Service from "../../services/recipe-view-service";

export default class newRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      dishType: "",
      ingredients: "",
      directions: "",
      duration: "",
      calories: "",
      image: ""
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);

    // this.onFileChange = this.onFileChange.bind(this);
  }

  handleChangeCreateRecipe = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleChangeImage = event => {
    this.setState({
      image: event.target.files[0]
    });
  };

  onFormSubmit(event) {
    event.preventDefault();
    const {
      title,
      ingredients,
      directions,
      dishType,
      duration,
      calories,
      image
    } = this.state;

    console.log("ONSUBMIT STATE", this.state);
    Service.newRecipe({
      title,
      ingredients,
      dishType,
      directions,
      duration,
      calories,
      image
    })
      .then(recipe => {
        console.log("creation test", this.state);
        this.props.history.push("/recipe");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.handleChangeCreateRecipe}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dish Type</Form.Label>
            <Form.Control
              as="select"
              placeholder="DishType"
              name="dishType"
              value={this.state.dishType}
              onChange={this.handleChangeCreateRecipe}
            >
              <option value="" disabled>
                Choose the type
              </option>
              {["Breakfast", "Dish", "Snack", "Drink", "Dessert", "Other"].map(
                item => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )
              )}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Ingredients</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingredients"
              name="ingredients"
              value={this.state.ingredients}
              onChange={this.handleChangeCreateRecipe}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Directions</Form.Label>
            <Form.Control
              type="text"
              placeholder="Directions"
              name="directions"
              value={this.state.directions}
              onChange={this.handleChangeCreateRecipe}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Duration</Form.Label>
            <Form.Control
              type="text"
              placeholder="Duration"
              name="duration"
              value={this.duration}
              onChange={this.handleChangeCreateRecipe}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Calories</Form.Label>
            <Form.Control
              type="text"
              placeholder="Calories"
              name="calories"
              value={this.state.calories}
              onChange={this.handleChangeCreateRecipe}
            />
          </Form.Group>

          <Form.Group>
            <label htmlFor="image" className="file-input">
              <span>Profile Photo</span>
            </label>
            <Form.Control
              id="recipe-profile"
              type="file"
              name="image"
              onChange={this.handleChangeImage}
            />
          </Form.Group>

          <Button type="submit" className="purple">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
