import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class newRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      dishType: "",
      ingredients: "",
      direction: "",
      duration: "",
      calories: "",
      image: ""
    };
    this.handleChangeCreateRecipe = this.handleChangeCreateRecipe.bind(this);
  }

  handleChangeCreateRecipe = event => {
    this.setState({
      item: event.target.value
    });
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.handleChangeCreateRecipe}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Dish Type</Form.Label>
            <Form.Control as="select">
              <option>Breakfast</option>
              <option>Dish</option>
              <option>Snack</option>
              <option>Drink</option>
              <option>Dessert</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicIngredients">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingredients"
              name="ingredients"
              value={this.state.ingredients}
              onChange={this.handleChangeCreateRecipe}
            />
          </Form.Group>

          <Form.Group controlId="formBasicDirections">
            <Form.Label>Directions</Form.Label>
            <Form.Control
              type="text"
              placeholder="Directions"
              name="direction"
              value={this.state.direction}
              onChange={this.handleChangeCreateRecipe}
            />
          </Form.Group>

          <Form.Group controlId="formBasicDuration">
            <Form.Label>Duration</Form.Label>
            <Form.Control
              type="text"
              placeholder="Duration"
              name="duration"
              value={this.duration}
              onChange={this.handleChangeCreateRecipe}
            />
          </Form.Group>

          <Form.Group controlId="formBasicCalories">
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
            <div>
              Upload
              <input type="file" name="image" />
            </div>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
