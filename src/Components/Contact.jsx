import React, { useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";
import EditContactForm from "./EditContactForm";

const Contact = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteContact(props.contactInfo.id);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContactForm
            contactInfo={props.contactInfo}
            editContact={props.editContact}
            closeModal={handleClose}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Col md="4" style={{ marginBottom: "1rem" }}>
        <Card
          style={{ width: "18rem", backgroundColor: "black", color: "red", height: "15rem" }}
        >
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">Shenk Users Contact</Card.Subtitle>
            <Card.Title>{props.contactInfo.name}</Card.Title>
            <Card.Text>
              Location: {props.contactInfo.location}
              Phone: {props.contactInfo.phone}
            </Card.Text>
            <Card.Link href="#">
              <Button variant="primary" size="sm" onClick={handleShow}>
                Edit
              </Button>{" "}
            </Card.Link>
            <Card.Link href="#">
              <Button variant="danger" size="sm" onClick={handleDelete}>
                Delete
              </Button>{" "}
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Contact;
