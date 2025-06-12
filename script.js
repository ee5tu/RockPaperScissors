//select elements
const humanScoreEl = document.querySelector('#humanScore');
const computerScoreEl = document.querySelector('#computerScore');
const humanChoiceEl = document.querySelector('#humanChoice');
const computerChoiceEl = document.querySelector('#computerChoice');
const choiceButtons = document.querySelectorAll('button');
const computerMsgEl = document.querySelector('.computerMsg');

//scores
let computerScore = 0;
let humanScore = 0;

//win messages
const computerW = 'Computer wins!';
const humanW = 'You win!';

//get computer and human's choice
const getComputerChoice = function () {
	const choice = Math.trunc(Math.random() * 3);

	if (choice === 0) {
		return 'rock';
	} else if (choice === 1) {
		return 'paper';
	} else {
		return 'scissors';
	}
};

choiceButtons.forEach(el => {
	el.addEventListener('click', e => {
		playRound(e.target.id, getComputerChoice());
	});
});

//play mechanic

const playRound = function (humanChoice, computerChoice) {
	if (computerChoice === 'rock') {
		computerChoiceEl.textContent = '🪨';
	} else if (computerChoice === 'paper') {
		computerChoiceEl.textContent = '🧻';
	} else if (computerChoice === 'scissors') {
		computerChoiceEl.textContent = '✂️';
	}

	//tie
	if (humanChoice === computerChoice) {
		computerMsgEl.textContent = `Computer chose ${computerChoice}`;
		return 'TIE';

		//rock
	} else if (humanChoice === 'rock') {
		if (computerChoice === 'paper') {
			computerMsgEl.textContent = `Computer chose ${computerChoice}`;
			return computerW;
		} else {
			computerMsgEl.textContent = `Computer chose ${computerChoice}`;
			return humanW;
		}

		//paper
	} else if (humanChoice === 'paper') {
		if (computerChoice === 'scissors') {
			computerMsgEl.textContent = `Computer chose ${computerChoice}`;
			return computerW;
		} else {
			computerMsgEl.textContent = `Computer chose ${computerChoice}`;
			return humanW;
		}

		//scissors
	} else if (humanChoice === 'scissors') {
		if (computerChoice === 'rock') {
			computerMsgEl.textContent = `Computer chose ${computerChoice}`;
			return computerW;
		} else {
			computerMsgEl.textContent = `Computer chose ${computerChoice}`;
			return humanW;
		}

		//error
	} else return 0;
};

/*const playGame = function () {
	for (i = 0; i < 5; i++) {
		let roundOutCome = playRound(getComputerChoice());

		if (roundOutCome === 0) {
			console.log('Something went wrong');
			break;
		} else if (roundOutCome === computerW) {
			console.log(`Round 0${i + 1}: ${roundOutCome}`);
			computerScore++;

			console.log(
				`You: ${humanScore} points, Computer: ${computerScore} points`
			);
		} else if (roundOutCome === humanW) {
			console.log(`Round 0${i + 1}: ${roundOutCome}`);
			humanScore++;

			console.log(
				`You: ${humanScore} points, Computer: ${computerScore} points`
			);
		} else {
			console.log(`Round 0${i + 1}: ${roundOutCome}`);

			console.log(
				`You: ${humanScore} points, Computer: ${computerScore} points`
			);
		}

		console.log(' ');
	}
	if (humanScore === computerScore) {
		console.log(`Game ended in a tie ${humanScore}-${computerScore}`);
	} else if (humanScore > computerScore) {
		console.log(`You won ${humanScore}-${computerScore}`);
	} else console.log(`Computer won ${computerScore}-${humanScore}`);
};*/

//playGame();
