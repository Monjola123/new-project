import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      phone: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({
      name: "",
      location: "",
      phone: "",
    });
    console.log("Form submitted: ", this.state);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicname">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasiclocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter location"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your location with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicphone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            placeholder="phone no"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddContactForm;
