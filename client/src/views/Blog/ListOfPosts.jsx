import React, { Component } from "react";

import * as PostServ from "../../services/blog-view-service";

import { Link } from "react-router-dom";

import { Container, Col, Card, Button, Row } from "react-bootstrap/";

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
        console.log("post:", posts);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="mt-3">
        <Container>
          <Card>
            <Row>
              <Button type="submit" href="/blog/create">
                Create a post
              </Button>
            </Row>
          </Card>
        </Container>
        <Container /* className="d-flex justify-content-sm-around align-items-stretch" */
        >
          <Row>
            {this.state.posts.map(blogging => (
              <Card
                className="mx-2 mt-5 mb-1"
                style={{ width: "22rem" }}
                key={blogging._id}
              >
                <Card.Img variant="top" src={blogging.image} />
                <Card.Body>
                  <Card.Title>{blogging.title}</Card.Title>
                  <span className="text-muted text-md-center">
                    {blogging.subtitle}
                  </span>
                  <br />
                  <Link to={`/blog/${blogging._id}`}>
                    <Button variant="primary">View the Post</Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
