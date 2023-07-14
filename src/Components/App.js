
import React, { useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAllPets, removePet, newPet} from '../crud';
import PetList from './PetList.js'
import PetForm from './PetForm.js'





function App() {
  const [pets, setPets] = useState([])
  const [editablePet, setEditablePet] = useState({})

  useEffect(() => {
    getAllPets().then(petData => {
      setPets(petData);


      // Do something with the list of tasks
    })
  },[]);//TODO find out why you need an empty array on useEffect
 
  function createPet(petData){
    newPet(petData).then(petData => {
      setPets([petData, ...pets])

    })
    console.log("createPet")

  }

  function deletePet(petId){
    removePet(petId).then(x => {
      getAllPets().then(petData => {
        setPets(petData);
  

      })

    })
    console.log("deletePet")

  }

  function updatePetForm(petData){
    setEditablePet({...petData})

  }

  return (
    <div>
       {/* <ReviewList reviews={movieReviews}/> */}
       <PetForm createPet={createPet} editablePet={editablePet}/>
       <PetList animals={pets} updatePetForm={updatePetForm} deletePet={deletePet}/>
       
    </div>
  
  )}

export default App;
