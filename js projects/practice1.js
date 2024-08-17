let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');

let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let newGameButton = document.querySelector('#new-btn');

let turnO = true;
let counter = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    enableBoxes();
    turnO = true;   
    msgContainer.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O"
            box.style.color = "purple"; 
         
            turnO = false;
        } else {
            box.innerText = "X"
            box.style.color = "green"; 
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
});
});
const disableBoxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const displayWinner = (winner) => {
    msg.innerHTML = `Congratulations! The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (const pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "" ) {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                displayWinner(pos1Val);
                drawGame();
            }
        }
    }
    
}

newGameButton.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

// draw consition
let drawGame = () => {
    counter++;
    if (counter === 9) {
        document.getElementById("msg").innerText = "This Game was Draw";
        msgContainer.classList.remove("hide");

    }
}

        

