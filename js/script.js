'use sctrict';

//------ params
let maxRows = 0,
    maxCols = 0,
    color = 0,
    circles,
    score = 0;

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
                            <button class="circle" style="background-color: red;"></button>
                        </td>`;
            } else {
                tableText += `
                        <td>
                            <button class="circle" style="background-color: blue;"></button>
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
    circles.forEach((btn) => {
        btn.addEventListener('click',  () => {
            if (btn.style.backgroundColor == 'red') {
                btn.style.backgroundColor = 'blue';
            } else {
                btn.style.backgroundColor = 'red';
            }
            if (isSameColors()) {
                changeScore();
                startGame();
            }
        });
    });
}

function changeScore() {
    score += circles.length;
    gameScore.textContent = `Score: ${score}`;
}

function isSameColors() {
    const firstColor = circles[0].style.backgroundColor;
    let sameColor = true;
    circles.forEach((btn) => {
        if (firstColor != btn.style.backgroundColor) {
            sameColor = false;
        }
    });
    return sameColor;
}

function startGame() {
    fillTable();
    addColorChange(); 
}

//------ main program
document.addEventListener('DOMContentLoaded', () => {
    startGame();
});
