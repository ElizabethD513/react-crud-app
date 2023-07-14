import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

// static populateForm(pet) {
//   $('#petId').val(pet.id)  //puts the pet id into the input with the ID petId
//   $('#petType').val(pet.petType)  
//   $('#petName').val(pet.petName)
//   $('#petSex').val(pet.petSex)
//   $('#arrivalDate').val(pet.arrivalDate)
// }

const petForm = (props) => {
  const [pet, setpet] = useState({
    petName: props.pet ? props.pet.petname : '',
    petType: props.pet ? props.pet.type : '',
    arrivalDate: props.pet ? props.pet.arrivalDate : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { petName, petType, arrivalDate } = pet;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [petName, petType, arrivalDate];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const pet = {
        id: uuidv4(),
        petName,
        petType,
        arrivalDate
      };
      props.handleOnSubmit(pet);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setpet((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setpet((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setpet((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>pet Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="petname"
            value={petname}
            placeholder="Enter name of pet"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>pet Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter type of pet"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="arrivalDate">
          <Form.Label>arrivalDate</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter arrivalDate of pet"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default petForm;