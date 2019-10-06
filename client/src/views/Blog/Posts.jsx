import React, { Component } from "react";

import * as PostServ from "./../../services/blog-view-service";

import { Card, Button } from "react-bootstrap/";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    console.log("this is this.props", this.props);
  }

  componentDidMount() {
    PostServ.postsServ()
      .then(posts => {
        this.setState({
          posts
        });
        console.log("post:", posts);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        {this.state.posts.map(blogging => (
          <Card style={{ width: "25rem" }} key={blogging._id}>
            <Card.Img variant="top" src={blogging.image} />
            <Card.Body>
              <Card.Title>{blogging.title}</Card.Title>
              <span>{blogging.subtitle}</span>
              <Card.Text>{blogging.text}</Card.Text>
              <Button variant="primary">View the Post</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}
