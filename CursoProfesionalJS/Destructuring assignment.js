const { Console } = require("console");

// we have an array with the name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

console.log(firstName); // John
console.log(surname);  // Smith

let [firstName1, surname1] = "John Smith".split(' ');
console.log(firstName1); // John
console.log(surname1);  // Smith


// Assign to anything at the left-side
// We can use any “assignables” at the left side.

// For instance, an object property:

let userA = {};
[userA.name, userA.surname] = "John Smith".split(' ');

console.log(userA.name); // John
console.log(userA.surname); // Smith

// Looping with .entries()
let userB = {
    name: "John",
    age: 30
  };
  
  // loop over keys-and-values
  for (let [key, value] of Object.entries(userB)) {
    console.log(`${key}:${value}`); // name:John, then age:30
  }

// THE  REST '...'
  let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is array of items, starting from the 3rd one
    console.log(rest[0]); // Consul
    console.log(rest[1]); // of the Roman Republic
    console.log(rest.length); // 2

// ADD default values
let [nameC = "Guest", surnameC = "Anonymous"] = ["Julius"];

console.log(nameC);    // Julius (from array)
console.log(surnameC); // Anonymous (default used)

// Object destructuring
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200

let options1 = {
  title1: "Menu",
  width1: 100,
  height1: 200
};

// { sourceProperty: targetVariable }
let {width1: w, height1: h, title1} = options1;

// width -> w
// height -> h
// title -> title

console.log(title1);  // Menu
console.log(w);      // 100
console.log(h);      // 200


let options2 = {
  title2: "Menu"
};

let {width2 = 100, height2 = 200, title2} = options2;

// console.log(title2);  // Menu
// console.log(width2);  // 100
// console.log(height2); // 200

// let options3 = {
//   title3: "Menu"
// };

// let {width3 = prompt("width?"), title3 = prompt("title?")} = options3;

// console.log(title3);  // Menu
// console.log(width3);  // (whatever the result of prompt is)

// The rest pattern “…”


let options4 = {
  title4: "Menu",
  height4: 200,
  width4: 100
};

// title = property named title
// rest = object with the rest of properties
let {title4, ...resto} = options4;

// now title="Menu", rest={height: 200, width: 100}
console.log(resto.height4);  // 200
console.log(resto.width4);   // 100

// Nested destructuring

let options5 = {
  size5: {
    width5: 100,
    height5: 200
  },
  items5: ["Cake", "Donut"],
  extra5: true
};

// destructuring assignment split in multiple lines for clarity
let {
  size5: { // put size here
    width5,
    height5
  },
  items5: [item1, item2], // assign items here
  title5 = "Menu" // not present in the object (default value is used)
} = options5;

console.log(title5);  // Menu
console.log(width5);  // 100
console.log(height5); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut

// Smart function parameters
// we pass object to function
let options6 = {
  title6: "My menu",
  items6: ["Item1", "Item2"]
};

// ...and it immediately expands it to variables
function showMenu({title6 = "Untitled", width6 = 200, height6 = 100, items6 = []}) {
  // title, items – taken from options,
  // width, height – defaults used
  console.log( `${title6} ${width6} ${height6}` ); // My Menu 200 100
  console.log( items6 ); // Item1, Item2
}

showMenu(options6);