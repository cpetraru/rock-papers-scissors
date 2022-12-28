// ################# RULES #################

// Rock paper scissors is a game played with hands. It involves 2 players and they have to choose one of the three options:
// rock, paper or scissors. Depending on the option they choose, one of the two wins.
// The rules are simple:
// rock beats scissors, paper beats rock, scissors beats paper
// if both players chose the same option, it is a draw and the round is played again

// ################# ALGORITHM #################

// create an array with the three options: rock, paper, scissors
// create playerScore and computerScore variables that hold the scores for both players. Initialize them with 0
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
// create computerScores() function that takes two parameters: the player's choice and computer's choice. Take the arguments and console.log a message. Also increment the score.
// create playerScores() function that takes two parameters: the player's choice and computer's choice. Take the arguments and console.log a message. Also increment the score.
// create showComputerChoice() function that takes one parameter: the computer choice and display it into console. The function is used to show the computer's choice in the previous functions.
// When computer wins, increment the computerScore by 1
// When player wins, increment the playerScore by 1
// create a function showScore() that shows the score of each player.
// Create a game() function that nests a for loop.
// Use the for loop to play 5 rounds. Once the round reaches an end, compare the scores. Who ever has the bigger score is delared the winner

// ################# SOLUTION #################

// create an array with the three options: rock, paper, scissors
const choices = ["Rock", "Paper", "Scissors"];
const playerButtons = document.querySelectorAll(".btn");

// create playerScore and computerScore variables that hold the scores for both players. Initialize them with 0
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let playerChoice;

for (let i = 0; i < playerButtons.length; i++) {
  playerButtons[i].addEventListener("click", () => {
    playerChoice = playerButtons[i].innerText;
    console.log(playerButtons[i].innerText);
    playRound(playerChoice);
  });
}

// create a function to assign the computer's option from the list of options. Do this by using math.random * 3 and then use it as an index. Then return the choice
function getComputerChoice() {
  // using math.random * 3
  const computerChoiceIndex = Math.floor(Math.random() * 3);
  // use it as an index
  const computerChoice = choices[computerChoiceIndex];
  // return the choice
  return computerChoice;
}

// create a playGame function that takes two parameters: playerChoice and computerChoice
function playRound(playerChoice, computerChoice) {
  //   // store the playerChoice via an alert
  //   playerChoice = prompt(
  //     "Please write down your choice between: rock, paper, scissors"
  //   );
  // store the computerChoice using the getComputerChoice()
  computerChoice = getComputerChoice();
  // create an if else if statement to compare the user's answer to the computer's guess
  // if the player's guess matches the computer's guess, it is a draw and ask the user to input another guess via another prompt()
  if (playerChoice == computerChoice) {
    getComputerChoice(computerChoice);
    alert(`It is a draw. You both chose ${playerChoice}!`);
    rounds++;
    playRound();
  }
  // if the player chooses rock and computer chooses paper, the computer wins
  else if (playerChoice == "Rock" && computerChoice == "Paper") {
    computerScores(computerChoice, playerChoice);
  }
  // if the player chooses rock and the computer chooses scissors, the player wins
  else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    playerScores(playerChoice, computerChoice);
  }
  // if the player chooses paper and the computer chooses rock, the player wins
  else if (playerChoice == "Paper" && computerChoice == "Rock") {
    playerScores(playerChoice, computerChoice);
  }
  // 5) if the player chooses paper and the computer chooses scissors, the computer wins
  else if (playerChoice == "Paper" && computerChoice == "Scissors") {
    computerScores(computerChoice, playerChoice);
  }
  // 6) if the player chooses scissors and the computer chooses rock, the computer wins
  else if (playerChoice == "Scissors" && computerChoice == "Rock") {
    computerScores(computerChoice, playerChoice);
  }
  // 7) if the player chooses scissors and the computer chooses paper, the player wins
  else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    playerScores(playerChoice, computerChoice);
  }
}

// Create a game() function that nests a for loop.
function game() {
  //   for (let i = 0; i <= 5; i++) {
  //     if (rounds < 5) {
  //       rounds++;
  //       playRound();
  //     } else if (rounds == 5) {
  //       decideWinner();
  //     }
  //   }
  playRound();
}

// create computerScores() function that takes two arguments: the player's choice and computer's choice. Take the arguments and console.log a message. Also increment the score.
function computerScores(computerChoice, playerChoice) {
  showComputerChoice(computerChoice);
  console.log(`Computer wins because ${computerChoice} beats ${playerChoice}.`);
  // When computer wins, increment the computerScore by 1
  computerScore++;
  // show the score
  showScore();
}

// create playerScores() function that takes two arguments: the player's choice and computer's choice. Take the arguments and console.log a message. Also increment the score.
function playerScores(playerChoice, computerChoice) {
  showComputerChoice(computerChoice);
  console.log(`Player wins because ${playerChoice} beats ${computerChoice}`);
  // When player wins, increment the playerScore by 1
  playerScore++;
  // show the score
  showScore();
}

// create showComputerChoice() function that takes one argument: the computer choice and display it into console. The function is used to show the computer's choice in the previous functions.
function showComputerChoice(computerChoice) {
  console.log(`The computer chose ${computerChoice}`);
}

// create a function showScore() that shows the score of each player.
function showScore() {
  console.log(`Your score: ${playerScore} \n Computer score: ${computerScore}`);
}

function decideWinner() {
  if (playerScore === computerScore) {
    console.log(`It's a tie!`);
  } else if (playerScore > computerScore) {
    console.log(`You win! Your score is higher than the computer's score.`);
  } else {
    console.log(`You lose! Your score is lower than the computer's score :()`);
  }
}

// game();
