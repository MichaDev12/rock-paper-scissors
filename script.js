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

const buttons = document.querySelectorAll("button");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const result = document.querySelector("#result");

buttons.forEach((button) => {
  button.addEventListener("click", () =>{
    let playerSelection = button.id;
    playRound(playerSelection);
  });
});

function playRound(playerSelection, computerSelection) {
  let finalResult;

  computerSelection = getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);

  if (computerSelection === playerSelection) {
    result.textContent = `${playerSelection} vs ${computerSelection}. It's a tie`;
  } else {
    switch (playerSelection) {
      case "rock":
        if (computerSelection == "scissors") {
          result.textContent = `${playerSelection} vs ${computerSelection}. You win`;
        } else {
          result.textContent = `${playerSelection} vs ${computerSelection}. You lose`;
        }
        break;
      case "paper":
        if (computerSelection == "rock") {
          result.textContent = `${playerSelection} vs ${computerSelection}. You win`;
        } else {
          result.textContent = `${playerSelection} vs ${computerSelection}. You lose`;
        }
        break;
      case "scissors":
        if (computerSelection == "paper") {
          result.textContent = `${playerSelection} vs ${computerSelection}. You win`;
        } else {
          result.textContent = `${playerSelection} vs ${computerSelection}. You lose`;
        }
        break;
    }
  };
  return console.log("Round Completed");
}
