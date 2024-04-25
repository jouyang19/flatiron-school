/*

Phase 1 -> DOM Manipulation
by Sakib Rasul
Updated March 13, 2024
Created September 12, 2023

Core Deliverables
1. Select a node.
2. Modify a node.
3. Remove a node.
4. Append a node.

Challenges
1. Append a list.
2. Replace a node.

*/

// ~ APIs, CRUD, `document`
// An Application Programming Interface is a "bridge" between us and a data source. 
// APIS let us (C)reate, (R)ead, (U)pdate, and (D)elete data in such external sources. 
document // An API for communication between JS (this file) and HTML(index.html).

// ~ Read/Select a node
// -> querySelector is a DOM method that lets us look up nodes by CSS **selector**.
// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.
console.log(document.querySelector("h1")); // read by tag name
console.log(document.querySelector("p#tomorrow")); // read by id (unique!)
console.log(document.querySelector("address")); // read by class (not unique)
console.log(document.querySelectorAll("p")); //read multiple
console.log(document.querySelector("#today").textContent); //reading the text of a text element

const p = document.querySelector("#today"); //saving a node to a variable

// ~ Update/Modify a node's attributes
// -> To modify an attribute, just use = after the attribute name in object dot notation
document.querySelector("#forever").textContent = "April 24, 2024";

// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.
document.querySelector("#forever").remove();

// ~ Create + Append a node
// -> createElement(), append()
const newH2 = document.createElement("h2");
/**  element.append(newElement); // parent.append(child); */
newH2.textContent = "In the near future...";
document.body.append(newH2);

// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and "The Shining",
//    the function should append to #dates something like:
//        Books
//        • The Shining
// example: displayList("Books", ["The Shining", "Eragon"]);
const books = "books";
const arrayOfBooks = ["The Shining", "Eragon", "The Abolition of Man"];
function displayList(name, array) {
    const newUL = document.createElement("ul");
    document.querySelector("div#dates").append(newUL);
    const nameH2 = document.createElement("h2");
    document.querySelector("h2").textContent = books;
    document.querySelector("ul").append(newH2);
    arrayOfBooks.forEach((array, i) => {
        const newLi = document.createElement("li");
        document.querySelector("ul").append(newLi);
        newLi.textContent = array;
    });
}
displayList(books, arrayOfBooks);
// 2. Replace the <strong> element with a newly created one.
document.querySelector(".address strong").remove();
const newEm = document.createElement("em");
document.querySelector(".address").append(newEm);
document.querySelector("em").textContent = "Sakib Rasul";


