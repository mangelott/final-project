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
          <h1>
            <strong>FIND A RECIPE</strong>
          </h1>
          <FindRecipes />
          <h1>
            <strong>VIDEOS 360º</strong>
          </h1>
          <Carousel />
          <h1 className="mt-2">
            <strong>BLOG</strong>
          </h1>
          <Posts />
        </Container>
      </div>
    );
  }
}
