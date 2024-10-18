let board = ["", "", "", "", "", "", "", "", ""];

let currentPlayer = "X";

let isGameActive = true;

const statusDisplay = document.querySelector("#status");

const cells = document.querySelectorAll(".cell");

const winningConditions = [

    [0, 1, 2],

    [3, 4, 5],

    [6, 7, 8],

    [0, 3, 6],

    [1, 4, 7],

    [2, 5, 8],

    [0, 4, 8],

    [2, 4, 6],

];

const handleCellPlayed = (clickedCell, index) => {

    board[index] = currentPlayer;

    clickedCell.textContent = currentPlayer;

};

const handlePlayerChange = () => {

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    statusDisplay.textContent = `${currentPlayer}'s turn`;

};

const checkWin = () => {

    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {

        const [a, b, c] = winningConditions[i];

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {

            roundWon = true;

            break;

        }

    }

    return roundWon;

};

const checkDraw = () => {

    return !board.includes("");

};

const handleResultValidation = () => {

    if (checkWin()) {

        statusDisplay.textContent = `${currentPlayer} wins!`;

        isGameActive = false;

    } else if (checkDraw()) {

        statusDisplay.textContent = `It's a draw!`;

        isGameActive = false;

    } else {

        handlePlayerChange();

    }

};

const handleCellClick = (event) => {

    const clickedCell = event.target;

    const index = parseInt(clickedCell.getAttribute("data-index"));

    if (board[index] !== "" || !isGameActive) return;

    handleCellPlayed(clickedCell, index);

    handleResultValidation();

};

const handleRestartGame = () => {

    board = ["", "", "", "", "", "", "", "", ""];

    currentPlayer = "X";

    isGameActive = true;

    statusDisplay.textContent = `${currentPlayer}'s turn`;

    cells.forEach(cell => cell.textContent = "");

};

document.querySelectorAll(".cell").forEach(cell => cell.addEventListener("click", handleCellClick));

document.querySelector("#restartBtn").addEventListener("click", handleRestartGame);

statusDisplay.textContent = `${currentPlayer}'s turn`;