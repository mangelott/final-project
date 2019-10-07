import React, { Component } from "react";

import Button from "react-bootstrap/Button";

import RecipeForm from "../../components/Recipe/RecipeForm";

import { edit, load, remove } from "../../services/recipe-view-service";

export default class editRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        title: "",
        ingredients: "",
        directions: "",
        duration: "",
        calories: ""
      }
    };
    this.onFormValueChange = this.onFormValueChange.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    load(id)
      .then(recipe => {
        recipe.setState({
          recipe: {
            ...recipe
          }
        });
      })
      .catch(error => {
        console.log(error); // ERROR HERE <<<<<<<---------------------------
      });
  }

  onFormValueChange(data) {
    this.setState({
      recipe: {
        ...this.state.recipe,
        ...data
      }
    });
  }

  editRecipe() {
    const id = this.props.match.params.id;
    const recipe = this.state.recipe;
    edit(id, recipe)
      .then(recipe => {
        this.props.history.push(`/recipe/${recipe._id}`);
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteRecipe() {
    const id = this.props.match.params.id;
    remove(id)
      .then(recipe => {
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Edit Recipe:</h1>
        <RecipeForm
          value={this.state.recipe}
          onValueChange={this.onFormValueChange}
          onFormSubmit={this.editRecipe}
        >
          <Button type="submit">Edit Recipe</Button>
        </RecipeForm>
        <Button onClick={this.deleteRecipe} className="btn-danger">
          Delete Recipe
        </Button>
      </div>
    );
  }
}
