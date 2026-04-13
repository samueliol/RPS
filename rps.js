/* 
random number from 1 to 3
if 1, var = "rock"..

*/
// const prompt = require("prompt-sync")()

let humanScore = 0
let computerScore = 0
let rodadas = 0
let humanSelection = ""
function getComputerChoice(){
    let compOpt 
    let RandNum = Math.floor((Math.random() * 3) +1) 
    switch(RandNum){
        case 1: 
        compOpt = "rock";
        break;

        case 2:
        compOpt = "paper";
        break;

        case 3:
        compOpt = "scissors";
        break;
    }
    return compOpt
}

let rockBtn = document.querySelector("#rock") 
let paperBtn = document.querySelector("#paper") 
let scissorsBtn = document.querySelector("#scissors") 

function humanChoice(e){
    humanSelection = e.target.id 
    playRound(humanSelection, getComputerChoice())
}

rockBtn.addEventListener("click", humanChoice)
paperBtn.addEventListener("click", humanChoice)
scissorsBtn.addEventListener("click", humanChoice)



// let input = document.querySelector("#userOpt")
// input.addEventListener("keydown", (e) => {
//     if (e.key == "Enter"){
//         input.focus()
//         humanSelection = input.value
//         input.value = ""
//         playRound(humanSelection, getComputerChoice())
//     }
// })
let divRes = document.querySelector("#results")
let para = document.createElement("p")


function playRound(userOpt, compOpt){
        
        if (userOpt == compOpt){
            para.textContent = `You: ${userOpt}. Computer: ${compOpt}. "Empate!"`
            divRes.appendChild(para)
            rodadas++

        }else if (userOpt == "rock" && compOpt == "paper"){
            para.textContent = `You: ${userOpt}. Computer: ${compOpt}. "You Lost!"`
            divRes.appendChild(para)
            rodadas++
            computerScore++

        }else if (userOpt == "rock" && compOpt == "scissors"){
            para.textContent = `You: ${userOpt}. Computer: ${compOpt}. "You Win!"`
            divRes.appendChild(para)
            rodadas++
            humanScore++
        }else if (userOpt == "paper" && compOpt == "scissors"){
            para.textContent = `You: ${userOpt}. Computer: ${compOpt}. "You Lost!"`
            divRes.appendChild(para)
            rodadas++
            computerScore++
        }else if (userOpt == "paper" && compOpt == "rock"){
            para.textContent = `You: ${userOpt}. Computer: ${compOpt}. "You Win!"`
            divRes.appendChild(para)
            rodadas++
            humanScore++
        }else if (userOpt == "scissors" && compOpt == "rock"){
            para.textContent = `You: ${userOpt}. Computer: ${compOpt}. "You Lost!"`
            divRes.appendChild(para)
            rodadas++
            computerScore++
        }
        else if (userOpt == "scissors" && compOpt == "paper"){
            para.textContent = `You: ${userOpt}. Computer: ${compOpt}. "You Win!"`
            divRes.appendChild(para)
            rodadas++
            humanScore++
        }

    if (humanScore == 5 || computerScore == 5){
            endGame()
        }
}
function endGame(){
    let para = document.createElement("p")
    if (humanScore > computerScore){
        para.textContent = `End of the game! You: ${humanScore} wins. Computer: ${computerScore} wins. "You WON!"`
        divRes.appendChild(para)
    }else if (humanScore == computerScore){
        para.textContent = `End of the game! You: ${humanScore} wins. Computer: ${computerScore} wins. "Its a DRAW!"`
        divRes.appendChild(para)

    }else{
        para.textContent = `End of the game! You: ${humanScore} wins. Computer: ${computerScore} wins. "You LOST!"`
        divRes.appendChild(para)

    }
    humanScore = 0
    computerScore = 0
}

/* 
    Get computer choice in a var
    get user choice in a ver
    create a function to compare them and see who won

*/