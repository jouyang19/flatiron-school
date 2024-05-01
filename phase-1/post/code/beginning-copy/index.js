/*

Phase 1 -> Creating data with JSON Server and POST requests
Updated March 15, 2024
Created May 26, 2023
by Sakib Rasul

Objectives
1. Run an instance of JSON Server that hosts a dataset.
1. Make a GET request to display a dataset.
2. Make a POST request to add to that dataset.

*/

// Let's try making a GET request to display existing data on the page.
fetch("http://localhost:3000/dogs")
  .then((response) => response.json())
  .then((dogs) => {
    dogs.forEach((dog) => {
      addNewAnimal(dog, "dogs");
      updateSelection(dog, "dogs");
    });
  });

// ADD A CAT OR DOG FORM LISTENER
document.querySelector("#form").addEventListener("submit", (event) => {
  event.preventDefault();
  const petName = event.target.name.value;
  const petAge = event.target.age.value;
  const petType = event.target.pet.value;
  // console.log("name=" + petName + " age=" + petAge + " type=" + petType);
  if (petType === "dogs") {
    fetch(`http://localhost:3000/${petType}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        // IS THERE A WAY TO MAKE AN IF STATEMENT FOR THE BODY SO TO HAVE SEPARATE CAT AND DOG ATT?
        name: petName,
        age: petAge,
        isWellBehaved: true,
      }),
    })
      .then((response) => response.json())
      .then((newPet) => {
        // console.log(newPet);
        addNewAnimal(newPet, petType);
        // updateSelection(newPet, petType);
      });
  } else if (petType === "cats") {
    fetch(`http://localhost:3000/${petType}`, {
      method: "POST",
      // Content-type asks for the format type the client wants or accepts.
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // the body and JSON.stringify prepares the newCat and formats into JSON.
      body: JSON.stringify({
        name: petName,
        age: petAge,
        isACat: true,
        favoriteFoods: [],
      }),
    })
      // This part of the code is dedicated to appending the newCat to HTML.
      .then((response) => response.json())
      .then((cat) => {
        console.log(cat);
        addNewAnimal(cat, petType);
      });
  }
});

// Now, let's trigger a POST request when the user submits the form,
// so that they can add data to the database! Remember to think about
// the event, the target, and the handler when planning a listener.

// ~ Challenges
// 1. There are a handful of awfully similar lines in our requests. Try abstracting them
//    into a function! (create Elements and appending)

// 2. Try writing your own POST request. (for cats)
fetch("http://localhost:3000/cats")
  .then((response) => response.json())
  .then((cats) => {
    cats.forEach((cat) => {
      // console.log(cat);
      // Calls upon a function outside of this fetch function
      addNewAnimal(cat, "cats");
      updateSelection(cat, "cats");
    });
  });

// function to select ul of cats / dogs and create li to append to ul.
function addNewAnimal(randomObj, animalType) {
  const ul = document.querySelector(`#${animalType}`);
  const li = document.createElement("li");
  li.textContent = `${randomObj.name} (${randomObj.age})`;
  ul.append(li);
  const select = document.querySelector("#remove");
  const option = document.createElement("option");
  option.value = `${randomObj.id} ${animalType}`;
  option.textContent = `${randomObj.name} (${randomObj.age})`;
  select.append(option);
}

// Function to add all the pets onto the select form of update pet section
function updateSelection(randomObj, animalType) {
  const select = document.querySelector("#update");
  const option = document.createElement("option");
  option.value = `${randomObj.id} ${animalType}`;
  option.textContent = `${randomObj.name} (${randomObj.age})`;
  select.append(option);
  select.append(option);
}

// 2.5 Replace forms with an "Add a Pet" form for selecting whether to add a dog or cat)
/** Method:
 * 2.5A. Have one name, age, and submit input. Add additional select drop down menu to select either dog or cat.
 * 2.5B. Add all dog and cat regular and fetch functions into their own addDog function and addCat function.
 * 2.5C. Link select form to addDog and addCat first-class functions.
 * Done!
 *  */

// 3. Try writing PATCH and DELETE requests!

/** REMOVE Requests
 * Method:
 * 1. Make select form
 * 2. Have makeNewAnimal function append new option to current select element.
 * 3. Make an event listener that isolates the id of the animal to be removed
 *    and adds that to a constant. ID constant.
 * 4. Have a fetch function that deletes the entire object with the unique ID.
 *    Perhaps find which array position the object with said ID is located,
 *    and delete with array position.
 * 5. DELETE with http://localhost:3000/${animalType}/${IdNumber} in fetch url
 *    using string interpolation.
 */
document.querySelector("#remove-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const petValue = event.target.removePet.value.split(' ');
  const petId = petValue[0];
  const petType = petValue[1];
  // console.log("petValue for remove form", petValue);
  // console.log("petId for remove form", petId);
  // console.log("petType for Remove", petType);
  console.log(petId + " " + petType);
  fetch(`http://localhost:3000/${petType}/${petId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json)
    .then((pet) => {
      addNewAnimal(pet, petType);
    });
});

/**
 * PATCH REQUEST
 *
 * METHOD:
 * 1. The method is probably going to be the same as FETCH Request,
 *    but with each individual body value patched individually.
 * 2. Have the same drop down menu as remove a cat or dog select menu.
 * 3. Once they select the correct pet profile they want to update,
 *    have individual text box fields for each value of the pet
 *    they want to update. Name, age, isWellBehaved, isACat, favorite foods
 */
document.querySelector("#update-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const petValue = event.target.updatePet.value.split(' ');
  const petId = petValue[0];
  const petType = petValue[1];
  const petName = event.target.name.value.split(' ');
  console.log(petName);
  const petAge = event.target.age.value;
  const isWellBehaved = event.target.isWellBehaved.value;
  const catFavoriteFoods = event.target.food.value;
  fetch(`http://localhost:3000/${petType}/${petId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: petName,
      age: petAge,
      isWellBehaved: isWellBehaved,
      favoriteFoods: catFavoriteFoods,
    }),
  })
    .then((response) => response.json())
    .then((pet) => {
      // console.log(pet);
      addNewAnimal(pet, `${petType}`);
    });
    event.target[""]
});

/**
 *  EXTRAS:
 *  1. Make it so that the fetch and patch forms do not accept empty fields.
 *  2. Make it so that the update form does not show the cat fields for a dog profile and vice versa.
 *  3. Make an identical function of addNewAnimal, but for removeAnimal, so that the respective li fields of the respective animal is deleted from the DOM. 
 */

