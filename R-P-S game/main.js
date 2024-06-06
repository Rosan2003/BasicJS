const playerText= document.querySelector("#playerText");
const computerText= document.querySelector("#computerText");
const resultText= document.querySelector("#resultText");
const gameBtn= document.querySelectorAll(".gameBtn");

let player;
let computer;

gameBtn.forEach(button => addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();

}));


function computerTurn(){

    const num = Math.floor(Math.random() *3)+1;

    switch(num){
        case 1:
            computer = "ROCK";
            break;

        case 2:
            computer = "PAPER";
            break;

        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkWinner(){

    if(player == computer){
        return "DRAW!";
    }
    else if(computer == "ROCK"){
        return (player == "PAPER") ? "YOU WIN!" : "YOU LOSE!"
    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS") ? "YOU WIN!" : "YOU LOSE!"
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "YOU WIN!" : "YOU LOSE!"    
    }

}
