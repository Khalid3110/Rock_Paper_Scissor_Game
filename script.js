let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userScorePara = document.querySelector("#user")
let compScorePara = document.querySelector("#computer")

const randomChoice = () =>{
    let options = ["rock","paper","scissors"];
    let randInd = Math.floor(Math.random()*3);
    return options[randInd];
};

const draw = () =>{
    msg.innerText = "Match Draw. Please play again.";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    //user choice
    console.log(userChoice);

    //computer choice
    let compChoice = randomChoice();
    console.log(compChoice);

    if(userChoice === compChoice){
        draw();
    }
    else{
        let userWin = true;

        if(userChoice === "rock"){
            userWin = compChoice === "scissors" ? true : false;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            userWin = compChoice === "paper" ? true : false;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", () =>{
        let choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
});