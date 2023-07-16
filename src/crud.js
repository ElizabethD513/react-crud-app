const PETS_ENDPOINT = "https://6495d01db08e17c91792b7ba.mockapi.io/api/v1/pets"



export function getAllPets(){       //https://github.com/mockapi-io/docs/wiki/Code-examples
    return fetch(PETS_ENDPOINT, {   //fetching data from the Mock Api URL to get all pets in the form of a JSON response
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then(res => {  //Response object
      if (res.ok) {       
        return res.json();   //receiving a JSON response. 
      }
    // handle error
    }).then(petData => {
        return petData
  // Do something with the list of tasks
    }).catch(error => {
  // handle error
    })
}

export function removePet(petId){       //sending a request to delete data from the server using the petId
  return fetch(PETS_ENDPOINT + "/" + petId, {
    method: 'DELETE',
  }).then(res => {
    if (res.ok) {
        return res.json();   //to extract the JSON body content from the Response object, we use the json() method, which returns a second promise that resolves with the result of parsing the response body text as JSON.
    }                       //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // handle error
  }).catch(error => {
    // handle error
  })
}

export function newPet(petData){    //sending data to the server to create a new pet
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

export function updatePet(petData){   //sending data to the server to edit pet data
    return fetch(PETS_ENDPOINT+'/'+petData.id, {
        method: 'PUT', // or PATCH
        headers: {'content-type':'application/json'},
        body: JSON.stringify(petData)
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    }).then(petData => {
        return petData
    }).catch(error => {
        // handle error
    })
}
