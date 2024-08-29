// let computerMove;
let result;
let tie = 0;
let computerScore = 0;
let userScore = 0;
const choices = ["rock", "paper", "scissors"];

const textComputer = () => {
  result = "Computer won!";
  computerScore++;
  console.log(result, computerScore);
  console.log("---------------------------");
};

const textYou = () => {
  result = "You won!";
  userScore++;
  console.log(result, userScore);
  console.log("---------------------------");
};

const play = () => {
  const userChoice = prompt(
    "Please pick one of the Rock, Paper or Scissor!"
  )?.toLowerCase();

  if (choices.indexOf(userChoice) !== -1 && userChoice) {
    console.log(`You chose ${userChoice}!`);
  } else {
    console.log("You cheated!");
    return;
  }

  const computerMove = choices[Math.floor(Math.random() * choices.length)];
  console.log(`Computer chose ${computerMove}!`);

  if (userChoice === computerMove) {
    result = "Tie!";
    tie++;
    console.log(result, tie);
    console.log("---------------------------");
  } else if (userChoice === "rock") {
    computerMove === "paper" ? textComputer() : textYou();
  } else if (userChoice === "paper") {
    computerMove === "rock" ? textYou() : textComputer();
  } else if (userChoice === "scissors") {
    computerMove === "paper" ? textYou() : textComputer();
  }
  play();
};
play();
