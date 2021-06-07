// document.getElementById('rock').onclick = user;
// document.getElementById('paper').onclick = user;
// document.getElementById('scissors').onclick = user;

// function user() {
// 	let userChoice = this.id;
// 	console.log(this.id);
// 	return playRound(userChoice, getComputerMove())

// }

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
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
	console.log('This is player choice: ' + playerChoice)
	console.log('This is computer choice: ' + computerChoice)

	if (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
		alert('Invalid move.');
		return;
	}

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
		playRound();
	}
}
