var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1. Remove the last item from the vegetables array.

vegetables.pop();
console.log("vegetables: ", vegetables);

// 2. Remove the last item from the fruit array.

fruit.shift();
console.log("Fruit: ", fruit);

// 3. Find the index of "orange."

var fruitIndex = fruit.indexOf("orange");
console.log("Fruit index is: ", fruitIndex);

// 4. Add that number to the end of the fruit array.

fruit.push(fruitIndex);
console.log("Fruit: ", fruit);

// 5. Use the length property to find the length of the vegetable array.

var vegetablesLength = vegetables.length;
console.log("Vegetables length is: ", vegetablesLength);

// 6. Add that number to the end of the vegetable array.

vegetables.push(vegetablesLength);
console.log("Vegetables: ", vegetables);

// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".

var food = fruit.concat(vegetables);
console.log("Food: ", food);

// 8. Remove 2 elements from your new array starting at index 4 with one method.

food.splice(4, 2);
console.log("Food: ", food);

// 9. Reverse your array.

food.reverse();
console.log("Food: ", food);

// 10. Turn the array into a string and return it.

function foodAll(a){
    return a.join();
}

console.log(foodAll(food));