import React, { useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header.js'
import { getAllPets, removePet, newPet, updatePet} from '../crud';
import PetList from './PetList.js'
import PetForm from './PetForm.js'
import "../App.css" 



function App() {
  const [pets, setPets] = useState([])  //pets is an array because we're passing an array to useState, setPets is a function that will update the pets state
  const [editablePet, setEditablePet] = useState({
    petName:'',
    petType:'',
    arrivalDate:'',
    id:''
  })

  useEffect(() => {
    getAllPets().then(petData => {
      setPets(petData);
    })
  },[]);// this is an array of property names used that when changed should call the useEffect hook.  Leaving the array empty means the useEffect hook will only run once on the first render

  function resetForm(){   
    setEditablePet({
      petName:'',
      petType:'',
      arrivalDate:'',
      id:''
    })
  }

  function populatePetForm(petData){
    setEditablePet(petData)
  }

  function createPet(petDataFromForm){      //petDataFromForm is being passed to the createPet function
    newPet(petDataFromForm).then(petDataFromServer => {   //petDataFromForm is being passed to newPet which creates a new pet on the server .then is called when the promise is fulfilled
      resetForm()                                       //when the newPet function is successful then the form is reset
      setPets([...pets, petDataFromServer])             //updates the pets state with an array containing the new pet data from the server and the existing pets data
    })
    
  }

  function deletePet(petId){
    removePet(petId).then(deletedPet => {
      resetForm()
      // loops through the pets array and creates a new array without the deleted pet by comparing each pet objects id to the deleted pet id.
      // if pet.id does not match deletedPet.id then the pet is added to the new array.
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
      // https://stackoverflow.com/questions/36326612/how-to-delete-an-item-from-state-array
      const updatedPets = pets.filter((pet) => pet.id !== deletedPet.id)
      setPets(updatedPets);

    })
    
  }

  function editPet(petData){
    updatePet(petData).then(updatedPet => {
      resetForm()
      // loops through the pets array and creates a new array with the updatePet data by comparing each pet objects id to the updatePet pet id.
      // if pet.id matched updatedPet.id the updatedPet is put in the updatedPets array if not the current pet is put in the updatedPets array.
      // This uses a Conditional (ternary) operator.  A Conditional (ternary) operator is like an "if" statement.
      // The "if" condition is to the left of the question mark.
      // If the "if" condition is true the value after the question mark will be used.
      // If the "if" condition is false the value after the colon will be used.
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
      // https://stackoverflow.com/questions/28121272/whats-the-best-way-to-update-an-object-in-an-array-in-reactjs
      const updatedPets = pets.map(pet => (pet.id === updatedPet.id ? {...updatedPet} : pet))  //creates a new pets array containing the updated pet
      setPets(updatedPets)                                                                  
    })
    
  }

  return (
    <>
       <Header/>
       <PetForm createPet={createPet} editPet={editPet} editablePet={editablePet}/>  {/*passing the createPet and editPet functions and the editablePet object to the PetForm component */}
       <PetList animals={pets} populatePetForm={populatePetForm} deletePet={deletePet}/> {/*setting the pets array to the animals property and passing the pets array to PetList, passing populatePetForm and deletePet functions to PetList*/ }
      
    </>
  )
}

export default App;
