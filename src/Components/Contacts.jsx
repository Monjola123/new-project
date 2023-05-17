import React from "react";
import { Container, Row } from "react-bootstrap";
import Contacts from "./Contacts";

const Contacts = (props) => {
  return (
    <Container>
            <Row>
                {
                    props.usersData.map((contact) => {
                        return (
                           <User
                            userInfo={contact}
                           key={contact.id}
                         deletecontact={props.deletecontact} 
                         editcontact={props.editcontact}/>
                        
                         );                   
                   })}
              
            </Row>
    </Container>
  );
};

export default Contacts;