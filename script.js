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
  const playerSelection = prompt("Rock,Paper or Scissors?");
  const computerSelection = getComputerChoice();
  let resultRound = playRound(playerSelection, computerSelection);

  console.log(resultRound);

  let computerScore = 0;
  let playerScore = 0;

  let score = resultRound.includes("win");

  if (score) {
    ++playerScore;
  } else {
    ++computerScore;
  }

  console.log(`Player: ${playerScore} - Computer: ${computerScore}`);

  function playRound(playerSelection, computerSelection) {
    let finalResult;
    let playerLowerCase = playerSelection.toLowerCase();

    while (playerLowerCase === computerSelection) {
      console.log(`${playerLowerCase} vs ${computerSelection}. It's a tie.`);
      computerSelection = getComputerChoice();
      playerSelection = prompt("again");
      playerLowerCase = playerSelection.toLowerCase();
    }

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
    } else {
      if (computerSelection == "paper") {
        finalResult = `${playerLowerCase} vs ${computerSelection}. You win!`;
      } else {
        finalResult = `${playerLowerCase} vs ${computerSelection}. You lose.`;
      }
    }

    return finalResult;
  }
}
