// Rock, Paper, Scissors

let keepRunning = true;
let playerScore = 0;
let computerScore = 0;

function playerPick() {
  let input = prompt(`(R)ock, (P)aper, (S)cissors, or (Q)uit?`);
  let playerHand;

  if (input.toLowerCase() === "q" || input.toLowerCase() === "quit") {
    keepRunning = false;
  }

  if (input.toLowerCase() === "r" || input.toLowerCase() === "rock") {
    playerHand = "rock";
  }

  if (input.toLowerCase() === "p" || input.toLowerCase() === "paper") {
    playerHand = "paper";
  }

  if (input.toLowerCase() === "s" || input.toLowerCase() === "scissors") {
    playerHand = "scissors";
  }
  return playerHand;
}

function computerPlay() {
  choices = ["rock", "paper", "scissors"];
  let computerHand = choices[Math.floor(Math.random() * choices.length)];
  return computerHand;
}

function showScore() {
  console.log(`  Player score:   ${playerScore}
  Computer score: ${computerScore}`);
}

function checkWinner(playerHand, computerHand) {
  if (playerHand === computerHand) {
    console.log(`It's a draw! You both picked ${playerHand}`);
    showScore();
  } else {
    switch (playerHand) {
      case "rock":
        if (computerHand === "paper") {
          computerScore++;
          console.log(`You lose! Computer picked paper.`);
          showScore();
        }
        if (computerHand === "scissors") {
          playerScore++;
          console.log(`You win! Computer picked scissors.`);
          showScore();
        }
        break;
      case "paper":
        if (computerHand === "rock") {
          playerScore++;
          console.log(`You win! Computer picked rock.`);
          showScore();
        }
        if (computerHand === "scissors") {
          computerScore++;
          console.log(`You lose! Computer picked scissors.`);
          showScore();
        }
        break;
      case "scissors":
        if (computerHand === "rock") {
          computerScore++;
          console.log(`You lose! Computer picked rock.`);
          showScore();
        }
        if (computerHand === "paper") {
          playerScore++;
          console.log(`You win! Computer picked paper.`);
          showScore();
        }
        break;
    }
  }
}

while (keepRunning) {
  checkWinner(playerPick(), computerPlay());
  if (playerScore === 5 || computerScore === 5) {
    keepRunning = false;
    console.log("Goodbye, and thanks for playing.");
  }
}
