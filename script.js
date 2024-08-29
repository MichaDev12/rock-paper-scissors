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
const currentPlayerScore = document.querySelector("#playerScore");
const currentComputerScore = document.querySelector("#computerScore");
const result = document.querySelector("#result");
const winner = document.querySelector("#winner");
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () =>{
    let playerSelection = button.id;
    if (playerScore != 5 && computerScore != 5) {
      playRound(playerSelection);
    }
  });
});

function playRound(playerSelection, computerSelection) {
  let finalResult;

  computerSelection = getComputerChoice();

  if (computerSelection === playerSelection) {
    result.textContent = `${playerSelection} vs ${computerSelection}. It's a tie`;
    result.style.color = "gray";
  } else {
    switch (playerSelection) {
      case "rock":
        if (computerSelection == "scissors") {
          result.textContent = `${playerSelection} vs ${computerSelection}. You win`;
          result.style.color = "green";
          playerScore++;
        } else {
          result.textContent = `${playerSelection} vs ${computerSelection}. You lose`;
          result.style.color = "red";
          computerScore++;
        }
        break;
      case "paper":
        if (computerSelection == "rock") {
          result.textContent = `${playerSelection} vs ${computerSelection}. You win`;
          result.style.color = "green";
          playerScore++;
        } else {
          result.textContent = `${playerSelection} vs ${computerSelection}. You lose`;
          result.style.color = "red";
          computerScore++;
        }
        break;
      case "scissors":
        if (computerSelection == "paper") {
          result.textContent = `${playerSelection} vs ${computerSelection}. You win`;
          result.style.color = "green";
          playerScore++;
        } else {
          result.textContent = `${playerSelection} vs ${computerSelection}. You lose`;
          result.style.color = "red";
          computerScore++;
        }
        break;
    }
  }

  currentPlayerScore.textContent = playerScore;
  currentComputerScore.textContent = computerScore;

  if (playerScore == 5 || computerScore == 5) {
    if (playerScore > computerScore) {
      winner.textContent = "Player wins!";
      winner.style.color = "green";
    } else {
      winner.textContent = "Computer wins!";
      winner.style.color = "red";
    }
  }
}
