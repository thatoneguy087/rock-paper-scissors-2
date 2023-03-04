//Function to get randomized computer selection of rock, paper, or scissors.
function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);
  return num === 0 ? 'rock' :
    num === 1 ? 'paper' : 
    'scissors'
}

//Function to play a round of rock, paper, scissors.
//Updates score and calls updateGame to change the DOM
function playRound (playerSelection, computerSelection) {
  let outcome;
  if(playerSelection === computerSelection) {
    outcome = 2;
  } else if((computerSelection === 'rock' && playerSelection === 'paper') || (computerSelection === 'paper' && playerSelection === 'scissors') || (computerSelection === 'scissors' && playerSelection === 'rock')) {
    playerScore++;
    outcome = 0;
  } else {
    computerScore++;
    outcome = 1;
  }

  updateGame(outcome, playerSelection, computerSelection);

}

//Function to declare a winner based on the round outcome and make change in the DOM
function updateGame(roundOutcome, playerChoice, computerChoice){

  const playerReplace = document.querySelector('#player-replace');
  const computerReplace = document.querySelector('#computer-replace');
  playerReplace.textContent = `You chose ${playerChoice}.`;
  computerReplace.textContent = `Computer chose ${computerChoice}.`

  const playReplace = document.querySelector('#play-replace');
  if(roundOutcome === 0) {
    playReplace.textContent =  `${playerChoice} beats ${computerChoice}!\nYou Win!`;
  } else if (roundOutcome === 1) {
    playReplace.textContent =  `${computerChoice} beats ${playerChoice}!\nComputer Wins!`;
  } else {
    playReplace.textContent =  'It\'s a tie!';
  }
  playReplace.classList.remove('hidden')

  const runningScore = document.querySelector('#current-score');
  runningScore.textContent = `${playerScore} - ${computerScore}`;
}

//Start screen
const startButton = document.querySelector('#start-button');

startButton.addEventListener('click', () => {
  const startScreen = document.querySelector('.start');
  startScreen.classList.add('hidden');
});

//Main game area
let playerScore = 0;
let computerScore = 0;

let btns = Array.from(document.querySelectorAll('.game-button'));
btns.forEach(btn => btn.addEventListener('click', () => {
  const playerChoice = btn.id;
  const computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
}));

