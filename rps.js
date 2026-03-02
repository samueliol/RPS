/* 
random number from 1 to 3
if 1, var = "rock"..

*/
// const prompt = require("prompt-sync")()
function getComputerChoice(){
    let compOpt 
    let RandNum = Math.floor((Math.random() * 3) +1) 
    switch(RandNum){
        case 1: 
        compOpt = "Rock";
        break;

        case 2:
        compOpt = "Paper";
        break;

        case 3:
        compOpt = "Scissors";
        break;
    }
    return compOpt
}

function getUserChoice(){
    let userOpt = prompt("Digite Rock, Paper or Scissors: ").toLowerCase()
    return userOpt

}
RPS()
function RPS(){
    let userOpt = getUserChoice ()
    let compOpt = getComputerChoice().toLowerCase()

    if (userOpt == compOpt){
        console.log(`You: ${userOpt}. Computer: ${compOpt}`)
        console.log( "Empate!")
    }else if (userOpt == "rock" && compOpt == "paper"){
      console.log(`You: ${userOpt}. Computer: ${compOpt}`)
      console.log("You lost")
    }else if (userOpt == "rock" && compOpt == "scissors"){
      console.log(`You: ${userOpt}. Computer: ${compOpt}`)
      console.log("You Win!")
    }else if (userOpt == "paper" && compOpt == "scissors"){
      console.log(`You: ${userOpt}. Computer: ${compOpt}`)
      console.log("You lost")
    }else if (userOpt == "paper" && compOpt == "rock"){
      console.log(`You: ${userOpt}. Computer: ${compOpt}`)
      console.log("You Win!")
    }else if (userOpt == "scissors" && compOpt == "rock"){
      console.log(`You: ${userOpt}. Computer: ${compOpt}`)
      console.log("You lose!")
    }
    else if (userOpt == "scissors" && compOpt == "paper"){
      console.log(`You: ${userOpt}. Computer: ${compOpt}`)
      console.log("You Win!")
    }
}


/* 
    Get computer choice in a var
    get user choice in a ver
    create a function to compare them and see who won

*/