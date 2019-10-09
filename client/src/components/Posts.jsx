import React, { Component } from "react";

import * as PostServ from "./../services/blog-view-service";

import { Link } from "react-router-dom";

import { Container, Card, Row, Col } from "react-bootstrap/";

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
      <div>
        <Container className="mb-4" style={{ width: "18rem" }}>
          {this.state.posts.map(blogging => (
            <Link key={blogging._id} to={`/blog/${blogging._id}`}>
              <Row>
                <Col>
                  <Card className="mt-4 border-0 rounded-lg text-white">
                    <Card.Img src={blogging.image} alt={blogging._id} />
                    <Card.ImgOverlay className="purple-filter">
                      <Card.Title>{blogging.title}</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              </Row>
            </Link>
          ))}
        </Container>
      </div>
    );
  }
}
