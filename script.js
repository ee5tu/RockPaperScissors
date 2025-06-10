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

const getHumanChoice = function () {
	const choice = prompt(
		'Enter your choice of Rock, Paper or Scissors: '
	).toLowerCase();

	return choice;
};

//scores
const computerScore = 0;
const humanScore = 0;

//win messages
const computerW = 'Computer wins!';
const humanW = 'You win!';

//play mechanic

const playRound = function (humanChoice, computerChoice) {
	if (humanChoice === computerChoice) {
		console.log('TIE');
	} else if (humanChoice === 'rock') {
		if (computerChoice === 'paper') {
			console.log(computerW);
		} else console.log(humanW);
	} else if (humanChoice === 'paper') {
		if (computerChoice === 'scissors') {
			console.log(computerW);
		} else console.log(humanW);
	} else if (humanChoice === 'scissors') {
		if (computerChoice === 'rock') {
			console.log(computerW);
		} else console.log(humanW);
	} else console.log('Something went wrong.');
};

playRound(getHumanChoice(), getComputerChoice());

const playGame = function () {};
