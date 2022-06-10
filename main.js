const choices = ["rock", "paper", "scissors"]



function game() {
 for(let i = 0; i <= 5; i++){
   playRound();
 }
}

function playRound() {
const playerSelection = playerChoice();
const computerSelection = computerChoice();
console.log(computerSelection);
const winner = checkWinner(playerSelection, computerSelection);
console.log(winner);
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

game();