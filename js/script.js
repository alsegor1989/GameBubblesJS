'use sctrict';

//------ params
let maxRows = 0,
    maxCols = 0,
    color = 0,
    circles,
    score = 0,
    firstColor;

const gameTable = document.querySelector('.game_table'),
    gameScore = document.getElementById('game_score');

//------ functions
function fillTable() {
    maxRows = getRandomArbitrary(2, 6);
    maxCols = getRandomArbitrary(2, 6);

    let tableText = '';

    for (let i = 0; i < maxRows; i++) {
        tableText += `<tr>
        `;
        for (let j = 0; j < maxCols; j++) {
            color = getRandomInt(2);
            if (color == 0) {
                tableText += `
                        <td>
                            <button class="circle blue"></button>
                        </td>`;
            } else {
                tableText += `
                        <td>
                            <button class="circle red"></button>
                        </td>`;
            }
        }
        tableText += `
        </tr>`;
    }

    gameTable.innerHTML = tableText;
    circles = document.querySelectorAll('.circle');

    if (isSameColors()) {
        startGame();
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function addColorChange() {
    gameTable.addEventListener('click', (event) => {
        if (event.target && event.target.matches("button.circle")) {
            event.target.classList.toggle('red');
            event.target.classList.toggle('blue');
        }
        if (isSameColors()) {
            changeScore();
            startGame();
        }
    });
}

function changeScore() {
    score += circles.length;
    gameScore.textContent = `Score: ${score}`;
}

function isSameColors() {
    if (circles[0].classList.contains('red')) {
        firstColor = 'red';
    } else {
        firstColor = 'blue';
    }

    let sameColor = true;
    circles.forEach((btn) => {
        if (!btn.classList.contains(firstColor)) {
            sameColor = false;
        }
    });
    return sameColor;
}

function startGame() {
    fillTable();
}

//------ main program
document.addEventListener('DOMContentLoaded', () => {
    addColorChange();
    startGame();
});