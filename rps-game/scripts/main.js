const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		playRound(button.id, getComputerMove());
	});
});

function getComputerMove() {
	const moves = ['rock', 'paper', 'scissors'];
	const computerMove = moves[Math.floor(Math.random() * moves.length)];
	return computerMove;
}

function playRound(playerChoice, computerChoice) {
	console.log('Player chose: ' + playerChoice)
	console.log('Computer chose: ' + computerChoice)

	if (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
		alert('Invalid move.');
		return;
	}

	if (playerChoice === computerChoice) {
		console.log("It's a tie!");
	} else if (playerChoice === 'rock' && computerChoice === 'paper') {
		console.log('Sorry, paper covers rock.');
	} else if (playerChoice === 'paper' && computerChoice === 'rock') {
		console.log('Yay! Paper covers rock!');
	} else if (playerChoice === 'scissors' && computerChoice === 'rock') {
		console.log('Sorry, rock beats scissors.');
	} else if (playerChoice === 'rock' && computerChoice === 'scissors') {
		console.log('Yay! Rock beats scissors!');
	} else if (playerChoice === 'scissors' && computerChoice === 'paper') {
		console.log('Yay! Scissors cuts paper!');
	} else if (playerChoice === 'paper' && computerChoice === 'scissors') {
		console.log('Sorry, scissors cuts paper.');
	}
	return {
		playerChoice,
		computerChoice
	};
}

// function game() {
// 	for (let round = 0; round < 5; round++) {
// 		playRound();
// 	}
// }