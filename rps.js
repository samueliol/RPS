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
let div = document.createElement("div")
function playRound(userOpt, compOpt){
        
        if (userOpt == compOpt){
            console.log(`You: ${userOpt}. Computer: ${compOpt}`)
            console.log( "Empate!")
            rodadas++

        }else if (userOpt == "rock" && compOpt == "paper"){
            console.log(`You: ${userOpt}. Computer: ${compOpt}`)
            console.log("You lost")
            rodadas++
            computerScore++

        }else if (userOpt == "rock" && compOpt == "scissors"){
            console.log(`You: ${userOpt}. Computer: ${compOpt}`)
            console.log("You Win!")
            rodadas++
            humanScore++
        }else if (userOpt == "paper" && compOpt == "scissors"){
            console.log(`You: ${userOpt}. Computer: ${compOpt}`)
            console.log("You lost")
            rodadas++
            computerScore++
        }else if (userOpt == "paper" && compOpt == "rock"){
            console.log(`You: ${userOpt}. Computer: ${compOpt}`)
            console.log("You Win!")
            rodadas++
            humanScore++
        }else if (userOpt == "scissors" && compOpt == "rock"){
            console.log(`You: ${userOpt}. Computer: ${compOpt}`)
            console.log("You lose!")
            rodadas++
            computerScore++
        }
        else if (userOpt == "scissors" && compOpt == "paper"){
            console.log(`You: ${userOpt}. Computer: ${compOpt}`)
            console.log("You Win!")
            rodadas++
            humanScore++
        }

    if (rodadas == 3){
            endGame()
        }
}
function endGame(){
    if (humanScore > computerScore){
        console.log(`End of the game! You: ${humanScore} wins. Computer: ${computerScore} wins.`)
        console.log("You WON!")
    }else if (humanScore == computerScore){
        console.log(`End of the game! You: ${humanScore} wins. Computer: ${computerScore} wins.`)
        console.log("Its a DRAW!")
    }else{
        console.log(`End of the game! You: ${humanScore} wins. Computer: ${computerScore} wins.`)
        console.log("You LOST!")
    }
}

/* 
    Get computer choice in a var
    get user choice in a ver
    create a function to compare them and see who won

*/