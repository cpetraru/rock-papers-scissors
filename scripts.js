// ################# RULES #################

// Rock paper scissors is a game played with hands. It involves 2 players and they have to choose one of the three options:
// rock, paper or scissors. Depending on the option they chose, one of the two wins.
// The rules are simple:
// rock beats scissors, paper beats rock, scissors beats paper
// if both players chose the same option, it is a draw and the round is played again


// ################# ALGORITHM #################

// create an array with the three options: rock, paper, scissors
// create a function to assign the computer's option from the list of options. Do this by using math.random * 3 and then use it as an index. Then return the choice

// Based on the math.random * 3 result, select the corresponding index from the array
// create a playGame function that takes two parameters: playerChoice and computerChoice
// store the playerChoice via an alert
// create an if else if statement to compare the user's answer to the computer's guess
// 1) if the player's guess matches the computer's guess, it is a draw and ask the user to input another guess via another prompt()
// 2) if the player chooses rock and computer chooses paper, the computer wins
// 3) if the player chooses rock and the computer chooses scissors, the player wins
// 4) if the player chooses paper and the computer chooses rock, the player wins
// 5) if the player chooses paper and the computer chooses scissors, the computer wins
// 6) if the player chooses scissors and the computer chooses rock, the computer wins
// 7) if the player chooses scissors and the computer chooses paper, the player wins


// ################# SOLUTION #################

// create an array with the three options: rock, paper, scissors
const choices = ['rock', 'paper', 'scissors']

// create a function to assign the computer's option from the list of options. Do this by using math.random * 3 and then use it as an index. Then return the choice
function getComputerChoice() {
    // using math.random * 3
    const computerChoiceIndex = Math.floor((Math.random() * 3));
    // use it as an index
    const computerChoice = choices[computerChoiceIndex];
    // return the choice
    return computerChoice;
};

// create a playGame function that takes two parameters: playerChoice and computerChoice
function playGame(playerChoice, computerChoice) {
    // store the playerChoice via an alert
    playerChoice = prompt("Please write down your choice between: rock, paper, scissors");
    // store the computerChoice using the getComputerChoice()
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    // create an if else if statement to compare the user's answer to the computer's guess
    // if the player's guess matches the computer's guess, it is a draw and ask the user to input another guess via another prompt()
    if (playerChoice == computerChoice) {
        alert(`It is a draw. You both chose ${playerChoice}!`);
        playGame();
    }
    // if the player chooses rock and computer chooses paper, the computer wins
    else if (playerChoice == 'rock' && computerChoice == 'paper') {
        console.log(`Computer wins because ${computerChoice} beats ${playerChoice}`);
    }
    // if the player chooses rock and the computer chooses scissors, the player wins
    else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        console.log(`Player wins because ${playerChoice} beats ${computerChoice}`);
    }
    // if the player chooses paper and the computer chooses rock, the player wins
    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        console.log(`Player wins because ${playerChoice} beats ${computerChoice}`);
    }
    // 5) if the player chooses paper and the computer chooses scissors, the computer wins
    else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        console.log(`Computer wins because ${computerChoice} beats ${playerChoice}`);
    }
    // 6) if the player chooses scissors and the computer chooses rock, the computer wins
    else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        console.log(`Computer wins because ${computerChoice} beats ${playerChoice}`);
    }
    // 7) if the player chooses scissors and the computer chooses paper, the player wins
    else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        console.log(`Player wins because ${playerChoice} beats ${computerChoice}`);
    }

}
