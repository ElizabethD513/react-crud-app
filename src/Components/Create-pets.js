import React from 'react';
import PetForm from './PetForm';

const AddPet = () => {
  const handleOnSubmit = (pet) => {
    console.log(pet);
  };

  return (
    <React.Fragment>
      <PetForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddPet;