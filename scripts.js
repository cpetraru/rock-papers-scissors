// ################# SOLUTION #################

// create an array with the three options: rock, paper, scissors
const choices = ["Rock", "Paper", "Scissors"];
// select the playerButtons nodelist
const playerButtons = document.querySelectorAll(".btn");
// select the player and computer scores
const currentPlayerScore = document.querySelector("#playerScore");
const currentComputerScore = document.querySelector("#computerScore");

// select the draw div
const resultDiv = document.querySelector(".result");
let resultText = document.createElement("p");
let isDraw = false;
let isDone = false;

// create playerScore and computerScore variables that hold the scores for both players. Initialize them with 0
let playerScore = 0;
let computerScore = 0;
// create a rounds and playerChoice variable. Initialize rounds with 0
// let rounds = 0;
let playerChoice;

// create a for loop to store the playerChoice and run the playRound function when a button is played
for (let i = 0; i < playerButtons.length; i++) {
  playerButtons[i].addEventListener("click", () => {
    playerChoice = playerButtons[i].innerText;
    isDraw = false;
    setDraw();
    playRound(playerChoice);
    if (playerScore === 5 || computerScore === 5) {
      decideWinner();
      disableButtons();
    }
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
  // store the computerChoice using the getComputerChoice()
  computerChoice = getComputerChoice();
  // create an if else if statement to compare the user's answer to the computer's guess
  // if the player's guess matches the computer's guess, it is a draw and ask the user to input another guess via another prompt()
  if (playerChoice == computerChoice) {
    getComputerChoice(computerChoice);
    console.log("Draw");
    isDraw = true;
    setDraw();
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

// create computerScores() function that takes two arguments: the player's choice and computer's choice. Take the arguments and console.log a message. Also increment the score.
function computerScores(computerChoice, playerChoice) {
  showComputerChoice(computerChoice);
  console.log(`Computer wins because ${computerChoice} beats ${playerChoice}.`);
  // When computer wins, increment the computerScore by 1
  computerScore++;
  // display the score
  currentComputerScore.textContent = computerScore;
  // show the score
  showScore();
}

// create playerScores() function that takes two arguments: the player's choice and computer's choice. Take the arguments and console.log a message. Also increment the score.
function playerScores(playerChoice, computerChoice) {
  showComputerChoice(computerChoice);
  console.log(`Player wins because ${playerChoice} beats ${computerChoice}`);
  // When player wins, increment the playerScore by 1
  playerScore++;
  // display the score
  currentPlayerScore.textContent = playerScore;
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
  if (playerScore > computerScore) {
    resultText.innerText =
      "You win! Your score is higher than the computer's score.";
    resultDiv.appendChild(resultText);
  } else {
    resultText.innerText =
      "You lose! Your score is lower than the computer's score :(";
    resultDiv.appendChild(resultText);
  }
}

function setDraw() {
  if (isDraw === true) {
    resultText.innerText = `It's a draw. You both chose ${playerChoice}`;
    resultDiv.appendChild(resultText);
  } else if (isDraw === false) {
    resultText.innerText = "";
    resultDiv.appendChild(resultText);
  }
}

function disableButtons() {
  playerButtons.forEach((btn) => {
    btn.disabled = true;
  });
}
