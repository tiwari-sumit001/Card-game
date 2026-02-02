let playerName = "sumit"; 
let coins = 10; 
let health = 100; 
let score = 0; 
let hasKey = false; 
let room = 1; 
let alive = true; 
let win = false; 

console.log("Welcome to Treasure Hunt!"); 
console.log("Game Starting..."); 

while (room <= 6) { 
    console.log("Entering Room:", room); 

    if (room == 1) { 
        console.log("Room 1: You found 5 coins"); 
        coins += 5; 
        score += 10; 
    } 

    if (room == 2) { 
        console.log("Room 2: A trap damages you"); 
        health -= 30; 
        score += 5; 
        if (health <= 0) { 
            alive = false; 
        } 
    } 

    if (room == 3) { 
        console.log("Room 3: A merchant offers healing"); 
        if (coins >= 5) { 
            coins -= 5; 
            health += 20; 
            console.log("You bought healing"); 
        } else { 
            console.log("Not enough coins"); 
        } 
    } 

    if (room == 4) { 
        console.log("Room 4: You see a shiny key"); 
        hasKey = true; 
        score += 15; 
    } 

    if (room == 5) { 
        console.log("Room 5: Locked door"); 
        if (hasKey == true) { 
            console.log("You opened the door"); 
            score += 20; 
        } else { 
            console.log("Door is locked. You lose health"); 
            health -= 40; 
        } 
        if (health <= 0) { 
            alive = false; 
        } 
    } 

    if (room == 6) { 
        console.log("Room 6: Final Treasure Room"); 
        if (health > 0 && coins >= 5) { 
            console.log("You claim the treasure"); 
            score += 50; 
            win = true; 
        } else { 
            console.log("You can't claim the treasure"); 
        } 
    } 

    if (!alive) { 
        console.log("You died in room", room); 
        break; 
    } 

    room++; 
} 

console.log("Treasure Hunt — Game Summary"); 
console.log("Player Name:", playerName); 
console.log("Final Coins:", coins); 
console.log("Final Health:", health); 
console.log("Final Score:", score); 
console.log("Has Key:", hasKey); 

if (alive && win) { 
    console.log("Status: WIN"); 
} else { 
    console.log("Status: LOSE"); 
} 