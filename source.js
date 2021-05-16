let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let result = Math.floor(Math.random() * 3);

    switch(result) {
        case 0:
            return 'Rock';
            break;

        case 1:
            return 'Paper';
            break;

        case 2:
            return 'Scissors';
            break;
    }
}

function humanPlay() {
    let input = prompt("Enter rock paper or scissors: ");
    return input[0].toUpperCase() + input.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore += 1;
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore += 1;
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore += 1;
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }
    else {
        computerScore += 1;
        console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
    }

    console.log(`Your score: ${playerScore} | Computer Score: ${computerScore}`);
}

function game() {
    while (true) {
        playRound(humanPlay(), computerPlay());
        if (playerScore > 4 || computerScore > 4) {
            break;
        }
    }

    if (playerScore > computerScore) {
        console.log("Congratulations you win!");
        console.log(`Your score: ${playerScore} | Computer Score: ${computerScore}`);
    } else {
        console.log("Game Over!");
        console.log(`Your score: ${playerScore} | Computer Score: ${computerScore}`);
    }
}

game();