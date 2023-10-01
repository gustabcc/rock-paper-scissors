const choices = document.querySelectorAll('button');
const result = document.getElementById('result');
const score = document.getElementById('score');

let playerScore = 0;
let computerScore = 0;

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.id;
        const computerChoice = getComputerChoice();
        const roundResult = round(playerChoice, computerChoice);

        displayResult(roundResult);
        updateScore(roundResult);
    });
});

function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"];
    const computer = moves[Math.floor(Math.random() * moves.length)];

    return computer;
}

function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'Player wins';
    } else {
        return 'Computer wins';
    }
}

function displayResult(resultMessage) {
    result.textContent = resultMessage;
}

function updateScore(result) {
    if (result === 'Player wins') {
        playerScore++;
    } else if (result === 'Computer wins') {
        computerScore++;
    }

    score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}