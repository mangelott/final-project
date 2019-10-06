import React, { Component } from "react";
import * as PostServ from "./../../services/blog-view-service";

import { Card } from "react-bootstrap/";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props
    };
  }

  loadPost() {
    PostServ.loadPostServ(this.props.match.params.id)
      .then(blogging => {
        console.log(">>>", blogging);
        this.setState({
          blogging
        });
      })
      .catch(error => {
        console.log("this is the load error2:", error);
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
    console.log("post>>>>>>>>", this.state.post);
    return (
      (post && (
        <div>
          <Card className="text-center">
            <Card.Body>
              <Card.Img variant="top" src={post.image} />
              <Card.Title>{post.title}</Card.Title>
              <Card.Text sytle={{ height: "100px" }}>{post.text}</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
          </Card>
        </div>
      )) || <div></div>
    );
  }
}
