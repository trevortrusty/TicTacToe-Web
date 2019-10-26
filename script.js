var counter = 0;
var events = 0;
var currentPlayer;

// Caching grid table data
var r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3;
r1c1 = r1c2 = r1c3 = r2c1 = r2c2 = r2c3 = r3c1 = r3c2 = r3c3 = -1;

const r1c1_td = document.getElementById("r1c1");
const r1c2_td = document.getElementById("r1c2");
const r1c3_td = document.getElementById("r1c3");
const r2c1_td = document.getElementById("r2c1");
const r2c2_td = document.getElementById("r2c2");
const r2c3_td = document.getElementById("r2c3");
const r3c1_td = document.getElementById("r3c1");
const r3c2_td = document.getElementById("r3c2");
const r3c3_td = document.getElementById("r3c3");
const result_h2 = document.getElementById("result");
const button = document.getElementById("button");

// Classes
function player(mark, name) {
    this.mark = mark;
}

// Object declaration
// var player1 = new player(prompt("Player 1: Please choose a letter! (i.e. \'x\', \'o\'"));
// var player2 = new player(prompt("Player 2: Please choose a letter! (i.e. \'x\', \'o\'"));
var player1 = new player("X", "Player X");
var player2 = new player("O", "Player O");

function checkWin(cpl) {
    var horizontal = (r1c1 == r1c2 && r1c2 == r1c3 && r1c3 == cpl.mark) || (r2c1 == r2c2 && r2c2 == r2c3 && r2c3 == cpl.mark) || (r3c1 == r3c2 && r3c2 == r3c3 && r3c3 == cpl.mark);
    var vertical = (r1c1 == r2c1 && r2c1 == r3c1 && r3c1 == cpl.mark) || (r1c2 == r2c2 && r2c2 == r3c2 && r3c2 == cpl.mark) || (r1c3 == r2c3 && r2c3 == r3c3 && r3c3 == cpl.mark);
    var diagonal = (r1c1 == r2c2 && r2c2 == r3c3 && r3c3 == cpl.mark) || (r1c3 == r2c2 && r2c2 == r3c1 && r3c1 == cpl.mark);

    if (horizontal || vertical || diagonal) {
        // alert("winner");
        // result_h2.innerHTML = cpl.name + " wins!!";
        // reset();
        return true;
    } else
        return false;
}

function placeLetter(place) {
    if (counter % 2 === 0) {
        currentPlayer = player1;
    } else
        currentPlayer = player2;

    switch (place) {
        case "r1c1":
            if (r1c1 == -1) {
                r1c1 = currentPlayer.mark;
                r1c1_td.innerHTML = r1c1;
                events++;
            }
            break;
        case "r1c2":
            if (r1c2 == -1) {
                r1c2 = currentPlayer.mark;
                r1c2_td.innerHTML = r1c2;
                events++;
            }

            break;
        case "r1c3":
            if (r1c3 == -1) {
                r1c3 = currentPlayer.mark;
                r1c3_td.innerHTML = r1c3;
                events++;
            }

            break;
        case "r2c1":
            if (r2c1 == -1) {
                r2c1 = currentPlayer.mark;
                r2c1_td.innerHTML = r2c1;
                events++;
            }

            break;
        case "r2c2":
            if (r2c2 == -1) {
                r2c2 = currentPlayer.mark;
                r2c2_td.innerHTML = r2c2;
                events++;
            }

            break;
        case "r2c3":
            if (r2c3 == -1) {
                r2c3 = currentPlayer.mark;
                r2c3_td.innerHTML = r2c3;
                events++;
            }

            break;
        case "r3c1":
            if (r3c1 == -1) {
                r3c1 = currentPlayer.mark;
                r3c1_td.innerHTML = r3c1;
                events++;
            }

            break;
        case "r3c2":
            if (r3c2 == -1) {
                r3c2 = currentPlayer.mark;
                r3c2_td.innerHTML = r3c2;
                events++;
            }

            break;
        case "r3c3":
            if (r3c3 == -1) {
                r3c3 = currentPlayer.mark;
                r3c3_td.innerHTML = r3c3;
                events++;
            }

            break;
    }
    let win = checkWin(currentPlayer);
    if (events === 9 && !win) {
        // alert("Cats Game! :(");
        result_h2.innerHTML = "Cats Game :(";
        reset();
    } else if (win) {
        if (counter % 2 === 0) {
            result_h2.innerHTML = "Player X wins!!";
        } else
            result_h2.innerHTML = "Player O wins!!";

        reset();
    } else {
        counter++;
        if (counter % 2 === 0) {
            result_h2.innerHTML = "Player X\'s turn";
        } else
            result_h2.innerHTML = "Player O\'s turn";
    }

}


function reset() {
    button.innerHTML = "Play again?";
    button.addEventListener('click', function() {
        r1c1_td.innerHTML = r1c2_td.innerHTML = r1c3_td.innerHTML = r2c1_td.innerHTML =
            r2c2_td.innerHTML = r2c3_td.innerHTML = r3c1_td.innerHTML = r3c2_td.innerHTML = r3c3_td.innerHTML = " ";
        r1c1 = r1c2 = r1c3 = r2c1 = r2c2 = r2c3 = r3c1 = r3c2 = r3c3 = -1;
        counter = events = 0;
        button.innerHTML = "";
        // main();
    })
}

function main() {
    r1c1_td.addEventListener('click', function() {
        placeLetter("r1c1");
    });
    r1c2_td.addEventListener('click', function() {
        placeLetter("r1c2");
    });
    r1c3_td.addEventListener('click', function() {
        placeLetter("r1c3");
    });
    r2c1_td.addEventListener('click', function() {
        placeLetter("r2c1");
    });
    r2c2_td.addEventListener('click', function() {
        placeLetter("r2c2");
    });
    r2c3_td.addEventListener('click', function() {
        placeLetter("r2c3");
    });
    r3c1_td.addEventListener('click', function() {
        placeLetter("r3c1");
    });
    r3c2_td.addEventListener('click', function() {
        placeLetter("r3c2");
    });
    r3c3_td.addEventListener('click', function() {
        placeLetter("r3c3");
    });
}

main();