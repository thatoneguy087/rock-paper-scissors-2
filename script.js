//create computer choice function to get random computer choice
  //base choice off of random number given
function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);
  return num === 0 ? 'rock' :
    num === 1 ? 'paper' : 
    'scissors'
}
//create input to get player choice
  //simple prompt to get player choice. 
//create function to play a round of rock paper scissors
  //get player and computer input, and compare them against eachother. 
  //return one of three options, playerwin, computerwin, or tie
//create function to declare winner
//create function to play first to five game of rock paper scissors
  //create loop until one player reaches 5 wins.
for (let i = 0; i < 5; i++) {
  console.log(getComputerChoice());
}
const playerChoice = prompt('What is your move?', '');
console.log(playerChoice);