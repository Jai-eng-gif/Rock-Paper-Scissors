let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg");

const userScoreP=document.querySelector("#user-score");
const compScoreP=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const option=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame=()=>{
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if (userWin){
        userScore++;
        userScoreP.innerText=userScore;
        msg.innerText=`You Win! Yours ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green"
    }else{
        compScore++;
        compScoreP.innerText=compScore;
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor="red"
    }
}

const playGame=(userChoice)=>{
    // Generate computer choice
    const compChoice=genCompChoice();
    console.log("computer chocie is ",compChoice)
    if(userChoice===compChoice){
        drawGame()  
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            // scissor,paper
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            // scissor,rock
            userWin=compChoice==="scissors"?false:true;
        }else{
            //rock ,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id")
        playGame(userChoice);

    })

})