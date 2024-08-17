let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll('.choice');
let msgContainer = document.querySelector('#msg');
let userScorePara = document.querySelector('#user-score');
let compScorePara = document.querySelector('#comp-score');


const genCompChoice = () => {
    const options = ["rock", "paper", "Scissors"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log(`Game was Draw`);
        msgContainer.innerText = "Game was draw!";
        msgContainer.style.backgroundColor = "blue";
}



const checkWinner = (userWins, userChoice, compChoice) => {
if (userWins) {
    console.log(`You won!`);
    msgContainer.innerText = `You Won! ${userChoice} beats ${compChoice}!`
    msgContainer.style.backgroundColor = "green";
    userScorePara.innerText = userScore;
    userScore++;
} else {
    console.log(`Computer Won!`);
    msgContainer.innerText = `You Lost! ${compChoice} beats ${userChoice}!`
    msgContainer.style.backgroundColor = "red";
    compScorePara.innerText = compScore;
    compScore++;
}
}
const playGame = (userChoice) => {
    // user choice
    console.log(`User choice is = ${userChoice}`);
    // comp choice
    const compChoice = genCompChoice();
    console.log(`Computer choice is = ${compChoice}`);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        userWins = true;
        if (userChoice === "rock") {
            userWins = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWins = compChoice === "rock" ? true : false;
        } else if (userChoice === "scissors") {
            userWins = compChoice === "paper" ? true : false;
        }
        checkWinner(userWins, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
})

// complete this code by sunday!