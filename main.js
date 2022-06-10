const choices = ["rock", "paper", "scissors"]

// play the game
// play five rounds
// consol based

function game() {
  playRound();
}

function playRound() {
const playerSelection = playerChoice();
const computerSelection = computerChoice();
};

function playerChoice () {
  // get input from player
  let input = prompt('Type Rock, Paper, or Scissors');
  while (input == null) {
    input = prompt("Type Rock, Paper, or Scissors")
  }
  input = input.toLowerCase();
  console.log(input)
}

function computerChoice () {
  // get random input from computer)
  return choices[Math.floor(Math.random() * choices.length)]
}

game();