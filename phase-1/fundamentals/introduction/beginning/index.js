/*

Phase 1 -> An Introduction to JavaScript
by Sakib Rasul
Updated March 12, 2024
Created August 21, 2023

Core Deliverables
1. Learn about variables, types, arrays, conditional statements,
   functions, and scope.
2. Complete the three challanges.

*/

// ~ Variables
// -> constants, variables, logging, annotations
// const, let

/**
 * Write documentation for what is after this js comment that applies elsewhere.
 */
const apples = 65;
// apples = 5; // Not allowed, because apples in constant.
let books = 5;

//books = 25; // reassignment allowed, because books is not constant.
books = 25;
console.log(books, apples);

// ~ Types
// -> undefined, null*, boolean, number, string

// ~ Objects
// -> definition, bracket/dot notation, stringify
// An object is a collection of values that represents something.

const animal = {
    species: "dog",
    name: "Barley",
    age: 6,
    isWellBehaved: false,
    type: "Labrador Retriever",
    color: "beige",
};

console.log(animal);
console.log(`${animal.name}` + " is " + animal['age'] + " years old!");
console.log(JSON.stringify(animal));
const animalStr = JSON.stringify(animal);
console.log(animalStr);

animal.weight = 150;


// ~ Arrays
// -> definition, access, modification
// An array is a list of ordered values without names (i.e. keys).
const prices = [ 43, 56, 32, 15, 60];
console.log(prices);
console.log(prices[2]); // to get the number 32 in console
console.log(JSON.stringify(prices));

prices[0] = 5;
console.log(prices);

// ~ Conditionals
// if, if-else, if-else-if-else, ternary
// if (boolean) { body of code that will run if true };
const isItRaining = true;

if (isItRaining) {
    console.log('Take an umbrella!');
} else {
    console.log('Take sunglasses and sunscreen just in case!');
};

const action = isItRaining ? "Take an umbrella!" : "Wear Sunscreen";

console.log(action);


// ~ Functions
// -> name, parameters, body, return, annotations
// -> methods, forEach, callback functions, anonymous functions

//Parameters
/** Annotations
 * 
 * @param {string} name The person to greet
 * @param {number} age The age of the person
 * @returns The number 5.
 */

function sayHello(name, age) {       
    console.log("Hello " + name + ", it's " + age + "!");    
    return 5;  
};

//Log is a method of console. Console is a representation of something.
console.log(sayHello("Jamal", 5) + 6); 

//Callback function
function square(number) {
    console.log(number * number);
}
const integers = [1, 2, 3, 4];
integers.forEach(square); //For Each is a method for the array of integers.

//Anonymous functions
integers.forEach((number) => { console.log(number * number); });

//OR

const sq = (number) => { console.log(number * number);};




// ~ Scope
// -> global, local, closures, function hoisting
const x = 5;

func(); // You can still invoke a function before the function is initialized. It is a weird quirk.

function func() {
    console.log(x);
}

// console.log(a); //Nope
function otherFunc() {
    const b = 2;
    //console.log(a); // nope, a is not in the same local scope
    function otherOtherFun () {
        console.log(b);
        const c = 3;
        return c;
    }
    // console.log(c); //Nope
    console.log(otherOtherFun() + 3 ); //okay!
}

// console.log(b); //Nope



// CHALLENGES
// Try these practice problems on your own to reinforce this lesson's material :)
// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.

// METHOD 1
const numbers = [25, 5, 30, 10, 200];

function sum (numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    };
    console.log("sum with for loop", total);
    return total;
};
sum(numbers);

// METHOD 2
const numbersForEach = [25, 5, 30, 10, 200];

function sumWithForEachMethod(numbers) {
    let total = 0;
    numbers.forEach((summation) => {total = total + summation});
    return console.log("sum with for each", total);
};

sumWithForEachMethod(numbersForEach);

// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.

//METHOD 1 with function and for loop
let nums = [5, 10, 50, 100, 500];

function double(numbers) {
    let newArray = [];
    for (let i = 0; i < numbers.length; i++) {
        newArray.push(numbers[i] * 2);
    };
    console.log("double with for loop", newArray);
    return nums = newArray;
};

double(nums);

console.log("original nums array doubled with for loop", nums);

// METHOD 2 with for each
const arrayOfNumbers = [2, 5, 7, 10, 15];

arrayOfNumbers.forEach((double, index) => {
    arrayOfNumbers[index] = double * 2
});

console.log("original array doubled with for Each", arrayOfNumbers);

//Teacher's Answer with function and for each method
const arrayOfNumbersFunctionForEach = [2, 5, 7, 10, 15];

function double(nums) {
    let index = 0; //Index is needed to make sure that each number of array is doubled. 
    // Otherwise it'll be the first number doubled three times.
    nums.forEach(num => {
        nums[index] = num * 2; 
        index++;
    });
}

double(arrayOfNumbersFunctionForEach);
console.log("Doubled with Function and For Each", arrayOfNumbersFunctionForEach);


// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.

// METHOD 1 with for loop.
const words = ["BARLEY", "RICE", "BASMATI", "JASMINE"];

function lowercase(words) {
    const wordsLowercase = [];
    for (let i = 0; i < words.length; i++) {
        wordsLowercase.push(words[i].toLowerCase());
    };
    console.log("lowercase", wordsLowercase);
    return wordsLowercase;
};

lowercase(words);
console.log("Original Array with for loop to lowercase", words);

//METHOD 2 with For Each.
const wordsArray = ["MOTHER", "FATHER", "SISTER", "BROTHER", "SPOUSE", "SON", "DAUGHTER", "GRANDSON"];
const newArray = [];

wordsArray.forEach((word, index) => {
    newArray[index] = word.toLowerCase();
}
);

console.log("original wordsArray", wordsArray);
console.log("new newArray modified to lowercase", newArray);

//Method 3 with map method.
const wordsArrayMap = ["MOTHER", "FATHER", "SISTER", "BROTHER", "SPOUSE", "SON", "DAUGHTER", "GRANDSON"];

const familyArrayLowercase = wordsArrayMap.map(word => word.toLowerCase());

console.log("new words array with map", familyArrayLowercase);


//Teacher's Answer

const family = ["MOTHER", "FATHER", "SISTER", "BROTHER", "SPOUSE", "SON", "DAUGHTER", "GRANDSON"];

function lowercase(words) {
    return words.map(word => {
        return word.toLowerCase();
    })
}

console.log("teacher's answer to word lowercase", lowercase(family));


