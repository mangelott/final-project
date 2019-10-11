import React, { Component } from "react";
import Carousel from "../../components/Movies";
import Posts from "../../components/Posts";
import FindRecipes from "../../components/Recipe/FindRecipes";

import { Container } from "react-bootstrap";

export default class HomeView extends Component {
  render() {
    return (
      <div className="content-text">
        <Container className="pt-5">
          <h3>FIND A RECIPE</h3>
          <FindRecipes />
          <h3>VIDEOS 360º</h3>
          <Carousel />
          <h3 className="mt-2">BLOG</h3>
          <Posts />
        </Container>
      </div>
    );
  }
}
