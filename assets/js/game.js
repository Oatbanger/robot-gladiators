var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log mltiple vaues at oncle like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Agent Smith";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' OR 'SKIP' to choose.");

    if (promptFight === "fight" || promptFight === "FIGHT") {
        // REMOVE ENERMY'S HEALTH BY SUBTRACTING THE AMOUNT SET IN THE playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
        );

         // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }

    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
    );


    
   
    }


    //Subtract the value of 'PlayerAttack' from the value of 'enemyHealth' and use that result to upate the value in the 'enemyHealth' variable
    

    // Log a resulting message to the console so we know that it worked.



 
};

fight();