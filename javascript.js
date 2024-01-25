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

function getPlayerChoice() {
    let choice = prompt("Enter your choice");
    return choice.toLowerCase();
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

const Rock = document.createElement('button');    
const Paper = document.createElement('button');
const Scissors = document.createElement('button');
const Results = document.createElement('div');

Rock.textContent = 'Rock';
Paper.textContent = 'Paper';
Scissors.textContent = 'Scissors';

Rock.addEventListener('click', function() {
    const computerChoice = getComputerChoice();
    const result = playRound('rock', computerChoice);
    console.log(result);
    Results.textContent = result;
});

Paper.addEventListener('click', function() {
    const computerChoice = getComputerChoice();
    const result = playRound('paper', computerChoice);
    console.log(result);
    Results.textContent = result;
});

Scissors.addEventListener('click', function() {
    const computerChoice = getComputerChoice();
    const result = playRound('scissors', computerChoice);
    console.log(result);
    Results.textContent = result;
});

document.body.appendChild(Rock);
document.body.appendChild(Paper);
document.body.appendChild(Scissors);
document.body.appendChild(Results);
