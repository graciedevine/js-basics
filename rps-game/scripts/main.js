function computerPlay() {
    let moves = ['rock', 'paper', 'scissors'];
    let computerChoice = moves[Math.floor(Math.random() * moves.length)];
    return computerChoice
}

function playRound(playerSelection, computerSelection) {
    let playerMove = prompt('Choose your weapon', 'rock, paper, scissors')
    let computerMove = computerPlay();

    if (playerMove === 'rock' && computerMove === 'paper') {
        console.log('Sorry, paper covers rock.')
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        console.log('Yay! Paper covers rock!')
    } else if (playerMove === 'scissors' && computerMove === 'rock') {
        console.log('Sorry, rock beats scissors.')
    } else if (playerMove === 'rock' && computerMove === 'scissors') {
        console.log('Yay! Rock beats scissors!')
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        console.log('Yay! Scissors cut paper!')
    } else if (playerMove === 'paper' && computerMove === 'scissors')
        console.log('Sorry, scissors cut paper.')

    return playerSelection, computerSelection
}