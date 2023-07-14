import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

// static populateForm(pet) {
//   $('#petId').val(pet.id)  //puts the pet id into the input with the ID petId
//   $('#petType').val(pet.petType)  
//   $('#petName').val(pet.petName)
//   $('#petSex').val(pet.petSex)
//   $('#arrivalDate').val(pet.arrivalDate)
// }

export default function PetForm(props) {
  const [petName, setPetName] = useState(props.editablePet.petName || "");
  const [petType, setPetType] = useState(props.editablePet.petType || "");
  const [arrivalDate, setArrivalDate] = useState(props.editablePet.arrivalDate || "")
  const [id, setId] = useState(props.editablePet.id || "")
  const handleSubmit = (event) => {
    event.preventDefault();
    const petData = {petName: petName, petType: petType, arrivalDate: arrivalDate}
    props.createPet(petData)
    setPetName("") 
    setPetType("")
    setArrivalDate("")
    setId("")
  }

  

  return (
    
    <div className="main-form">
      <Form onSubmit={handleSubmit}>
        
        <input type="hidden" name="id" value={id}/>
        <Form.Group controlId="petName">
          <Form.Label>pet Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="petName"
            value={petName}
            placeholder="Enter name of pet"
            onChange={(e) => setPetName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="petType">
          <Form.Label>Pet Type</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="petType"
            value={petType}
            placeholder="Enter type of pet"
            onChange={(e) => setPetType(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="arrivalDate">
          <Form.Label>arrivalDate</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={arrivalDate}
            placeholder="Enter arrivalDate of pet"
            onChange={(e) => setArrivalDate(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};
