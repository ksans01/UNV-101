const readlineSync = require("readline-sync");

const name = readlineSync.question("Who dares enter the arena of DOOM? ");

readlineSync.question('Very well, ' + name + ', your chances of survival are slim, enter at your own risk. Press Enter to begin.');

const badGuys = ['Zombie', 'Demon', 'Graboid', 'Vampire', 'Werewolf'];
const treasure = ['Medkit', 'Security Armor', 'Berserk Pack', 'Health Potion'];
const weapons = ['Sword', 'Shield', 'Laser Gun', 'Nothing'];
var prize = [];
let userHealth = 40;
const options = ['Walk', 'Exit', 'Print'];
let pickUp = treasure[Math.floor(Math.random() * treasure.length)];
let weaponsChoice = weapons[weapons.length];

function game(){
    
    
    let badGuysHealth = 10;
    const badGuy = badGuys[Math.floor(Math.random() * badGuys.length)];    
    const index = readlineSync.keyInSelect(options, 'What will be your move?');
   

    if (options[index] == 'Exit'){
        console.log("You're smart to be scared...");
        return userHealth = 0;
    }else if (options[index] == 'Print'){
        console.log(name + ': ' + userHealth + '\nTreasure: ' + pickUp);
    }else if (options[index] == 'Walk'){
        //const weaponsChoice = readlineSync.keyInSelect(weapons, 'What weapon do you choose?')
        let key = Math.random();
        if (key <= .01){
            console.log('Walking.....');
        } else if (key > .013){
            console.log(badGuy + ' shows up');

            while(badGuysHealth > 0 && userHealth > 0){
                const user = readlineSync.question('What do you want to do? Enter "r" to run, "a" to attack, or "p" to show stats: ');

                switch(user){
                    case 'p': // Print user stats
                        console.log(name + ': ' + userHealth + '\nTreasure: ' + pickUp + '\n' + weaponsChoice + '\n' + badGuy + ': ' + badGuysHealth);
                        break;
                    case 'r': // runaway
                        const run = Math.random();
                        if(run < .5) {                            
                            const badGuysPower = Math.floor(Math.random() * (5 - 3 + 2) + 5);
                            console.log('Before you can run away ' + badGuy + ' attacks you with: ' + badGuysPower);
                        }else {
                            console.log('You Ran Away!');                                                     
                            break;
                        }
                    case 'a': // attack the enemy                        
                        const attackPower = Math.floor(Math.random() * 10);
                        const badGuysPower = Math.floor(Math.random() * 10);                        

                        badGuysHealth -= attackPower;
                        console.log('You attacked ' + badGuy + ' with ' + attackPower + ' attack power');

                        userHealth -= badGuysPower;
                        console.log('Enemy just attacked you with: ' + badGuysPower + ' attack power');

                        if (badGuysHealth <= 0){
                            
                            let loot = Math.random();
                            if (loot <= .99){
                                prize.push(pickUp);
                                console.log('You killed ' + badGuy + '.\n' + badGuy + ' left: ' + pickUp);  
                                userHealth = 50;                            
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