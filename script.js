//select elements
const humanScoreEl = document.querySelector('#humanScore');
const computerScoreEl = document.querySelector('#computerScore');
const humanChoiceEl = document.querySelector('#humanChoice');
const computerChoiceEl = document.querySelector('#computerChoice');
const choiceButtons = document.querySelectorAll('button');
const computerMsgEl = document.querySelector('.computerMsg');
const displayOutcome = document.querySelector('#msg');
const playAgainBtn = document.querySelector('#playAgain');

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
	let outcome = '';

	//display human choice
	if (humanChoice === 'rock') {
		humanChoiceEl.textContent = '🪨';
	} else if (humanChoice === 'paper') {
		humanChoiceEl.textContent = '🧻';
	} else if (humanChoice === 'scissors') {
		humanChoiceEl.textContent = '✂️';
	}

	//display computers choice
	if (computerChoice === 'rock') {
		computerChoiceEl.textContent = '🪨';
	} else if (computerChoice === 'paper') {
		computerChoiceEl.textContent = '🧻';
	} else if (computerChoice === 'scissors') {
		computerChoiceEl.textContent = '✂️';
	}

	computerMsgEl.textContent = `Computer chose ${computerChoice}`;

	//tie
	if (humanChoice === computerChoice) {
		outcome = 'TIE';

		//rock
	} else if (humanChoice === 'rock') {
		if (computerChoice === 'paper') {
			outcome = 0;
		} else {
			outcome = 1;
		}

		//paper
	} else if (humanChoice === 'paper') {
		if (computerChoice === 'scissors') {
			outcome = 0;
		} else {
			outcome = 1;
		}

		//scissors
	} else if (humanChoice === 'scissors') {
		if (computerChoice === 'rock') {
			outcome = 0;
		} else {
			outcome = 1;
		}

		//error
	} else return 0;

	if (outcome === 'TIE') {
		displayOutcome.textContent = 'Round ended in a tie.';
	} else if (outcome) {
		displayOutcome.textContent = 'You won!';

		humanScore++;
		humanScoreEl.textContent = humanScore;
	} else {
		displayOutcome.textContent = 'Computer won.';

		computerScore++;
		computerScoreEl.textContent = computerScore;
	}

	//game win
	if (humanScore >= 5) {
		choiceButtons.forEach(el => {
			el.disabled = true;
		});

		displayOutcome.textContent = `You won the game ${humanScore}-${computerScore}!`;

		playAgainBtn.style.display = 'inline-block';
	} else if (computerScore >= 5) {
		choiceButtons.forEach(el => {
			el.disabled = true;
		});

		displayOutcome.textContent = `Computer won the game ${computerScore}-${humanScore}.`;
		playAgainBtn.style.display = 'inline-block';
	}
};
