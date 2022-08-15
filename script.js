// Generating random computer choice of Rock Paper Scissors.
const choice = ["rock", "paper", "scissors"];
const getComputerChoice = () => {
  return choice[Math.floor(Math.random() * choice.length)];
};
// Rules of Rock Paper Scissors.
const playRound = (playerSelection) => {
  const computerSelection = getComputerChoice();
  if (playerSelection === "paper" && computerSelection === "rock") {
    return 1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return -1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return 1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return -1;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return 1;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return -1;
  } else if (playerSelection === computerSelection) {
    return 0;
  } else {
    return 0;
  }
};

// Printing out the result of the game.
const printGameResultText = (result) => {
  if (result > 0) {
    console.log(`You won, congratulations. Your score was ${result} point(s)`);
  } else if (result < 0) {
    console.log(`You lost, try again? Your score was ${result} point(s)`);
  } else {
    console.log("You tied.");
  }
};
// Storing and incrementing reported current result of the game.
const game = () => {
  let result = 0;
  for (let i = 0; i < 5; i++) {
    // Start of the game prompt.
    const play = prompt(
      "Type your choice of Rock Paper or Scissors",
      ""
    ).toLowerCase();
    result += playRound(play);
  }
  printGameResultText(result);
};
game();
