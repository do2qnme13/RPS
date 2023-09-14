const arr = ["rock","paper","scissors"];
let computerScore = 0;
let playerScore = 0;


  
function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    computerScore = computerScore;
    playerScore = playerScore;
  }
  if (computerSelection === 'rock' && playerSelection === 'paper') {
    playerScore++;
  }
  if (computerSelection === 'rock' && playerSelection === 'scissors') {
    computerScore++;
  }
  if (computerSelection === 'scissors' && playerSelection === 'paper') {
    computerScore++;
  }
  if (computerSelection === 'scissors' && playerSelection === 'rock') {
    playerScore++;
  }
  if (computerSelection === 'paper' && playerSelection === 'scissors') {
    playerScore++;
  }
  if (computerSelection === 'paper' && playerSelection === 'rock') {
    computerScore++;
  }
}
function getcomputerSelection() {
  let num = Math.floor(Math.random()* arr.length);
  let computerSelection = arr[num];
  return computerSelection;
}

const game = () => {
  const playerSelection = prompt("Choose: ");
  const computerSelection = getcomputerSelection(); 
  playRound(playerSelection, computerSelection)
  console.log(playerSelection);
  console.log(computerSelection);
  console.log("-----------------")
}

for ( let i = 0 ; i < 5; i++) {
  if(i < 5) {
    game();
  }
}



if(playerScore > computerScore) {
  console.log("You Win!");
} else if (playerScore < computerScore) {
  console.log('You Lose!');
}else {
  console.log("It's a Draw!");
}
console.log(playerScore);
console.log(computerScore);
