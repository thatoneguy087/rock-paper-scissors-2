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

//create input to get player choice
  //simple prompt to get player choice. 
const playerChoice = prompt('What is your move?', '').toLowerCase();
const computerChoice = getComputerChoice();
console.log('Player: ' + playerChoice);
console.log('Computer: ' + computerChoice);
console.log(declareWinner(playRound(playerChoice, computerChoice)));