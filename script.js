function getComputerChoice() {
  let randomNumber = Math.trunc(Math.random() * 10);
  let choice;

  // I add this because i want to work with 1-3, 4-6 and 7-9
  if (randomNumber === 0) {
    randomNumber = Math.trunc(Math.random() * 10);
  }

  switch (randomNumber) {
    // If i have the 0 again haha (this will change in the future I promise D:)
    case 0:
      randomNumber = Math.trunc(Math.random() * 10);
    case 1:
    case 2:
    case 3:
      choice = "Rock";
      break;
    case 4:
    case 5:
    case 6:
      choice = "Paper";
      break;
    case 7:
    case 8:
    case 9:
      choice = "scissors";
      break;
    // I add this if there is a possibility to get a triple zero, this will be fix with loops soon
    default:
      choice = '0 0 0 :('
  }

  return choice;
}
