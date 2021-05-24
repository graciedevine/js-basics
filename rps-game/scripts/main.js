function computerPlay() {
    let moves = ['rock', 'paper', 'scissors'];
    let computerSelection = moves[Math.floor(Math.random() * moves.length)];
    return computerSelection
}

function userPlay() {
    
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
}

