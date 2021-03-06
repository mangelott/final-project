import React, { Component } from "react";

import * as PostServ from "../../services/blog-view-service";

import { Link } from "react-router-dom";

import { Container, Card, Button, Row } from "react-bootstrap/";

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
      <div className="pb-5 mx-auto content-text ">
        <Container className="pt-5 pb-5 mx-auto">
          {this.props.user.role === "Hospital" && (
            <Button
              type="submit"
              href="/blog/create"
              className="btn btn-block purple mt-3"
            >
              Create a post
            </Button>
          )}

          <Row>
            {this.state.posts.map(blogging => (
              <Link key={blogging._id} to={`/blog/${blogging._id}`}>
                <Card
                  className="mx-2 mt-5 mb-1 border-0"
                  style={{ width: "22rem" }}
                  key={blogging._id}
                >
                  <Card.Img
                    variant="top"
                    src={blogging.image}
                    style={{ maxWidth: "100%" }}
                  />
                  <Card.Body>
                    <Card.Title>{blogging.title}</Card.Title>
                    <span className="text-muted text-md-center">
                      {blogging.subtitle}
                    </span>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
