let getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"]
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

let paper = (compChoice) => {
    
    if (compChoice === "rock") {
        return "Player wins";
    }

    else if (compChoice === "scissors") {
        return "Computer wins";
    }

    else {
        return "draw";
    }
}

let rock = (compChoice) => {
    
    if (compChoice === "scissors") {
        return "Player wins";
    }

    else if (compChoice === "paper") {
        return "Computer wins";
    }

    else {
        return "draw";
    }
}

let scissors = (compChoice) => {
    
    if (compChoice === "paper") {
        return "Player wins";
    }

    else if (compChoice === "rock") {
        return "Computer wins";
    }

    else {
        return "draw";
    }
}

let rockPaperScissors = (playerChoice, compChoice) => {
    
    if (playerChoice === "paper") {
        return paper(compChoice);
    }

    else if (playerChoice === "rock") {
        return rock(compChoice);
    }

    else if (playerChoice === "scissors") {
        return scissors(compChoice);
    }

    else {
        return "Incorrect choice";
    }

}

let game = () => {
    for (let i = 1; i <= 5; i++) {
        let playerChoice = prompt("Rock, paper or scissors?");
        let compChoice = getComputerChoice();
        console.log(rockPaperScissors(playerChoice, compChoice))
        console.log(`Computer chose: ${compChoice}`)
    }
}

game()