function getComputerChoice() {
  let randomNumber;
  let choice;

  do {
    randomNumber = Math.trunc(Math.random() * 10);
  } while (randomNumber === 0);

  switch (randomNumber) {
    case 1:
    case 4:
    case 7:
      choice = "rock";
      break;
    case 2:
    case 5:
    case 8:
      choice = "paper";
      break;
    case 3:
    case 6:
    case 9:
      choice = "scissors";
      break;
  }

  return choice;
}

function game() {
  let computerScore = 0;
  let playerScore = 0;
  let playingGame = true;
  let winner;

  // computer and player are playing the game until someone wins, after that playingGame = false
  while (playingGame) {
    // play a round
    const playerSelection = prompt("Let's play! Rock, Paper or Scissors?");
    const computerSelection = getComputerChoice();
    let resultRound = playRound(playerSelection, computerSelection);
    // show in console who wins the round
    console.log(resultRound);
    // true if contains win and false if isnt contain it
    let score = resultRound.includes("win");
    if (score) {
      ++playerScore;
    } else {
      ++computerScore;
    }
    // show in console current score
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
    // conditional to finish the game
    if (computerScore == 5 || playerScore == 5) {
      playingGame = false;
    }
  }

  return (winner =
    playerScore > computerScore
      ? console.log("Player wins!")
      : console.log("Computer wins!"));

  function playRound(playerSelection, computerSelection) {
    let finalResult;
    let playerLowerCase = playerSelection.toLowerCase();
    let realChoice;

    do {
      realChoice = false;
      // if a tie
      while (playerLowerCase === computerSelection) {
        console.log(`${playerLowerCase} vs ${computerSelection}. It's a tie.`);
        computerSelection = getComputerChoice();
        playerSelection = prompt("TIE. Let's play again! Rock, Paper or Scissors?");
        playerLowerCase = playerSelection.toLowerCase();
      } 
      // for a wrong choice
      if (playerLowerCase == "rock" || playerLowerCase == "paper" || playerLowerCase == "scissors") {
          realChoice = true;
        }
      while (!realChoice) {
        playerSelection = prompt("Error. Rock, Paper or Scissors?");
        playerLowerCase = playerSelection.toLowerCase();
        if (playerLowerCase == "rock" || playerLowerCase == "paper" || playerLowerCase == "scissors") {
          realChoice = true;
        }
      }
    } while (!realChoice || playerLowerCase == computerSelection);
    

    if (playerLowerCase == "rock") {
      if (computerSelection == "scissors") {
        finalResult = `${playerLowerCase} vs ${computerSelection}. You win!`;
      } else {
        finalResult = `${playerLowerCase} vs ${computerSelection}. You lose.`;
      }
    } else if (playerLowerCase == "paper") {
      if (computerSelection == "rock") {
        finalResult = `${playerLowerCase} vs ${computerSelection}. You win!`;
      } else {
        finalResult = `${playerLowerCase} vs ${computerSelection}. You lose.`;
      }
    } else if (playerLowerCase == "scissors"){
      if (computerSelection == "paper") {
        finalResult = `${playerLowerCase} vs ${computerSelection}. You win!`;
      } else {
        finalResult = `${playerLowerCase} vs ${computerSelection}. You lose.`;
      }
    } 

    return finalResult;
  }
}

game();