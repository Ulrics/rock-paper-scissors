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

const rock = document.querySelector('.battleButtonRock');
const paper = document.querySelector('.battleButtonPaper');
const scissors = document.querySelector('.battleButtonScissors');
const dialog = document.querySelector('.dialog');
const scoreComputer = document.querySelector('.scoreComputer');
const scoreHuman = document.querySelector('.scoreHuman');

function playRock() {
  playRound("rock");
}

function playPaper() {
  playRound("paper");
}

function playScissors() {
  playRound("scissors");
}

rock.addEventListener("click", playRock);
paper.addEventListener("click", playPaper);
scissors.addEventListener("click", playScissors);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    
    if ((computerChoice == "paper" && humanChoice == "rock") || 
        (computerChoice == "rock" && humanChoice == "scissors") || 
        (computerChoice == "scissors" && humanChoice == "paper")) {
        ++computerScore;
        scoreComputer.textContent = computerScore;
        dialog.style.color = "#FF3336";
        dialog.textContent = "You lose! The computer chose: " + computerChoice + " which beats your " + humanChoice;
        // return console.log("You lose! The computer chose: " + computerChoice + " which beats your " + humanChoice);
    }
    
    else if (computerChoice == humanChoice){
        dialog.style.color = "black";
        dialog.textContent = "It's a tie! nobody wins!";
        // return console.log("It's a tie! nobody wins!"); 
    }

    else{
        ++humanScore;
        scoreHuman.textContent = humanScore;
        dialog.style.color = "#09C762";
        dialog.textContent = "You win! Your " + humanChoice + " beats the computer's " + computerChoice;
        //return console.log("You win! Your " + humanChoice + " beats the computer's " + computerChoice);
    }
    
    if (humanScore === 5 || computerScore === 5){
        return endGame();
    }

}

function endGame(){

    if (humanScore > computerScore){
        dialog.style.color = "#09C762"
        dialog.style.fontSize = "24px";
        dialog.textContent = "You win! Score: " + humanScore + ":" + computerScore;
    }
    /*
    else if (humanScore == computerScore){
        dialog.style.color = "black";
        dialog.style.fontSize = "24px";
        dialog.textContent = "It's a tie, nobody wins! Score: " + humanScore + ":" + computerScore;
    }
    */
    else{
        dialog.style.color = "#FF3336";
        dialog.style.fontSize = "24px";
        dialog.textContent = "You Lose! Score: " + humanScore + ":" + computerScore;
    }

    const wrapper = document.querySelector(".wrapper"); 
    const replayButton = document.createElement("div");
    replayButton.textContent = "Replay";
    replayButton.classList.add("replay");
    wrapper.appendChild(replayButton);

    const replayButtonCreated = document.querySelector('.replay');

    replayButtonCreated.addEventListener("click", () => {
    replayGame();
    });

    rock.style["background-color"] = "#F0F0F0";
    paper.style["background-color"] = "#F0F0F0";
    scissors.style["background-color"] = "#F0F0F0";

    rock.removeEventListener("click", playRock);
    paper.removeEventListener("click", playPaper);
    scissors.removeEventListener("click", playScissors);

    rock.style.cursor = "not-allowed";
    paper.style.cursor = "not-allowed";
    scissors.style.cursor = "not-allowed";
}



function replayGame(){
    humanScore = 0;
    computerScore = 0;
    tie = 0;
    dialog.style.color = "#717171";
    dialog.style.fontSize = "16px";
    dialog.style.fontWeight = "400";
    dialog.textContent = "Make your move to start the game - First to five wins!";
    scoreComputer.textContent = computerScore;
    scoreHuman.textContent = humanScore;

    rock.addEventListener("click", playRock);
    paper.addEventListener("click", playPaper);
    scissors.addEventListener("click", playScissors);
   
    rock.style.cursor = "pointer";
    paper.style.cursor = "pointer";
    scissors.style.cursor = "pointer";

    rock.style["background-color"] = "";
    paper.style["background-color"] = "";
    scissors.style["background-color"] = "";

    const replayButton = document.querySelector('.replay');
    replayButton.remove();
}