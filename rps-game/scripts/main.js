function computerPlay() {
    let moves = ['rock', 'paper', 'scissors'];
    let computerMove = moves[Math.floor(Math.random() * moves.length)];
    return computerMove
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = prompt('Choose your weapon', 'rock, paper, scissors')
    let computerChoice = computerPlay();

    if (playerChoice === 'rock' && computerChoice === 'paper') {
        console.log('Sorry, paper covers rock.')
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        console.log('Yay! Paper covers rock!')
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        console.log('Sorry, rock beats scissors.')
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        console.log('Yay! Rock beats scissors!')
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        console.log('Yay! Scissors cut paper!')
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        console.log('Sorry, scissors cut paper.')
    } else if (playerChoice === computerChoice) {
        console.log("It's a tie!")

        return playerSelection, computerSelection
    }
}