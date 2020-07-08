let button = document.querySelector("#button");
let table = document.querySelector('#table');
let currentPlayer = document.querySelector('#player');
let cells = document.querySelectorAll('#table td');
let isRunning = true;
let winner = document.querySelector('#currentPlayer')

console.log(cells)

function Reset() {
    for (let i=0; i<cells.length; i++) {
        cells[i].textContent = ""
    }
    currentPlayer.textContent = "X"
    isRunning = true
    winner.textContent = "Current player: "
};

/*
 Indices:
 +---+---+---+
 | 0 | 1 | 2 |
 +---+---+---+
 | 3 | 4 | 5 |
 +---+---+---+
 | 6 | 7 | 8 |
 +---+---+---+
 */

function RowCheck() {
    if (cells[0].textContent === currentPlayer.textContent &&
        cells[1].textContent === currentPlayer.textContent &&
        cells[2].textContent === currentPlayer.textContent) {
        return true
    } else if (
        cells[3].textContent === currentPlayer.textContent &&
        cells[4].textContent === currentPlayer.textContent &&
        cells[5].textContent === currentPlayer.textContent) {
        return true
    } else if (
        cells[6].textContent === currentPlayer.textContent &&
        cells[7].textContent === currentPlayer.textContent &&
        cells[8].textContent === currentPlayer.textContent) {
        return true
    } else {
        return false
    }
}

function ColumnCheck() {
    if (cells[0].textContent === currentPlayer.textContent &&
        cells[3].textContent === currentPlayer.textContent &&
        cells[6].textContent === currentPlayer.textContent) {
        return true
    } else if (
        cells[1].textContent === currentPlayer.textContent &&
        cells[4].textContent === currentPlayer.textContent &&
        cells[7].textContent === currentPlayer.textContent) {
        return true
    } else if (
        cells[2].textContent === currentPlayer.textContent &&
        cells[5].textContent === currentPlayer.textContent &&
        cells[8].textContent === currentPlayer.textContent) {
        return true
    } else {
        return false
    }
}

function CrossCheck() {
    if (cells[0].textContent === currentPlayer.textContent &&
        cells[4].textContent === currentPlayer.textContent &&
        cells[8].textContent === currentPlayer.textContent) {
        return true
    } else if (
        cells[2].textContent === currentPlayer.textContent &&
        cells[4].textContent === currentPlayer.textContent &&
        cells[6].textContent === currentPlayer.textContent) {
        return true
    } else {
        return false
    }
}

function GetElement(event) {
    let element = event.target
    if (isRunning === true && element.textContent === "") {
        element.textContent = currentPlayer.textContent
        if (RowCheck() === true || ColumnCheck() === true || CrossCheck() === true) {
            isRunning = false
            winner.textContent = "Winner is player: "

        } else {
            if (currentPlayer.textContent === "X") {
                currentPlayer.textContent = "O"
            } else if (currentPlayer.textContent === "O") {
                currentPlayer.textContent = "X"
            }
        }
    }

}

button.addEventListener("click", Reset)
table.addEventListener("click", GetElement)
