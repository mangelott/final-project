import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onValueChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.props.onValueChange({
      [name]: value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(event);
  }

  render() {
    console.log("STATE FROM PROPS", this.props.value);
    return (
      <div>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Recipe Title"
              value={this.props.value.title}
              onChange={this.onValueChange}
              className="text-capitalize"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ingredients</Form.Label>
            <Form.Control
              type="text"
              name="ingredients"
              placeholder="Ingredients"
              value={this.props.value.ingredients}
              onChange={this.onValueChange}
              className="text-capitalize"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Directions</Form.Label>
            <Form.Control
              type="text"
              name="directions"
              placeholder="Directions"
              value={this.props.value.directions}
              onChange={this.onValueChange}
              className="text-capitalize"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Duration</Form.Label>
            <Form.Control
              type="number"
              name="duration"
              placeholder="Duration"
              value={this.props.value.duration}
              onChange={this.onValueChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Calories</Form.Label>
            <Form.Control
              type="number"
              name="calories"
              placeholder="Calories"
              value={this.props.value.calories}
              onChange={this.onValueChange}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}
