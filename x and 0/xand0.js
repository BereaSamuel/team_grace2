const board = document.getElementById("board");
const restartButton = document.getElementById("restartButton");
let player = "X",
  movements = 0;
let table = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// Generate Tabel
generateTable();
restartButton.addEventListener("click", resetGame);
board.addEventListener("click", (e) => {
  const target = e.target;
  let l = parseInt(target.getAttribute("l"));
  let c = parseInt(target.getAttribute("c"));
  if (table[l][c]) return;
  table[l][c] = player;
  target.innerHTML = player;
  movements++;
  if (gameOver(l, c, player)) {
    alert(`Great ${player}! You Winn.`);
    restartButton.disabled = false;
  } else if (movements == 9) {
    alert("Draw");
    restartButton.disabled = false;
  } else {
    changeplayer();
  }
});
function generateTable() {
  let l, c;
  for (let i = 0; i < 9; i++) {
    let e = document.createElement("div");
    l = Math.round((i + 2) / 3) - 1;
    c = Math.round(i % 3);
    e.setAttribute("l", l);
    e.setAttribute("c", c);
    board.appendChild(e);
  }
}

//Table Board

function gameOver(l, c, player) {
  let count = 0;
  // Line Verification
  for (let i = 0; i < 3; i++) {
    if (table[l][i] == player) count++;
  }
  if (count == 3) return true;
  count = 0;
  // Colums verification
  for (let i = 0; i < 3; i++) {
    if (table[i][c] == player) count++;
  }
  if (count == 3) return true;
  count = 0;
  // First diagonal
  if (l == c) {
    for (let i = 0; i < 3; i++) {
      if (table[i][i] == player) count++;
    }
  }
  // Second diagonal
  else if (l + c == 2) {
    for (let i = 0; i < 3; i++) {
      if (table[i][3 - i - 1] == player) count++;
    }
  }
  if (count == 3) return true;
  return false;
}
function changeplayer() {
  if (player == "X") player = "0";
  else player = "X";
  document.getElementById("player").textContent = player;
}

//Restart button

function resetGame() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      table[i][j] = null;
    }
  }
  Array.from(document.querySelectorAll("div[l]")).forEach((e) => {
    e.textContent = null;
  });
  document.getElementById("player").textContent = player;
  movements = 0;
}
// generate a message
