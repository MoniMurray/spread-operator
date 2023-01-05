/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(8);
console.log(arr2);
console.log(arr1);
arr1.pop(3);
console.log(arr2);
arr2.splice(2);
console.log(arr2);

// Copying an array
let arr3 = [1, 2, 3];
let arr4 = [...arr3, 9, 8];
console.log(arr3);
console.log(arr4);

// Copying an object

// Copying only part of an array/object
