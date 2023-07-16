import React from 'react';
import {Button} from 'react-bootstrap'

const Pet = (props) => {

  return (
    <div>
        <h5>{props.pet.petName}</h5>
        <p>{props.pet.petType}</p>
        <p>{props.pet.arrivalDate}</p>
        <Button onClick={() => props.populatePetForm(props.pet)} variant="secondary">Edit</Button>{" "}
        <Button onClick={() => props.deletePet(props.pet.id)} variant="danger">Delete</Button>
    
    </div>
  );
};

export default Pet;
