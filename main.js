let playerScore = 0;
let compScore = 0;

const computerChoices = ['rock', 'paper', 'scissors'];

function computerplay(){
const choices = Math.floor([Math.random()*computerChoices.length])
return computerChoices[choices]
};

// Game Round
function playRound(playerSelection, computerSelection) {
  if (playerSelection===computerSelection){
    return `You have both picked ${playerSelection}! You are tied`
  }
  // Scissors
  else if (playerSelection==='scissors' && computerSelection === 'rock'){
    compScore++
    return 'You Lose! Rock beats Scissors'
  }else if (playerSelection==='scissors' && computerSelection === 'paper'){
    playerScore++
    return 'You Win! Scissors cuts Paper'
  }
  // Rock
  else if(playerSelection==='rock' && computerSelection === 'paper'){
    compScore++
    return 'You Lose! Paper covers Rock'
  }else if(playerSelection==='rock' && computerSelection === 'scissors'){
    playerScore++
    return 'You Win! Rock beats Scissors'
  }
// Paper
  else if(playerSelection==='paper' && computerSelection === 'scissors'){
    compScore++
    return 'You Lose! Scissors cuts Paper'
  }else if(playerSelection==='paper' && computerSelection === 'rock'){
    playerScore++
    return 'You Win! Paper covers rock'
  }
}

// Game
function game() {
  for (i=0; i<5; i++){
    playerSelection = prompt('Choose Your Weapon:\n Rock, Paper, Scissors\n Play 5 rounds to beat the computer').toLowerCase()
    if(!computerChoices.includes(playerSelection)){
      i--
      console.log("Invalid Input");
      continue
    }
  computerSelection = computerplay()
  console.log(playRound(playerSelection, computerSelection));
  console.log(`This is round ${i + 1}`);
  } 

  if (playerScore > compScore){
    return "You WON the game Congratulations!"
  }else if (playerScore < compScore){
    return "You LOST the game better luck next time"
  }else{
    return "You TIED eith the computer not bad"
  }
}

console.log(game()); 