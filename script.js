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
    return 0;
  }
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

//Listen for the buttons being clicked and use that as the player input to drive
//round outcome and DOM changes
let btns = [...document.querySelectorAll('button')];
btns.forEach(btn => btn.addEventListener('click', () => {
  const playerChoice = btn.id;
  const computerChoice = getComputerChoice();

  //Display the plays in the DOM
  let playerPlay = document.createElement('p');
  let computerPlay = document.createElement('p');
  playerPlay.textContent = `You chose ${playerChoice}.`;
  computerPlay.textContent = `Computer chose ${computerChoice}.`
  const playerReplace = document.querySelector('#player-replace');
  const computerReplace = document.querySelector('#computer-replace');
  playerReplace.replaceWith(playerPlay);
  computerReplace.replaceWith(computerPlay);
  playerPlay.id = 'player-replace';
  computerPlay.id = 'computer-replace';

  //Display the outcome of the round at the bottom of the 'plays' container
  const playReplace = document.querySelector('#play-replace');
  const playOutcome = document.createElement('p');
  playOutcome.textContent = declareWinner(playRound(playerChoice, computerChoice), playerChoice, computerChoice);
  playReplace.replaceWith(playOutcome);
  playOutcome.id = 'play-replace';
}));
