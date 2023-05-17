import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Contact from './Components/Contact';
import React, { Component } from 'react';
import AddContactForm from './Components/AddContactForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          name: "John",
          location: "3 kf accra",
          phone: 1,
          id: "hiqkosabz828q",
        },
        {
          name: "Jane",
          location: "19 remdel accra",
          phone: 5,
          id: "ncdsuocwasw82wis",
        },
      ],
    };
  }

  addNewContact = (contact) => {
    contact.id = Math.random().toString();
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };

  deleteContact = (id) => {
    let undeletedContacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: undeletedContacts,
    });
  };

  editContact = (id, updatedContact) => {
    this.setState({
      contacts: this.state.contacts.map((contact) => (contact.id === id ? updatedContact : contact)),
    });
  };

  render() {
    return (
      <div className='body'>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <h4>Add Contact</h4>
              <AddContactForm addContact={this.addNewContact} />
            </Col>
            <Col>
              <h4>All Shenk Contacts</h4>
              {this.state.contacts.map((contact) => (
                <Contact
                  key={contact.id}
                  contactInfo={contact}
                  deleteContact={this.deleteContact}
                  editContact={this.editContact}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
