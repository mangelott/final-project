import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap/";
import ReactPlayer from "react-player";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container className="content-text pt-5">
          <Carousel interval={null}>
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
        </Container>
      </div>
    );
  }
}
