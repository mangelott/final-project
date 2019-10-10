import React, { Component } from "react";

import * as PostServ from "./../../services/blog-view-service";
import { Link } from "react-router-dom";

import { Container, Card, Button } from "react-bootstrap/";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props
    };
    this.loadPost = this.loadPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  loadPost() {
    PostServ.loadPostServ(this.props.match.params.id)
      .then(blogging => {
        // console.log(">>>", blogging);
        this.setState({
          blogging
        });
      })
      .catch(error => {
        console.log("this is the load error2:", error);
      });
  }

  deletePost() {
    const id = this.props.match.params.id;
    PostServ.removePostServ(id)
      .then(blogging => {
        this.props.history.push("/blog");
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.loadPost();
  }

  componentDidUpdate(previousProps, previousState) {
    if (
      !this.state.blogging ||
      previousProps.match.params.id !== this.props.match.params.id
    ) {
      this.loadPost();
    }
  }
  render() {
    const post = this.state.blogging;
    return (
      (post && (
        <div className="border-0">
          <Container>
            <Card className="text-center border-0 pb-5 mb-3">
              <Card.Body>
                <Card.Img variant="top" src={post.image} />
                <div className="pt-2">
                  <Card.Title>{post.title}</Card.Title>
                  <span className="text-muted text-md-center">
                    {post.subtitle}
                  </span>
                  <Card.Text
                    className="text-box mt-2"
                    sytle={{ height: "100px" }}
                  >
                    {post.text}
                  </Card.Text>
                  <div className="d-flex justify-content-around">
                    <Link
                      className="btn btn-primary purple"
                      to={`/blog/${this.props.match.params.id}/edit`}
                    >
                      Edit Post
                    </Link>
                    <Button
                      variant="primary"
                      onClick={this.deletePost}
                      className="purple"
                    >
                      Delete the post
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Container>
        </div>
      )) || <div></div>
    );
  }
}
