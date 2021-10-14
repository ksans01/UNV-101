/*
// Array Methods
var i = 1;

// Syntax for array literal
// var <array-name> = [element0, element1, ...., elementN];

var stringArray = ["one", "two", "three"];
var numericArray = [1, 2, 3, 4];
var decimalArray = [1.1, 1.2, 1.3, 1.4];
var booleanArray = [true, false, false, true];
var mixedArray = [1, "two", "three', 4"];

// Syntax of an Array Constructor, uses NEW keyword
//var arrayName = new Array();
//var arrayName = new Array(Number_Length);
//var arrayName = new Array(element1, element2, ..., elementN);

var stringArray = new Array();
stringArray[0] = "one";
stringArray[1] = "two";
stringArray[2] = "three";

var numericArray = new Array(3);
numericArray[0] = 1;
numericArray[1] = 2;
numericArray[2] = 3;

var mixedArray = new Array(1, "two", 3, "four");


var stringArray = new Array();
stringArray["one"] = "one";
stringArray["two"] = "two";
stringArray["three"] = "three";


var stringArray = new Array("one", "two", "three", "four");
console.log(stringArray[0]);
console.log(stringArray[1]);
console.log(stringArray[2]);
console.log(stringArray[3]);

console.log("FOR LOOP DISPLAYING ARRAY ITEMS");
for (var i = 0; i < stringArray.length; i++)
{
    console.log(stringArray[i]);
}


// Syntax for forEach loop: array.forEach(callback, thisArg);


subjects.forEach(function(indexElement, index, array){
    console.log(indexElement + " is stored at index location: " + index + " within the array.");
});

// push() adds an element at the last position
// unshift() adds an element at the beginning position
// splice() adds an element at a specified position

subjects.push("Mathematics");
//subjects.push("Electronics" , "Computer Science", "Statistics", "History");
subjects.unshift("Electronics" , "Computer Science", "Statistics", "History");
subjects.forEach(function(fetch){
    console.log("After push() and unshift: " + fetch);
});
*/

//pop() deletes an element from the end of array
//shift() removes an element from the beginning of array

var subjects = ["Physics", "Chemistry", "Biology", "Aeronautics"];

console.log("POP and SHIFT methods");
console.log("array prior to POP method: ");
subjects.forEach(function(fetch){
    console.log(fetch);
});
console.log("Extracted element of an array: " + subjects.pop());
console.log("First element of the array: " + subjects.shift());
console.log("Array Snapshot after the POP and SHIFT methods: ");
subjects.forEach(function(fetch){
    console.log(fetch);
});

// .sort(): Sorts the elements of an array.
// .indexOf(): Search the array for an element and returns its first index.
// .slice(): Selects a part of an array, and returns the new array.
// .splice(): Adds/Removes elements from an array.
// .reverse(): Reverses the order of the elements in an array.
// .join(): Joins all elements of an array into a string.
// .includes(): Determines whether an array includes a certain element.
// .filter(): Creates a new array with all elements that pass the test in a testing function.
// .fill(): Fill the elements in an array with a static value.
// .concat(): Merge two or more arrays, and returns a new array.
// .every(): array.every(callback, thisArg)

var myValues = [150, 400, 450, 25,  375, 200];
function checkNum(value){
    return value > 100;
}
console.log("Result for .every() method: " + myValues.every(checkNum));