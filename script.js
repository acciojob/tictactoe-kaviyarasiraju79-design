//your JS code here. If required.
const submitBtn = document.getElementById("submit");
const game = document.getElementById("game");
const message = document.querySelector(".message");
const cells = document.querySelectorAll(".cell");

let player1 = "";
let player2 = "";

let currentPlayer = "x";
let gameActive = true;

// Submit button click
submitBtn.addEventListener("click", function () {

  player1 = document.getElementById("player-1").value;

  player2 = document.getElementById("player-2").value;

  if (player1 === "" || player2 === "") {
    alert("Please enter both player names");
    return;
  }

  game.style.display = "block";

  message.textContent = `${player1}, you're up`;
});

// Winning combinations
const winPatterns = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"],
  ["1", "5", "9"],
  ["3", "5", "7"]
];

// Cell click event
cells.forEach(function (cell) {

  cell.addEventListener("click", function () {

    // Prevent overwriting
    if (cell.textContent !== "" || !gameActive) {
      return;
    }

    // Add X or O
    if (currentPlayer === "x") {
      cell.textContent = "x";
    } else {
      cell.textContent = "o";
    }

    // Check winner
    checkWinner();

    // Switch player
    if (gameActive) {

      currentPlayer = currentPlayer === "x" ? "o" : "x";

      if (currentPlayer === "x") {
        message.textContent = `${player1}, you're up`;
      } else {
        message.textContent = `${player2}, you're up`;
      }
    }

  });

});

// Check winner function
function checkWinner() {

  for (let i = 0; i < winPatterns.length; i++) {

    let pattern = winPatterns[i];

    let a = document.getElementById(pattern[0]).textContent;
    let b = document.getElementById(pattern[1]).textContent;
    let c = document.getElementById(pattern[2]).textContent;

    if (a !== "" && a === b && b === c) {

      gameActive = false;

      if (a === "x") {
        message.textContent =
          `${player1} congratulations you won!`;
      } else {
        message.textContent =
          `${player2} congratulations you won!`;
      }

      return;
    }
  }
}