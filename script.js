//Function to get randomized computer selection of rock, paper, or scissors.
function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);
  return num === 0 ? 'rock' :
    num === 1 ? 'paper' : 
    'scissors'
}

//Function to play a round of rock, paper, scissors. Returns a number based on
//the outcome. Number to be used for point allocation and winner declaration.
function playRound (playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    return 2;
  }
  if((computerSelection === 'rock' && playerSelection === 'paper') || (computerSelection === 'paper' && playerSelection === 'scissors') || (computerSelection === 'scissors' && playerSelection === 'rock')) {
    playerScore++;
    return 0;
  }
  computerScore++;
  return 1;
}
//Function to declare a winner based on the round outcome. player choice and 
//computer choice added for more detailed declaration message
function declareWinner(roundOutcome, playerChoice, ComputerChoice){
  switch(true) {
    case roundOutcome === 0 :
      return `${playerChoice} beats ${ComputerChoice}!\nYou Win!`;
      break;
    case roundOutcome === 1 :
      return `${ComputerChoice} beats ${playerChoice}!\nComputer Wins!`;
      break;
    default:
      return 'It\'s a tie!';
  }
}

//function to play a first to five game in the console.
function game() {
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < 5 && computerScore < 5){
    const playerChoice = prompt('What is your move?', '').toLowerCase();
    const computerChoice = getComputerChoice();
    console.log('Player: ' + playerChoice);
    console.log('Computer: ' + computerChoice);

    if(playRound(playerChoice, computerChoice) === 0) {
      playerScore++;
    } else if (playRound(playerChoice, computerChoice) === 1){
      computerScore++;
    }
    console.log(declareWinner(playRound(playerChoice, computerChoice)));
    console.log('Score is ' + playerScore + ' to ' + computerScore + '!');
    console.log('');
  }
}
let playerScore = 0;
let computerScore = 0;

//Listen for the buttons being clicked and use that as the player input to drive
//round outcome and DOM changes
let btns = Array.from(document.querySelectorAll('.game-button'));
btns.forEach(btn => btn.addEventListener('click', () => {
  const playerChoice = btn.id;
  const computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);

  //Display the plays in the DOM
  /*
  const playerReplace = document.querySelector('#player-replace');
  const computerReplace = document.querySelector('#computer-replace');
  playerReplace.textContent = `You chose ${playerChoice}.`;
  computerReplace.textContent = `Computer chose ${computerChoice}.`

 

  //Display the outcome of the round at the bottom of the 'plays' container
  const playReplace = document.querySelector('#play-replace');
  playReplace.textContent = declareWinner(playRound(playerChoice, computerChoice), playerChoice, computerChoice);
  playReplace.classList.remove('hidden')
  */
  //Display current score, player to computer
  const runningScore = document.querySelector('#current-score');
  runningScore.textContent = `${playerScore} - ${computerScore}`;
}));

const startButton = document.querySelector('#start-button');

startButton.addEventListener('click', () => {
  const startScreen = document.querySelector('.start');
  startScreen.classList.add('hidden');
});