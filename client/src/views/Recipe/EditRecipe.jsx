import React, { Component } from "react";

import RecipeForm from "../../components/Recipe/RecipeForm";

import * as Service from "../../services/recipe-view-service";
import { Container } from "react-bootstrap";

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
    Service.load(id)
      .then(recipe => {
        console.log(recipe);
        this.setState({
          recipe
        });
      })
      .catch(error => {
        console.log(error);
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

  editRecipe(event) {
    event.preventDefault();
    const id = this.props.match.params.id;
    const recipe = this.state.recipe;
    console.log("ID", id, "RECIPE BODY ", recipe);
    Service.edit(id, recipe)
      .then(recipe => {
        // this.props.history.push(`/recipe/${id}`);
        console.log("this props", recipe);
      })
      .catch(error => {
        console.log("error trying to edit", error);
      });
  }

  deleteRecipe() {
    const id = this.props.match.params.id;
    Service.remove(id)
      .then(recipe => {
        this.props.history.push("/recipe");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="content-text mt-5 pt-5 mb-5 pb-5">
        <Container>
          <h3>Edit Recipe: {this.state.recipe.title}</h3>
          <RecipeForm
            value={this.state.recipe}
            onValueChange={this.onFormValueChange}
            onFormSubmit={this.editRecipe}
          ></RecipeForm>
        </Container>
      </div>
    );
  }
}
