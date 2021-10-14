// Section A
// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

function fiveAndGreaterOnly(arr)
{
    var result = arr.filter(function(num){
        if (num >= 5){
            return true;
        }
    });
    return result;
}

console.log("--- Array Filter #1 ---");
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

// Given an array of numbers, return a new array that only includes the even numbers.

function evensOnly(arr)
{
    var result = arr.filter(function(num){
        if (num % 2 == 0){
            return true;
        }
    });
    return result;
}

console.log("--- Array Filter #2 ---");
console.log(evensOnly([3, 6, 8, 2]));


// Section B
// Make an array of numbers that are doubles of the first array.

function doubleNumbers(arr)
{
    var result = arr.map(function(num)
    {
        return num * 2;
    });

    return result;
    
} 

console.log("---  Array Map #1 ---");
console.log(doubleNumbers([2, 5, 100]));  

// Take an array of numbers and make them strings.

function stringItUp(arr)
{
    var result = arr.map(function(num)
    {
        return num.toString();
    });
    return result
}

console.log("---  Array Map #2 ---");
console.log(stringItUp([2, 5, 100]));

// Capitalize first letter for each name within the array of names.

function capitalizeNames(arr)
{
    var result = arr.map(function(name)
    {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    });
    return result;
}

console.log("---  Array Map #3 ---"); 
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));



// Section C. Use the built-in .reduce() method on arrays to solve all of these problems (12 points): 
// Turn an array of numbers into a total of all the numbers

function total(arr)
{
    var result = arr.reduce(function(num1 , num2)
    {
        return num1 + num2;
    })
    return result;
}

console.log("---  Array Reduce #1 ---");
console.log(total([1, 2, 3]));

// Turn an array of numbers into a long string of all those numbers.

function stringConcat(arr) 
{
    var result = arr.reduce(function(a , b)
    {
        return a.toString() + b.toString();
    });
    return result;
}

console.log("---  Array Reduce #2 ---")
console.log(stringConcat([1, 2, 3]));   // Output: "123"

// Turn an array of voter objects into a count of how many people voted. 

function totalVoters(arr)
{
   var result = arr.reduce(function(a, b)
   {
       return a + b.voted;
   }, 0)
    return result;
}

var voters = [
    {name: 'Bob' , age: 30, voted: true},
    {name: 'Jake' , age: 32, voted: true},
    {name: 'Kate' , age: 25, voted: false},
    {name: 'Sam' , age: 20, voted: false},
    {name: 'Phil' , age: 21, voted: true},
    {name: 'Ed' , age: 55, voted: true},
    {name: 'Tami' , age: 54, voted: true},
    {name: 'Mary' , age: 31, voted: false},
    {name: 'Becky' , age: 43, voted: false},
    {name: 'Joey' , age: 41, voted: true},
    {name: 'Jeff' , age: 30, voted: true},
    {name: 'Zack' , age: 19, voted: false},
];
var count = 0
console.log("---  Array Reduce #3 ---")
console.log( totalVoters(voters) );  

// Section D: Use the built-in .sort() method on arrays to solve all of these problems.
// Sort an array from smallest number to largest.

function leastToGreatest(arr) {
    var result = arr.sort(function(a , b)
    {
        return a - b;
    });
    return result;
    
}

console.log("---  Array Sort #1 ---");
console.log( leastToGreatest([1, 3, 5, 2, 90, 20]) );  

// Sort an array from largest number to smallest.

function  greatestToLeast(arr){
   var result = arr.sort(function(a , b)
   {
       return b - a;
   });
   return result; 
}

console.log("---  Array Sort #2 ---")
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

// Sort an array from shortest string to longest. 

function lengthSort(arr){
    var result = arr.sort(function (a , b)
    {
        return a.length - b.length;
    });
    return result;
}

console.log("---  Array Sort #3 ---")
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));  // Output: ["by", "dog", "wolf", "eaten", "family"]