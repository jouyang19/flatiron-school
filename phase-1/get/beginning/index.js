/*

Phase 1 -> GET
Updated April 25, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/

// A synchronous request to https://dog-api.kinduff.com/api/facts?number=1.

fetch("https://dog-api.kinduff.com/api/facts?number=1")
  .then((response) => response.json())
  .then((dog) => {
    console.log(dog.facts);
    const span = document.querySelector("#dog");
    span.textContent = dog.facts[0];
  })
  .catch((error) => {
    console.log(error);
  });

// A synchronous request to https://anapioficeandfire.com/api/books.
// Convert the JSON response into JS.
fetch("https://anapioficeandfire.com/api/books")
  .then((response) => response.json()) // Or write (response) => {return response.json()}
  //
  .then((books) => {
    console.log(books);
    console.log(books[0]);

    // Using for loop to loop through the Array and get each book's name or title.
    // for (i = 0; i < books.length; i++) {
    // const newLi = document.createElement("li");
    // document.querySelector("#got").append(newLi);
    // newLi.textContent = books[i].name;
    // }

    // Using Array method for Each to get the name of each book.
    const got = document.querySelector("#got");
    books.forEach((book) => {
      const newLi = document.createElement("li");

      got.append(newLi);
      newLi.textContent = `${book.name} (${book.numberOfPages})`;
    });
  })
  //Log any errors that occur.
  .catch((error) => {
    console.log(error);
  });

// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"
async function getPokemon(name) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
  const pokemon = await response.json();
  console.log(pokemon);
  document.querySelector("#pokemon").textContent =
    pokemon.name[0].toUpperCase() +
    pokemon.name.slice(1) +
    " (" +
    pokemon.id +
    ")";
}

getPokemon("charizard");

// ~ Challenge: Make a GET request to an API of your choice!
/**
 * User Stories
 * Objectives
 * 1. Make a dictionary word search that returns the definition and the word itself.
 * 2. The response to the submission comes from the Free Dictionary API.
 * 3. Make submission box and submit button with form.
 * 4. Add EventListener(s) for the submit button and keydown press for "Enter".
 * 5. Fetch word from dictionary.
 * 6. Create and append new heading element for name of word.
 * 7. Create and append paragraph element for definition of word.
 * 8. [Extras] Create and append elements for other definitions, part of speech, synonyms, antonyms, etc.
 */

// Event Listener for submit button
const headingWord = document.createElement("h3");
document.querySelector("#definition").append(headingWord);
const pDefinition = document.createElement("p");
document.querySelector("#definition").append(pDefinition);
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  // Prevent directing to a non-existent remote server.
  event.preventDefault();

  // Make new constant variable to contain the value of the search box input.
  const newWord = event.target["word-box"].value;

  // Check if the value is empty. If it is, exit function.
  if (newWord.trim() === "") {
    return;
  }

  // Pass new variable into the defineWord() function.
  defineWord(newWord.toLowerCase());

  // Clear the text box after successful creation
  event.target["word-box"].value = "";
});

// Free Dictionary Word Search API fetch function
async function defineWord(dict) {
  const response = await fetch(
    "https://api.dictionaryapi.dev/api/v2/entries/en/" + dict
  );
  const word = await response.json();
  console.log(word);

  // Checks if a previous word and definition exists, and if so, delete it.

  // Creates new heading, puts the word into the heading,
  // and appends it into the ul#definition.
  headingWord.textContent = word[0].word;

  // Create new element "p" for the word definition
  pDefinition.textContent = word[0].meanings[0].definitions[0].definition;
}
