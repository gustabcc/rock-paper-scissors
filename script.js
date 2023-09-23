function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"];
    const computer = moves[Math.floor(Math.random() * moves.length)];

    return computer;
}

function round(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return 'Tie'
    } else if(
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') 
    ) {
        return 'Player winns';
    } else {
        return 'Computer winns';
    }
}

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let currentRound = 0;

    alert(
        `
        Options for choices:
        1 - rock
        2 - paper
        3 - scissors 
        `
        )

    for(currentRound; currentRound < 5; currentRound++) {
        const playerChoice = prompt('rock, paper and scissors??').toLowerCase();
        const computerChoice = getComputerChoice();
        const roundResult = round(playerChoice, computerChoice);

        alert(
            `
            Round: ${currentRound}
            Player choice: ${playerChoice}
            Computer choice: ${computerChoice}
            Round result: ${roundResult}
            `
        )
    
        if(roundResult === 'Player winns') {
            playerScore++;
        } else if(roundResult === 'Computer winns') {
            computerScore++;
        }
    }

    alert(
        `
        Player score: ${playerScore}
        Computer score: ${computerScore}
        `
    )

    if(playerScore > computerScore) {
        alert('Player is match winner');
    } else if(playerScore < computerScore) {
        alert('Computer is match winner');
    } else {
        alert('Tie')
    }
}

game();