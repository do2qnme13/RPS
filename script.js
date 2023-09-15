const arr = ["rock","paper","scissors"];
const buttons = document.querySelectorAll('button');
const playerScoreText = document.querySelector('.playerScoreText');
const computerScoreText = document.querySelector('.computerScoreText');
const roundText = document.querySelector('.roundText');
const resultText = document.querySelector('.resultText');

let computerScore = 0;
let playerScore = 0;
let playerSelection;
let computerSelection;
let rounds = 0;



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
  let num = Math.floor(Math.random()* arr.length) + 1;
  let computerSelection = arr[num];
  return computerSelection;
}

function game(e){
  if (rounds < 5) {
    playerSelection = e.target.id;
    computerSelection = getcomputerSelection(); 
    playRound(playerSelection, computerSelection)
    rounds++;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    roundText.textContent = rounds;

  } else if(rounds = 5) {
    result();
  }
}


function result() {
  if(playerScore > computerScore) {
    resultText.textContent = "You Win!";
  } else if (playerScore < computerScore) {
    resultText.textContent ='You Lose!';
  }else {
    resultText.textContent = "It's a Draw!";
  }
  
}
buttons.forEach(button => button.addEventListener('click', game)) 
