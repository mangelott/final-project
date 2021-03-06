import React, { Component } from "react";

import * as PostServ from "./../services/blog-view-service";

import { Link } from "react-router-dom";

import { Container, Card, Col } from "react-bootstrap";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    PostServ.postsServ()
      .then(posts => {
        this.setState({
          posts
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="mb-5 pb-4">
        <div className="mb-4 scrolling-cards">
          {this.state.posts.map(blogging => (
            <Link key={blogging._id} to={`/blog/${blogging._id}`}>
              <Card
                style={{
                  backgroundImage: `url(${blogging.image})`
                }}
                className="mt-4 border-0 rounded-lg text-white component-image  d-flex flex-row"
              >
                <Card.ImgOverlay className="purple-filter">
                  <Card.Title>{blogging.title}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
