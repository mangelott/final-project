import React, { Component } from "react";
import Carousel from "./../../components/Movies";
import Posts from "./../../components/Posts";

export default class HomeView extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Posts />
      </div>
    );
  }
}
