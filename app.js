const squares = document.querySelectorAll(".square");
const message = document.querySelector(".message");
let turn = "X";
let gameOver = false;

squares.forEach(square => {
    square.addEventListener("click", () => {
        if (gameOver) return;
        if (square.textContent === "") {
            square.textContent = turn;
            if (checkWin()) {
                message.textContent = `${turn} wins!`;
                gameOver = true;
                return;
            }
            if (checkTie()) {
                message.textContent = "It's a tie!";
                gameOver = true;
                return;
            }
            turn = turn === "X" ? "O" : "X";
        }
    });
});

function checkWin() {
    if (checkRow(0, 1, 2)) return true;
    if (checkRow(3, 4, 5)) return true;
    if (checkRow(6, 7, 8)) return true;
    if (checkRow(0, 3, 6)) return true;
    if (checkRow(1, 4, 7)) return true;
    if (checkRow(2, 5, 8)) return true;
    if (checkRow(0, 4, 8)) return true;
    if (checkRow(2, 4, 6)) return true;
    return false;
}

function checkRow(a, b, c) {
    if (squares[a].textContent !== "" && squares[a].textContent === squares[b].textContent && squares[b].textContent === squares[c].textContent) {
        squares[a].style.backgroundColor = "lightgreen";
        squares[b].style.backgroundColor = "lightgreen";
        squares[c].style.backgroundColor = "lightgreen";
        return true;
    }
    return false;
}

function checkTie() {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].textContent === "") {
            return false;
        }
    }
    return true;
}
