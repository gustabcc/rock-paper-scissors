function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"];
    const computer = moves[Math.floor(Math.random() * moves.length)];

    return computer;
}

console.log(getComputerChoice());