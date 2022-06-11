const choices = ["rock", "paper", "scissors"]
const winners = []


function game() {
 for(let i = 1; i <= 5; i++){
   playRound(i);
 }
 logWins()
}

function playRound(round) {
const playerSelection = playerChoice();
const computerSelection = computerChoice();
//console.log(computerSelection);
const winner = checkWinner(playerSelection, computerSelection);
//console.log(winner);
winners.push(winner)
logRound(playerSelection, computerSelection, winner,round)
};


function playerChoice () {
  // get input from player
  let input = prompt('Type Rock, Paper, or Scissors');
  while (input == null) {
    input = prompt("Type Rock, Paper, or Scissors")
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt("Type Rock, Paper, or Scissors needs to be exact, but capitilization doesn't matter");
    while (input == null) {
    input = prompt("Type Rock, Paper, or Scissors")
  
  }
 input = input.toLowerCase();
 check = validateInput(input);

}
return input;
}
function computerChoice () {
  // get random input from computer)
  return choices[Math.floor(Math.random() * choices.length)]
}

function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC === "scissors") || 
  (choiceP === "paper" && choiceC === "rock") || 
  (choiceP === "scissors" && choiceC === "paper")
  )
   {
    return "Player"
  } else {
    return "Computer"
  }
}

function logWins() {
let playerWins = winners.filter((item) => item == "Player").length;
let computerWins = winners.filter((item) => item == "Computer").length;
let ties = winners.filter((item) => item == "Tie").length;
console.log("Results: ");
console.log("Computer Wins: ",computerWins)
console.log("Player Wins: ", playerWins);
console.log("Ties: ", ties)
}

function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round: ", round);
  console.log("Player Choise: ", playerChoice);
  console.log("Computer Choise: ", computerChoice);
  console.log(winner, "Won the Round");
  console.log("------------------------")
}
