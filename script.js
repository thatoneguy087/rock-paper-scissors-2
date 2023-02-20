//create computer choice function to get random computer choice
  //base choice off of random number given
function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);
  return num === 0 ? 'rock' :
    num === 1 ? 'paper' : 
    'scissors'
}
//create function to play a round of rock paper scissors
  //get player and computer input, and compare them against eachother. 
  //return one of three options, playerwin, computerwin, or tie
function playRound (playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    return 2;
  }
  if((computerSelection === 'rock' && playerSelection === 'paper') || (computerSelection === 'paper' && playerSelection === 'scissors') || (computerSelection === 'scissors' && playerSelection === 'rock')) {
    return 0;
  }
  return 1;
}
//create function to declare winner
function declareWinner(roundOutcome){
  switch(true) {
    case roundOutcome === 0 :
      return 'Player Won!';
      break;
    case roundOutcome === 1 :
      return 'Computer Won!';
      break;
    default:
      return 'It\'s a tie!';
  }
}
//create function to play first to five game of rock paper scissors
  //create loop until one player reaches 5 wins.
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
//create input to get player choice
  //simple prompt to get player choice. 
const playContainer = document.querySelector('.plays');
let btns = [...document.querySelectorAll('button')];
btns.forEach(btn => btn.addEventListener('click', () => {
  const playerChoice = btn.id;
  const computerChoice = getComputerChoice();
  
  let playerPlay = document.createElement('p');
  playerPlay.textContent = `You chose ${playerChoice}.`;
  playContainer.appendChild(playerPlay);

  console.log('Computer: ' + computerChoice);
  console.log(declareWinner(playRound(playerChoice, computerChoice)));
}));
//when a button is pressed, use the classlist to determine the user move
  //select all the buttons, and store them in an array
  //go through each item in the array, and add an event listener
  //use the selected item, using the classlist to
//run the rest of the code as is. 
//later on, change the placeholder to the appropriate text/image based upon the outcome
