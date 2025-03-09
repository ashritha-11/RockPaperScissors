let yourScore = 0;
let computerScore = 0;
const Choice = document.querySelectorAll(".choice");
const Message = document.querySelector("#msg");
const yourScorePara = document.querySelector("#Your-Score");
const computerScorePara = document.querySelector("#Computer-Score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    Message.innerText = "Game was Draw. Play again.";
    Message.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        yourScore++;
        yourScorePara.innerText = yourScore;
        Message.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        Message.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        Message.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        Message.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

Choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id").toLowerCase(); // Convert to lowercase
        playGame(userChoice);
    });
});
