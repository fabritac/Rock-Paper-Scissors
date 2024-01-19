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

function playRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) return 'It is a tie!';

    const winConditions = [
        ['paper', 'rock'],
        ['rock', 'scissors'],
        ['scissors', 'paper']
    ];

    for (const [player, computer] of winConditions) {
        if (playerSelection === player && computerSelection === computer) {
            return 'You win!';
        }
    }

    return 'Computer wins!';
}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    while (playerWins < 5 && computerWins < 5) {
	let result = playRound();
	console.log(result);
	console.log(playerWins);
	console.log(computerWins);

	if (result === 'You win!') {
	    playerWins++;
	} else if (result === 'Computer wins!') {
	    computerWins++;
	}
    }

    if (playerWins === 5) {
	alert('Congratulations! You won the game!');
    } else {
	alert('Sorry, the computer won the game. Better luck next time!');
    }
}

game();
