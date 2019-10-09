import React, { Component } from "react";
import Carousel from "../../components/Movies";
import Posts from "../../components/Posts";
import FindRecipes from "../../components/Recipe/FindRecipes";

import { Container } from "react-bootstrap";

export default class HomeView extends Component {
  render() {
    return (
      <div>
        <Container className="mt-4">
          <h1>Find a Recipe</h1>
          <FindRecipes />
          <h1>VIDEOS 360º</h1>
          <Carousel />
          <h1 className="mt-2">BLOG</h1>
          <Posts />
        </Container>
      </div>
    );
  }
}