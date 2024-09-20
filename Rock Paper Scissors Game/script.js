function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomResult = options[randomIndex]; // Get the random option
    return randomResult; // Return the result
  }
  console.log(getRandomComputerResult());

  let playerScore = 0;
  let computerScore = 0;

  function hasPlayerWonTheRound(player, computer) {
    if (player == "Rock" && computer == "Scissors" || player == "Scissors" && computer == "Paper" || player == "Paper" && computer == "Rock"){
      return true;
    } else {
      return false;
    }
  }
  
  //console.log(hasPlayerWonTheRound("Rock", "Scissors")); 
  //console.log(hasPlayerWonTheRound("Scissors", "Rock")); 

  function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
  
    if (hasPlayerWonTheRound){
      playerScore++;
      return "Player wins! " + userOption + " beats " + computerResult;
    } else if (userOption == computerResult){
      return "It's a tie! Both chose" + userOption;
    } else {
      computerScore++;
      "Computer wins!" + computerResult + " beats" + userOption;
    }
  }

//kode asli dari freecodecamp pake template literal
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}
  
  console.log(getRoundResults("Rock"));
  console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);


  const playerScoreSpanElement = document.getElementById("player-score");
  const computerScoreSpanElement = document.getElementById("computer-score");
  const roundResultsMsg = document.getElementById("results-msg");
  const winnerMsgElement = document.getElementById("winner-msg");
  const optionsContainer = document.querySelector(".options-container");
  const resetGameBtn = document.getElementById("reset-game-btn");
  
  function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
    if (playerScore == 3){
      winnerMsgElement.innerText = "Player has won the game!";
      resetGameBtn.style.display = "block";
      optionsContainer.style.display = "none";
    } else if (computerScore == 3){
      winnerMsgElement.innerText = "Computer has won the game!";
      resetGameBtn.style.display = "block";
      optionsContainer.style.display = "none";
    }
  
  };


  //kode dari freecodecamp
  function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
  
    if (playerScore === 3 || computerScore === 3) {
      winnerMsgElement.innerText = `${
        playerScore === 3 ? "Player" : "Computer"
      } has won the game!`;
  
      resetGameBtn.style.display = "block";
      optionsContainer.style.display = "none";
    }
  
  };

  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
    resetGameBtn.style.display = "none"; 
    optionsContainer.style.display = "block";
    winnerMsgElement.innerText = "";
    roundResultsMsg .innerText = "";
  };



    const rockBtn = document.getElementById("rock-btn");
    const paperBtn = document.getElementById("paper-btn");
    const scissorsBtn = document.getElementById("scissors-btn");


    resetGameBtn.addEventListener("click", resetGame);

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});

showResults("Rock");