import React, { Component } from "react";
import * as PostServ from "./../../services/blog-view-service";
import PrettyFileInput from "./../../components/PrettyFileInput";

import { Container, Form, Button } from "react-bootstrap";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        title: "",
        subtitle: "",
        image: "",
        text: ""
      }
    };
    this.creatingPost = this.creatingPost.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ post: { ...this.state.post, [name]: value } });
  }

  handleChangeImage = event => {
    console.log(event.target.file);
    this.setState({
      post: {
        ...this.state.post,
        image: event.target.files[0]
      }
    });
  };

  creatingPost(event) {
    event.preventDefault();
    const post = this.state.post;
    console.log(this.state);

    PostServ.createPostServ(post)
      .then(post => {
        this.props.history.push("/blog");
        console.log("this is the post:", this.props);
      })
      .catch(error => {
        console.log("error trying to create a post", error);
      });
  }

  render() {
    return (
      <div className="mt-4 pb-5">
        <Container>
          <Form onSubmit={this.creatingPost}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                name="title"
                value={this.state.title}
                onChange={this.onChangeValue}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Subtitle</Form.Label>
              <Form.Control
                type="subtitle"
                name="subtitle"
                value={this.state.subtitle}
                onChange={this.onChangeValue}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="image" className="file-input">
                Upload
              </label>
              {/* <Form.Control
                id="post-profile"
                type="file"
                name="image"
                onChange={this.handleChangeImage}
              /> */}
              <PrettyFileInput
                id="image-input"
                value={this.state.image}
                onChange={this.handleChangeImage}
                name="image"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Text</Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                name="text"
                value={this.state.text}
                onChange={this.onChangeValue}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="purple">
              Post
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
