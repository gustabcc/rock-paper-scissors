// this function takes the computer's play.
const getComputerChoice = function() {
    const possibleMove = ["rock", "paper", "scissors"]; //list of possible moves.
    const move = possibleMove[Math.floor(Math.random() * possibleMove.length)] //chose a random move.

    return move;
}

console.log(getComputerChoice()) 