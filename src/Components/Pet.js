import { Button } from 'bootstrap';
import React from 'react';

const Pet = (props) => {
  
  return (
    <div>
        <h2>{props.pet.petName}</h2>
        <p>{props.pet.petType}</p>
        <p>{props.pet.arrivalDate}</p>
        <p>{props.pet.id}</p>
        <button onClick={() => props.deletePet(props.pet.id)}>Delete</button>
        <button onClick={() => props.updatePetForm(props.pet)}>Edit</button>
    </div>
  )
  ;
  
};

export default Pet;