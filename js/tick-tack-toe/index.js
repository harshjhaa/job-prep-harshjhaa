const board = document.getElementById("board");
const cells = document.getElementsByClassName("box");
const boardSize = 3;
let turnP1 = true;
const scoreMap = new Map();

const winningCombinations = [
  // Rows
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  // Columns
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  // Diagonals
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
];

// Function to check if a player has won
function checkWin(token) {
  return winningCombinations.some((combination) => {
    return combination.every(([row, col]) => {
      const cell = document.querySelector(`[data-key="[${row},${col}]"]`);
      return cell.textContent === token;
    });
  });
}

function getBoard() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < boardSize; i++) {
    const row = document.createElement("div");
    for (let j = 0; j < boardSize; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.setAttribute("data-key", `[${i},${j}]`);
      row.appendChild(box);
    }
    row.classList.add("row");
    fragment.append(row);
  }
  board.appendChild(fragment);
}

function handleClickEvent(e) {
  const cell = document.querySelector(`[data-key="${e.target.dataset.key}"]`);
  if (!cell.textContent) {
    turnP1 = !turnP1;
    let token = turnP1 ? "O" : "X";
    cell.textContent = token;

    // Check for win after each move
    if (checkWin(token)) {
      alert(`Player ${token} wins!`);
      // Optionally, you can reset the game here
    }
  }
}

function attachCellsClickListner() {
  board.addEventListener("click", handleClickEvent);
}

function init(boardSize) {
  getBoard(boardSize);
  attachCellsClickListner();
}

init(boardSize);
