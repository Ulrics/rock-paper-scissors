function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    }
    if (choice === 1){
        return "scissors";
    }
    if (choice === 2){
        return "paper";
    }
}

function getHumanChoice() {
    let choice = prompt("Do you want to play rock, paper, or scissors?");
    return choice;
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice().toLowerCase();
        
        if ((computerChoice == "paper" && humanChoice == "rock") || 
            (computerChoice == "rock" && humanChoice == "scissors") || 
            (computerChoice == "scissors" && humanChoice == "paper")) {
            ++computerScore;
            return console.log("You lose! The computer chose: " + computerChoice + " which beats your " + humanChoice);
        }
        
        if (computerChoice == humanChoice){
            console.log("It's a tie! nobody wins!"); 
        }

        else{
            ++humanScore;
            return console.log("You win! Your " + humanChoice + " beats the computer's " + computerChoice);
        }

    }

    for(let i = 0; i <= 4; i++){
        playRound();
    }
    if (humanScore > computerScore){
        return console.log("You win! Score: " + humanScore + ":" + computerScore);
    }
    if (humanScore == computerScore){
        return console.log("It's a tie, nobody wins! Score: " + humanScore + ":" + computerScore);
    }

    else{
        return console.log("You Lose! Score: " + humanScore + ":" + computerScore);
    }
}

console.log(playGame());