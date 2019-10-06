import React, { Component } from "react";

import * as PostServ from "../../services/blog-view-service";

import { Link } from "react-router-dom";

import { Container, Card, Button } from "react-bootstrap/";

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
      <div className="mt-3">
        <Container className="d-flex justify-content-sm-around align-items-stretch">
          {this.state.posts.map(blogging => (
            <Card style={{ width: "22rem" }} key={blogging._id}>
              <Card.Img variant="top" src={blogging.image} />
              <Card.Body>
                <Card.Title>{blogging.title}</Card.Title>
                <span className="text-muted">{blogging.subtitle}</span>
                <br />
                <Button variant="primary">
                  <Link to={`/blog/${blogging._id}`}>View the Post</Link>
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </div>
    );
  }
}
