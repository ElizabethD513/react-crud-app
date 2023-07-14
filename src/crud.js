const PETS_ENDPOINT = "https://6495d01db08e17c91792b7ba.mockapi.io/api/v1/pets"



export function getAllPets(){
    return fetch(PETS_ENDPOINT, {
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
    // handle error
    }).then(petData => {
        return petData
  // Do something with the list of tasks
    }).catch(error => {
  // handle error
    })
}

export function removePet(petId){
  return fetch(PETS_ENDPOINT + "/" + petId, {
    method: 'DELETE',
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).catch(error => {
    // handle error
  })
}

export function newPet(petData){
  return fetch(PETS_ENDPOINT , {
    method: 'POST',
    headers: {'content-type':'application/json'},
    // Send your data in the request body as JSON
    body: JSON.stringify(petData)
  }).then(res => {
 
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(petData => {
    return petData
    
    // do something with the new task
  }).catch(error => {
    // handle error
  })


}