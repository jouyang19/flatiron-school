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

document.querySelector("#form").addEventListener("submit", (event) => {
  event.preventDefault();
  const petName = event.target.name.value;
  const petAge = event.target.age.value;
  const petType = event.target.pet.value;
  console.log("name=" + petName + " age=" + petAge + " type=" + petType);
  fetch(`http://localhost:3000/${petType}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: petName,
      age: petAge,
      isWellBehaved: true,
    }),
  })
    .then((response) => response.json())
    .then((newPet) => {
      console.log(newPet);
      addNewAnimal(newPet, petType);
      updateSelection(newPet, petType);
    });
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
      console.log(cat);
      // Calls upon a function outside of this fetch function
      addNewAnimal(cat, "cats");
      updateSelection(cat, "cats");
    });
  });

// select ul of cats or dogs and create li to append to ul.
function addNewAnimal(randomObj, animalType) {
  const ul = document.querySelector(`#${animalType}`);
  const li = document.createElement("li");
  li.textContent = `${randomObj.name} (${randomObj.age})`;
  ul.append(li);
  const select = document.querySelector("#remove");
  const option = document.createElement("option");
  option.value = `${randomObj.id}`;
  option.id = `${animalType}`;
  option.textContent = `${randomObj.name} (${randomObj.age})`;
  select.append(option);
}

function updateSelection(randomObj, animalType) {
  const select = document.querySelector("#update");
  const option = document.createElement("option");
  option.value = `${randomObj.id}`;
  option.id = `${animalType}`;
  option.textContent = `${randomObj.name} (${randomObj.age})`;
  select.append(option);
  console.log(option);
  select.append(option);
}

// Listen to the add cat form.
// document.querySelector("#cat-form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   // targets in event the name="name" of the dog-form name and age value.
//   const catName = event.target.name.value;
//   const catAge = event.target.age.value;
//   // to double check in console logging the values of the constants.
//   console.log(catName + " " + catAge);
//   fetch("http://localhost:3000/cats", {
//     method: "POST",
//     // Content-type asks for the format type the client wants or accepts.
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     // the body and JSON.stringify prepares the newCat and formats into JSON.
//     body: JSON.stringify({
//       name: catName,
//       age: catAge,
//       isACat: true,
//       favoriteFoods: [],
//     }),
//   })
//     // This part of the code is dedicated to appending the newCat to HTML.
//     .then((response) => response.json())
//     .then((newCat) => {
//       console.log(newCat);
//       addNewAnimal(newCat, "cats");
//     });
// });

// 2.5 Replace forms with an "Add a Pet" form for selecting whether to add a dog or cat)
/** Method:
 * 2.5A. Have one name, age, and submit input. Add additional select drop down menu to select either dog or cat.
 * 2.5B. Add all dog and cat regular and fetch functions into their own addDog function and addCat function.
 * 2.5C. Link select form to addDog and addCat first-class functions.
 * Done!
 *  */

// 3. Try writing PATCH and DELETE requests!

/**
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
  const petId = event.target.removePet.value;
  const petType = event.target.removePet.querySelector("option").id;
  console.log(petId + " " + petType);
  fetch(`http://localhost:3000/${petType}/${petId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
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
  const petId = event.target.removePet.value;
  const petType = event.target.removePet.querySelector("option").id;
  const petName = event.target.name.value;
  const petAge = event.target.age.value;
  const isWellBehaved = event.target.isWellBehaved.value;
  const catFavoriteFoods = event.target.food.value;
  console.log(
    petId +
      " " +
      petType +
      " " +
      petName +
      " " +
      petAge +
      " " +
      isWellBehaved +
      " " +
      catFavoriteFoods
  );
  if (petType === "dogs") {
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
      }),
    })
      .then((response) => response.json())
      .then((pet) => {
        console.log(pet);
        addNewAnimal(pet, `${petType}`);
      });
  } else if (petType === "cats") {
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
        isACat: true,
        favoriteFoods: catFavoriteFoods,
      }),
    })
      .then((response) => response.json())
      .then((pet) => {
        console.log(pet);
        addNewAnimal(pet, `${petType}`);
      });
  }
});

// FOR REFERENCE ONLY!
//     body: JSON.stringify({
//       name: catName,
//       age: catAge,
//       isACat: true,
//       favoriteFoods: [],
//     }),
//   })
//     // This part of the code is dedicated to appending the newCat to HTML.
//     .then((response) => response.json())
//     .then((newCat) => {
//       console.log(newCat);
//       addNewAnimal(newCat, "cats");
//     });
