const getUserChoice = userInput => {userInput.toLowerCase()
 if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {return userInput;} else {console.log ('Error!');}};

console.log(getUserChoice('rahul'))
console.log(getUserChoice('rock'))
console.log(getUserChoice('paper'))
console.log(getUserChoice('scissors'))

function determineWinner(userChoice, computerChoice){
  if (userChoice === computerChoice) {return 'it is a tie!'
}
  if (userChoice === 'bomb') {return 'You win!'}
  if (userChoice === 'rock') {if (computerChoice === 'paper'){ return 'Computer won';} else {return 'User won'}}
  if (userChoice === 'paper') {if (computerChoice === 'scissors'){ return 'Computer won';} else {return 'User won'}}
  if (userChoice === 'scissors') {if (computerChoice === 'rock'){ return 'Computer won';} else {return 'User won'}}
}

const playGame = () => {const userChoice = getUserChoice('rock');
const computerChoice = getComputerChoice();
console.log('You thre: ' + userChoice);
console.log('The computer threw:' + computerChoice);
}
