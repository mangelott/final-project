import React, { Component } from "react";
import * as PostServ from "./../../services/blog-view-service";

import { Container, Form, Button } from "react-bootstrap/";

export default class EditPost extends Component {
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
    this.onFormValueChange = this.onFormValueChange.bind(this);
    this.editPost = this.editPost.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    PostServ.loadPostServ(id)
      .then(post => {
        this.setState({
          post: {
            ...post
          }
        });
      })
      .catch(error => {
        console.log("error here nº 1", error);
      });
  }

  editPost(event) {
    event.preventDefault();
    const id = this.props.match.params.id;
    const post = this.state.post;
    PostServ.editPostServ(id, post)
      .then(post => {
        this.props.history.push(`/blog/${id}`);
        console.log("this props", post);
      })
      .catch(error => {
        console.log("error trying to edit", error);
      });
  }

  onFormValueChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ post: { ...this.state.post, [name]: value } });
    console.log(this.state.post);
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

  render() {
    return (
      <div>
        <Container>
          <Form onSubmit={this.editPost}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                name="title"
                value={this.state.post.title}
                onChange={this.onFormValueChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Subtitle</Form.Label>
              <Form.Control
                type="subtitle"
                name="subtitle"
                value={this.state.post.subtitle}
                onChange={this.onFormValueChange}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="image" className="file-input">
                Upload
              </label>
              <Form.Control
                id="post-profile"
                type="file"
                name="image"
                onChange={this.handleChangeImage}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Text</Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                name="text"
                value={this.state.post.text}
                onChange={this.onFormValueChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Edit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
