// --- JavaScript.info: Variables Tasks ---
// Task 1: Declare two variables: admin and name
let name =  "John";
let admin = name;
alert(admin); // John

// Task 2: Giving the variable name, create a variable with the name of the user
let ourPlanetName = "Earth";
let currentUser = "John Doe";

// Task 3: Create a constant for the maximum number of visitors
const BIRTHDAY = "18.04.1982";
const age = someCode(BIRTHDAY);

//Arrow Functions Challenges

// Challenge 1: Return the square of a number
const squareNumber = number => number * number;

// Challenge 2: Return a greeting with a name
const greeting = name => `Hello, ${name}!`;

// Challenge 3: Return true if a number is even
const isEven = number => number % 2 === 0;

// Challenge 4: Add two numbers and divide the result by 2
const average = (num1, num2) => (num1 + num2) / 2;

// Challenge 5: Return the last character of a string
const lastCharacter = word => word[word.length - 1];

// --- Arrays Challenges ---
//Challenge 1: “Triple Trouble”
const numbers = [1,2,3,4,5];
const tripled = numbers.map(num => num * 3);
//Challenge 2: "Make It Shout"
const names = ["Ashy", "Spark", "Mischa", "Lucy"];
const shoutedNames = names.map(name => name.toUpperCase() + '!');
//Challenge 3: "Only the Cool Kids"
const ages = [12, 17, 22, 30, 15, 19];
const adults = ages.filter(age => age >= 18);
//Challenge 4: “The Grand Total”
const prices = [10.99, 5.49, 20.00, 3.50];
const totalCost = prices.reduce((total, price) => total + price, 0);

//--DESTRUCTURING--
//Challenge 1: "Loot the Array"
const bestSellers = [
  "Fourth Wing",
  "From Lukov with Love",
  "A Court of Thorns and Roses",
  "The Seven Husbands of Evelyn Hugo",
  "Bride"
];
const [first,second,...remaining] = bestSellers; 

//Challenge 2: "Hero Stats"
const character = {
  name: "Spark",
  class: "Rogue",
  level: 21,
  skills: ["Stealth", "Backstab", "Evade"],
  origin: "Shadowreach"
};
const {name, class: role, level, skills} = character;

//Challenge 3: "Greeter Function"
const user = {
  username: "Spark",
  title: "Shadow Dancer",
  level: 42
};

function greetUser({username, title, level}){
    console.log(`Welcome, ${title} ${username}! You are level ${level}.`);
}
greetUser(user);

//---Spread/Rest---
//Challenge 1: Cart Expansion
const cart = ["Apples", "Bananas"];
const newItems = ["Oranges", "Grapes"];
const updatedCart = [...cart, ...newItems];

//Challenge 2: Name Drop
function introduce(leader, ...followers){
    console.log(`${leader} is leading the team. ${followers.join(", ")} are following.`);
}

introduce("Ashy", "Spark", "Mischa", "Lucy");