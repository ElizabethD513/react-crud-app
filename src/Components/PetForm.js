import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';

export default function PetForm(props) {
  const [editablePet, setEditablePet] = useState({...props.editablePet}); //declares a new state variable which returns the current state and a function that updates it.

  useEffect(() => {                       //By using this Hook, we tell React the component needs to do something after render. 
    setEditablePet({...props.editablePet});
  }, [props.editablePet]); // updates component every time props.editablePet changes

  const handleSubmit = (event) => {
    event.preventDefault();
    const petData = {...editablePet}
    if(petData.id){
      props.editPet(petData)
    } else {
      props.createPet(petData)
    }
  }

  return (
    <div className="main-form">
      <Container className="mt-3">
        <Row>
          <Col>
            <Card className="shadow-lg">
              <Card.Header className="p-3 mb-3" style={{backgroundColor: 'gray'}}>
                <h4>Pet Form</h4>
              </Card.Header>
              <Form onSubmit={handleSubmit}>
                <input type="hidden" name="id" value={editablePet.id}/>
                <Form.Group className="mb-3 ms-2" controlId="petName">
                  <Form.Label>Pet Name</Form.Label>
                  <Form.Control
                    className="input-control"
                    type="text"
                    name="petName"
                    value={editablePet.petName}
                    placeholder="Enter name of pet"
                    onChange={(e) => setEditablePet({...editablePet, petName:e.target.value})}
                  />
                </Form.Group>
                <Form.Group className="mb-3 ms-2" controlId="petType">
                  <Form.Label>Pet Type</Form.Label>
                  <Form.Control
                    className="input-control"
                    type="text"
                    name="petType"
                    value={editablePet.petType}
                    placeholder="Enter type of pet"
                    onChange={(e) => setEditablePet({...editablePet, petType:e.target.value})}
                  />
                </Form.Group>
                <Form.Group className="mb-3 ms-2" controlId="arrivalDate">
                  <Form.Label>Arrival Date</Form.Label>
                  <Form.Control
                    className="input-control"
                    type="text"
                    name="price"
                    value={editablePet.arrivalDate}
                    placeholder="Enter arrival date of pet"
                    onChange={(e) => setEditablePet({...editablePet, arrivalDate:e.target.value})}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-btn mb-2 ms-2">
                  Submit
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
