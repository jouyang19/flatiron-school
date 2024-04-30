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
    });
  });

document.querySelector("#dog-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const dogName = event.target.name.value;
  const dogAge = event.target.age.value;
  console.log(dogName + dogAge);
  fetch("http://localhost:3000/dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: dogName,
      age: dogAge,
      isWellBehaved: true,
    }),
  })
    .then((response) => response.json())
    .then((newDog) => {
      console.log(newDog);
      addNewAnimal(newDog, "dogs");
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
    });
  });

// select ul of cats and create li to append to ul.
function addNewAnimal(randomObj, animalType) {
  const ul = document.querySelector(`#${animalType}`);
  const li = document.createElement("li");
  li.textContent = `${randomObj.name} (${randomObj.age})`;
  ul.append(li);
}

// Listen to the add cat form.
document.querySelector("#cat-form").addEventListener("submit", (event) => {
  event.preventDefault();
  // targets in event the name="name" of the dog-form name and age value.
  const catName = event.target.name.value;
  const catAge = event.target.age.value;
  // to double check in console logging the values of the constants.
  console.log(catName + " " + catAge);
  fetch("http://localhost:3000/cats", {
    method: "POST",
    // Content-type asks for the format type the client wants or accepts.
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    // the body and JSON.stringify prepares the newCat and formats into JSON.
    body: JSON.stringify({
      name: catName,
      age: catAge,
      isACat: true,
      favoriteFoods: [],
    }),
  })
    // This part of the code is dedicated to appending the newCat to HTML.
    .then((response) => response.json())
    .then((newCat) => {
      console.log(newCat);
      addNewAnimal(newCat, "cats");
    });
});

// 2.5 Replace forms with an "Add a Pet" form for selecting whether to add a dog or cat)
/** Method:
 * 2.5A. Have one name, age, and submit input. Add additional select drop down menu to select either dog or cat.
 * 2.5B. Add all dog and cat regular and fetch functions into their own addDog function and addCat function.
 * 2.5C. Link select form to addDog and addCat first-class functions.
 *  */

// 3. Try writing PATCH and DELETE requests!
