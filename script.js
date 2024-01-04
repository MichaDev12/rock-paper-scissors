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

function playRound(playerSelection, computerSelection) {
  let finalResult;
  playerSelection = playerSelection.toLowerCase();

  while (playerSelection === computerSelection) {
    console.log(`${playerSelection} vs ${computerSelection}. It's a tie.`);
    computerSelection = getComputerChoice();
    playerSelection = prompt("again");
  }

  if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      finalResult = `${playerSelection} vs ${computerSelection}. You win!`;
    } else {
      finalResult = `${playerSelection} vs ${computerSelection}. You lose.`;
    }
  }

  if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      finalResult = `${playerSelection} vs ${computerSelection}. You win!`;
    } else {
      finalResult = `${playerSelection} vs ${computerSelection}. You lose.`;
    }
  }

  if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      finalResult = `${playerSelection} vs ${computerSelection}. You win!`;
    } else {
      finalResult = `${playerSelection} vs ${computerSelection}. You lose.`;
    }
  }

  return finalResult;
}

const playerSelection = prompt("Rock,Paper or Scissors?");
const computerSelection = getComputerChoice();

playRound(playerSelection, getComputerChoice);
