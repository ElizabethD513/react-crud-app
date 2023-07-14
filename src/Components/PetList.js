import React from 'react';
import Pet from './Pet'

function PetList(props) {
  return (
    <div>
      {props.animals.map((pet) => (
        <Pet key={pet.id} pet={pet} updatePetForm={props.updatePetForm} deletePet={props.deletePet}/>
      ))}
    </div>
  )
};

export default PetList;