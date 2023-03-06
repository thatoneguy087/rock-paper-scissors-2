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

  playerReplace.classList.remove('waiting');
  computerReplace.classList.remove('waiting');
  playerReplace.textContent = `You chose ${playerChoice}.`;
  computerReplace.textContent = `Computer chose ${computerChoice}.`
  if(roundOutcome === 0) {
    playReplace.textContent =  `${playerChoice} beats ${computerChoice}!\nYou Win!`;
    playImage.textContent = '😄';
  } else if (roundOutcome === 1) {
    playReplace.textContent =  `${computerChoice} beats ${playerChoice}!\nComputer Wins!`;
    playImage.textContent = '🖥️';
  } else {
    playReplace.textContent =  'It\'s a tie!';
    playImage.textContent = '🤝';
  }
  playReplace.classList.remove('hidden')

  runningScore.textContent = `${playerScore} - ${computerScore}`;
}
function restartGame() {
  playerScore = 0;
  computerScore = 0;
  playerReplace.textContent = 'Waiting for player move...';
  computerReplace.textContent = 'Waiting for computer move...';
  playerReplace.classList.add('waiting');
  computerReplace.classList.add('waiting');
  playReplace.classList.add('hidden');
  runningScore.textContent = '0 - 0';
  playImage.textContent = '';
}


//UI elements
const startButton = document.querySelector('#start-button');
const startScreen = document.querySelector('.start');
const gameOverButton = document.querySelector('#play-again-button');
const gameOverScreen = document.querySelector('.game-over');
const gameWinner = document.querySelector('#game-over-winner');
const gameScore = document.querySelector('#game-score');
let playerScore = 0;
let computerScore = 0;
const playerReplace = document.querySelector('#player-replace');
const computerReplace = document.querySelector('#computer-replace');
const playReplace = document.querySelector('#play-replace');
const runningScore = document.querySelector('#current-score');
const playImage = document.querySelector('.play-image').childNodes[0];

//Main game area
startButton.addEventListener('click', () => {
  startScreen.classList.add('hidden');
});
gameOverButton.addEventListener('click', () => {
  restartGame();
  gameOverScreen.classList.add('hidden');
});
//game buttons
let btns = Array.from(document.querySelectorAll('.game-button'));
btns.forEach(btn => btn.addEventListener('click', () => {
  const playerChoice = btn.id;
  const computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
  if(playerScore === 5 || computerScore === 5) { 
    if(playerScore > computerScore) {
      gameWinner.textContent = 'You won! :)'
    } else {
      gameWinner.textContent = 'You Lost! :(' 
    }
    gameScore.textContent = ` ${playerScore} - ${computerScore} !`
    gameOverScreen.classList.remove('hidden');
  } 
}));

