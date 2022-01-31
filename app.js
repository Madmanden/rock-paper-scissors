// Rock, Paper, Scissors

let keepRunning = true;

let playerScore = 0;
let computerScore = 0;

function playerHand() {
  let selectButtonRock = document.querySelector(".rock");
  let selectButtonPaper = document.querySelector(".paper");
  let selectButtonScissors = document.querySelector(".scissors");

  selectButtonRock.addEventListener("click", () => {
    return handleClick("rock");
  });

  selectButtonPaper.addEventListener("click", () => {
    return handleClick("paper");
  });

  selectButtonScissors.addEventListener("click", () => {
    return handleClick("scissors");
  });
}

function handleClick(playerPick) {
  gameRound(playerPick, computerHand());
}

function computerHand() {
  choices = ["rock", "paper", "scissors"];
  let computerHand = choices[Math.floor(Math.random() * choices.length)];
  return computerHand;
}

function gameRound(playerHand, computerHand) {
  const gameText = document.querySelector(".gameText");

  if (playerHand && keepRunning) {
    gameText.innerText = `Player chose: ${playerHand} \n`;
    gameText.innerText += `Computer chose: ${computerHand}`;
    checkWinner(playerHand, computerHand);
  }
}

function showScore(text) {
  const score = document.querySelector(".score");
  const scoreText = document.querySelector(".scoreText");
  const gameText = document.querySelector(".gameText");

  score.innerText = `Player: ${playerScore}
  Computer: ${computerScore}`;
  scoreText.innerText = text;

  if (!keepRunning) {
    gameText.innerText = "GAME OVER";
    score.innerText = "";
    scoreText.innerText = "";
  }
}

function checkWinner(playerHand, computerHand) {
  if (playerScore === 5 || computerScore === 5) {
    keepRunning = false;
  }

  if (playerHand === computerHand) {
    scoreText = `It's a draw! You both picked ${playerHand}`;
    showScore(scoreText);
  } else {
    switch (playerHand) {
      case "rock":
        if (computerHand === "paper") {
          computerScore++;
          scoreText = `You lose! Computer picked paper.`;
          showScore(scoreText);
        }
        if (computerHand === "scissors") {
          playerScore++;
          scoreText = `You win! Computer picked scissors.`;
          showScore(scoreText);
        }
        break;
      case "paper":
        if (computerHand === "rock") {
          playerScore++;
          scoreText = `You win! Computer picked rock.`;
          showScore(scoreText);
        }
        if (computerHand === "scissors") {
          computerScore++;
          scoreText = `You lose! Computer picked scissors.`;
          showScore(scoreText);
        }
        break;
      case "scissors":
        if (computerHand === "rock") {
          computerScore++;
          scoreText = `You lose! Computer picked rock.`;
          showScore(scoreText);
        }
        if (computerHand === "paper") {
          playerScore++;
          sccoreText = `You win! Computer picked paper.`;
          showScore(scoreText);
        }
        break;
    }
  }
}

gameRound(playerHand(), computerHand());
