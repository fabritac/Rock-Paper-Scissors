function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    
    switch (x) {
    case 0:
	return 'paper';
    case 1:
	return 'rock';
    case 2:
	return 'scissors';
    }
}

function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) return 'It is a tie!';

    const winConditions = [
        ['paper', 'rock'],
        ['rock', 'scissors'],
        ['scissors', 'paper']
    ];

    for (const [player, computer] of winConditions) {
        if (playerChoice === player && computerChoice === computer) {
            return 'You win!';
        }
    }

    return 'Computer wins!';
}

function countWins(playerWins, computerWins, result) {

    if (result === 'You win!') {
	playerWins++;
    }

    if (result === 'Computer wins!') {
	computerWins++;
    }

    return [playerWins, computerWins];
}

const Rock = createButton('Rock');
const Paper = createButton('Paper');
const Scissors = createButton('Scissors');
const Results = document.createElement('div');
const WinCounter = document.createElement('div');

let playerWins = 0;
let computerWins = 0;
WinCounter.textContent = `Player: ${playerWins}, Computer: ${computerWins}`;

function createButton(text) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', () => handleButtonClick(text.toLowerCase()));
    document.body.appendChild(button);
    return button;
}

function handleButtonClick(choice) {
    const computerChoice = getComputerChoice();
    const result = playRound(choice, computerChoice);
    console.log(result);
    Results.textContent = result;

    [playerWins, computerWins] = countWins(playerWins, computerWins, result);
    WinCounter.textContent = `Player: ${playerWins}, Computer: ${computerWins}`;
}

document.body.appendChild(WinCounter);
document.body.appendChild(Results);

