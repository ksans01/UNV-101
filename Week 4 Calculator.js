const readlineSync = require("readline-sync");

var firstNum = readlineSync.questionInt("Please enter your first number: ");

var secondNumb = readlineSync.questionInt("Please enter your second number: ");

var userOperation = readlineSync.question("Please enter the operation to perform (add, sub, mul, div): ");

function add(a, b){
    return (a + b);
}
function sub(a, b){
    return (a - b);
}
function mul(a, b){
    return (a * b);
}
function div(a, b){
    return (a / b);
}

function calculator(a, b, operation){
    if (operation == "add"){
        console.log("Addition of two numbers: " + add(a , b));
    } else if (operation == "sub"){
        console.log("Subtraction of two numbers: " + sub(a , b));
    } else if (operation == "mul"){
        console.log("Multiply two numbers: " + mul(a , b));
    } else if (operation == "div"){
        console.log("Divide two numbers: " + div(a , b));
    } else {
        console.log("Invalid Entry");
    }
}

calculator(firstNum, secondNumb, userOperation);