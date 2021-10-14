const readlineSync = require("readline-sync");

const name = readlineSync.question("What is your name? ");

const welcomeMessage = `Welcome ${name}, to the Escape Room Game Simulation!`;
console.log(welcomeMessage);

var isAlive = true;
var hasKey = false;

while(isAlive == true){
    var menuOption = readlineSync.keyIn("Enter 1 to Put hand in hole, or Enter 2 to Find the key, or Enter 3 to Open the door: ", {limit: `$<1-3>`});
    if (menuOption == 1){
        console.log("Sorry, you put your hand in the hole! You are DEAD! Game Over");
        isAlive = false;
    }
    else if (menuOption == 2 && hasKey == false){
        console.log(`Great, ${name}, you just found the key, now proceed to the next menu option`);
        hasKey = true;
    }
    else if (menuOption == 2 && hasKey == true){
        console.log(`Stop wasting your time, ${name}, you have the key already. proceed to next menu option`);
    }
    else if (menuOption == 3 && hasKey == false){
        console.log(`${name}, the door is locked, you need the key to open it!`);
    }
    else if (menuOption == 3 && hasKey == true){
        console.log(`${name}, you opened the door and sucessfully escaped the escape room! Congratulations!`);
        isAlive = false;
    }
}