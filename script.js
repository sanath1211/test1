let clickCount = 0;
let highscore = 0;
let highscoreHistory = [];

const clickButton = document.getElementById('clickButton');
const highscoreDisplay = document.getElementById('highscore');
const scoreHistory = document.getElementById('scoreHistory');

clickButton.addEventListener('click', () => {
    clickCount++;
    clickButton.textContent = clickCount;
});

const resetGame = () => {
    if (clickCount > 0) {
        if (clickCount > highscore) {
            highscore = clickCount;
            highscoreDisplay.textContent = highscore;
        }
        const time = new Date().toLocaleTimeString();
        highscoreHistory.push({ score: clickCount, time });
        updateScoreHistory();
        clickCount = 0;
        clickButton.textContent = clickCount;
    }
};

const updateScoreHistory = () => {
    scoreHistory.innerHTML = '';
    highscoreHistory.forEach(record => {
        const listItem = document.createElement('li');
        listItem.textContent = `Score: ${record.score}, Time: ${record.time}`;
        scoreHistory.appendChild(listItem);
    });
};

setInterval(resetGame, 15000);
