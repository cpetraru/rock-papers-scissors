################# RULES #################

Rock paper scissors is a game played with hands. It involves 2 players and they have to choose one of the three options:
rock, paper or scissors. Depending on the option they choose, one of the two wins.
The rules are simple:
rock beats scissors, paper beats rock, scissors beats paper
if both players chose the same option, it is a draw and the round is played again

################# ALGORITHM #################

create an array with the three options: rock, paper, scissors
create playerScore and computerScore variables that hold the scores for both players. Initialize them with 0
create a function to assign the computer's option from the list of options. Do this by using math.random _ 3 and then use it as an index. Then return the choice
Based on the math.random _ 3 result, select the corresponding index from the array
create a playGame function that takes two parameters: playerChoice and computerChoice
store the playerChoice via an alert
create an if else if statement to compare the user's answer to the computer's guess

1. if the player's guess matches the computer's guess, it is a draw and ask the user to input another guess via another prompt()
2. if the player chooses rock and computer chooses paper, the computer wins
3. if the player chooses rock and the computer chooses scissors, the player wins
4. if the player chooses paper and the computer chooses rock, the player wins
5. if the player chooses paper and the computer chooses scissors, the computer wins
6. if the player chooses scissors and the computer chooses rock, the computer wins
7. if the player chooses scissors and the computer chooses paper, the player wins
   create computerScores() function that takes two parameters: the player's choice and computer's choice. Take the arguments and console.log a message. Also increment the score.
   create playerScores() function that takes two parameters: the player's choice and computer's choice. Take the arguments and console.log a message. Also increment the score.
   create showComputerChoice() function that takes one parameter: the computer choice and display it into console. The function is used to show the computer's choice in the previous functions.
   When computer wins, increment the computerScore by 1
   When player wins, increment the playerScore by 1
   create a function showScore() that shows the score of each player.
   Create a game() function that nests a for loop.
   Use the for loop to play 5 rounds. Once the round reaches an end, compare the scores. Who ever has the bigger score is delared the winner
