import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

import ReactPlayer from "react-player";

export default class Movies extends Component {
  render() {
    return (
      <Carousel interval={null} className="mb-4 box-shadow s">
        <Carousel.Item className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=07jGVntcznE&t=2s"
            width="100%"
            height="100%"
          />
        </Carousel.Item>
        <Carousel.Item className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=Si_MFXwciLc"
            width="100%"
            height="100%"
          />
        </Carousel.Item>
        <Carousel.Item className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=8dgXZ0wNuqw"
            width="100%"
            height="100%"
          />
        </Carousel.Item>
        <Carousel.Item className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=vHTN9jaztRA&t=22s"
            width="100%"
            height="100%"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}
