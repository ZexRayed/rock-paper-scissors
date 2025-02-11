function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
function getHumanChoice() {
  let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

let humanScore = 0;
let computerScore = 0;

function playGame() {
  let result = playRound(getHumanChoice(), getComputerChoice());
  console.log(result); // Show the result of this round
  if (result === "You win!") {
    humanScore++;
  } else if (result === "You lose!") {
    computerScore++;
  }

  result = playRound(getHumanChoice(), getComputerChoice());
  console.log(result);
  if (result === "You win!") {
    humanScore++;
  } else if (result === "You lose!") {
    computerScore++;
  }

  result = playRound(getHumanChoice(), getComputerChoice());
  console.log(result);
  if (result === "You win!") {
    humanScore++;
  } else if (result === "You lose!") {
    computerScore++;
  }

  result = playRound(getHumanChoice(), getComputerChoice());
  console.log(result);
  if (result === "You win!") {
    humanScore++;
  } else if (result === "You lose!") {
    computerScore++;
  }

  result = playRound(getHumanChoice(), getComputerChoice());
  console.log(result);
  if (result === "You win!") {
    humanScore++;
  } else if (result === "You lose!") {
    computerScore++;
  }

  if (humanScore > computerScore) {
    console.log(
      `You win the game! Final score: Human ${humanScore} - Computer ${computerScore}`
    );
  } else if (humanScore < computerScore) {
    console.log(
      `You lose the game! Fianl score: Human ${humanScore} - Computer ${computerScore}`
    );
  } else {
    console.log("It's a tie game! ");
  }
}
playGame();
