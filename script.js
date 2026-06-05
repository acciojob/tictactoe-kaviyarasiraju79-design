//your JS code here. If reqconst submitBtn = document.getElementById("submit");
let player1 = "";
let player2 = "";
let currentPlayer = "x";
let gameOver = false;

const submitBtn = document.getElementById("submit");
const message = document.querySelector(".message");
const cells = document.querySelectorAll(".cell");

submitBtn.addEventListener("click", () => {

    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;

    message.innerText = `${player1}, you're up`;
});

cells.forEach((cell) => {

    cell.addEventListener("click", () => {

        // game over na click panna kudathu
        if (gameOver) {
            return;
        }

        // already filled cell na stop
        if (cell.innerText !== "") {
            return;
        }

        // x or o set
        cell.innerText = currentPlayer;

        // winner check
        if (checkWinner()) {

            gameOver = true;

            if (currentPlayer === "x") {
                message.innerText = `Player1 congratulations you won!`;
            } else {
                message.innerText = `Player2 congratulations you won!`;
            }

            return;
        }

        // player switch
        if (currentPlayer === "x") {

            currentPlayer = "o";
            message.innerText = `${player2}, you're up`;

        } else {

            currentPlayer = "x";
            message.innerText = `${player1}, you're up`;
        }

    });

});

function checkWinner() {

    const winPatterns = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for (let i = 0; i < winPatterns.length; i++) {

        let pattern = winPatterns[i];

        let a = cells[pattern[0]].innerText;
        let b = cells[pattern[1]].innerText;
        let c = cells[pattern[2]].innerText;

        if (a !== "" && a === b && b === c) {
            return true;
        }
    }

    return false;
}