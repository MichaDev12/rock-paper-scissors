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
      choice = "Rock";
      break;
    case 2:
    case 5:
    case 8:
      choice = "Paper";
      break;
    case 3:
    case 6:
    case 9:
      choice = "scissors";
      break;
  }

  return choice;
}
