// normal array concat() method
let arr3 = [1,2,3];
let arr4 = [4,5];
  
arr3 = arr3.concat(arr4);
  
console.log(arr3); // [ 1, 2, 3, 4, 5 ]

// spread operator doing the concat job
let arr = [1,2,3];
let arr2 = [4,5];
  
arr = [...arr,...arr2];
console.log(arr); // [ 1, 2, 3, 4, 5 ]

// changed the original array
let arr5 = ['a','b','c'];
let arr6 = arr5;

arr6.push('d');

console.log(arr6);
console.log(arr5); // even affected the original array(arr)


// spread operator for copying 
let arr7= ['a','b','c'];
let arr8 = [...arr7]; //spread operator para no afectar el arreglo original
  
console.log(arr7); // [ 'a', 'b', 'c' ]
  
arr8.push('d'); //inserting an element at the end of arr2
  
console.log(arr8); // [ 'a', 'b', 'c', 'd' ]
console.log(arr7); // [ 'a', 'b', 'c' ]


// expand using spread operator   EXPADND
  
let arr9 = ['a','b'];
let arr10 = [...arr9,'c','d'];
  
console.log(arr10); // [ 'a', 'b', 'c', 'd' ]

// with spread WITH MATH
let array = [1,2,3,-1];
  
console.log(Math.min(...array)); //-1


// Example of spread operator with objects

const user1 = {
	name: 'Jen',
	age: 22
};

const clonedUser = { ...user1 };
console.log(clonedUser);

//Mergin 2 objects using spred operator
const user10 = {
	name: 'Jen',
	age: 22,
};

const user20 = {
	name: "Andrew",
	location: "Philadelphia"
};

const mergedUsers = {...user10, ...user20};
console.log(mergedUsers)
