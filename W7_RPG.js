const readlineSync = require("readline-sync");

const name = readlineSync.question("Who dares enter the arena of DOOM?");

readlineSync.question('Very well, ' + name + ', your chances of survival or slim, enter at your own risk. Press Enter to begin.');

const badGuys = ['Zombie', 'Demon', 'Graboid', 'Vampire', 'Werewolf'];
const treasure = ['Medkit', 'Security Armor', 'Berserk Pack', 'Health Potion'];
var prize = [];
let userHealth = 40;
const options = ['Walk', 'Exit', 'Print'];
let pickUp = treasure[Math.floor(Math.random() * treasure.length)];

function game(){
    const attackPower = Math.floor(Math.random() * (5 - 4 + 3) + 5);
    const badGuy = badGuys[Math.floor(Math.random() * badGuys.length)];
    let badGuysHealth = 40;
    const badGuysPower = Math.floor(Math.random() * (5 - 3 + 2) + 5);

    const index = readlineSync.keyInSelect(options, 'What will be your move?');

    if (options[index] == 'Exit'){
        console.log("You're smart to be scared...");
        return userHealth = 0;
    } else if (options[index] == 'Print'){
        console.log(name + ': \n' + userHealth + '\nTreasure: ' + pickUp);
    } else if (options[index] == 'Walk'){
        let key = Math.random();
        if (key <= .33){
            console.log('Walking.....');
        } else if (key > .33){
            console.log(badGuy + ' shows up');

            while(badGuysHealth > 0 && userHealth > 0){
                const user = readlineSync.question('What do you want to do? Enter "r" to run, "a" to attack, or "Print" to show stats: ');

                switch(user){
                    case 'Print': // Print user stats
                        console.log(name + ': \n' + userHealth + '\nTreasure: ' + pickUp + '\n' + badGuy + ': \n' + badGuysHealth);
                        break;
                    case 'r': // runaway
                        const run = Math.random();
                        if(run < .5) {
                            console.log('Before you can run away ' + badGuy + ' attacks you with: ' + badGuysPower);
                        }else {
                            console.log('You Ran Away!');                                                     
                            break;
                        }
                    case 'a': // attack the enemy
                        badGuysHealth -= attackPower;
                        console.log('You attacked ' + badGuy + ' with ' + attackPower + ' attack power');

                        userHealth -= badGuysPower;
                        console.log('Enemy just attacked you with: ' + badGuysPower + ' attack power');

                        if (badGuysHealth <= 0){
                            console.log('You killed ' + badGuy + '.\n' + badGuy + ' left: ' + pickUp);
                            let loot = Math.random();
                            if (loot <= .33){
                                prize.push(pickUp);
                            } else if(prize = 'Medkit' || 'Security Armor' || 'Berserk Pack' || 'Health Potion'){
                                userHealth = 40;
                            }
                            } else if(userHealth <= 0){
                                console.log(badGuy + ' has defeated you. You are dead. GAME OVER');
                            }
                    
                }
            }
        }
    }
}

while(userHealth > 0){
    game()
}