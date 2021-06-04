const moves = ['rock', 'paper', 'scissors'];

function computerPlay() {
	const computerMove = moves[Math.floor(Math.random() * moves.length)];
	return computerMove;
}

function playRound() {
	const playerChoice = prompt('Choose your weapon', 'rock, paper, scissors').toLowerCase()
	if (!moves.includes(playerChoice)) {
		alert('Invalid move.');
		return;
	}
	const computerChoice = computerPlay();

	if (playerChoice === 'rock' && computerChoice === 'paper') {
		console.log('Sorry, paper covers rock.');
	} else if (playerChoice === 'paper' && computerChoice === 'rock') {
		console.log('Yay! Paper covers rock!');
	} else if (playerChoice === 'scissors' && computerChoice === 'rock') {
		console.log('Sorry, rock beats scissors.');
	} else if (playerChoice === 'rock' && computerChoice === 'scissors') {
		console.log('Yay! Rock beats scissors!');
	} else if (playerChoice === 'scissors' && computerChoice === 'paper') {
		console.log('Yay! Scissors cut paper!');
	} else if (playerChoice === 'paper' && computerChoice === 'scissors') {
		console.log('Sorry, scissors cut paper.');
	} else if (playerChoice === computerChoice) {
		console.log("It's a tie!");
	}
	return {
		playerChoice,
		computerChoice
	};
}

function game() {
	for (let round = 0; round < 5; round++) {
		console.log(playRound());
	}
}
