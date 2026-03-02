/* 
random number from 1 to 3
if 1, var = "rock"..

*/

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
    let userOpt = prompt("Digite Rock, Paper or Scissors").toLowerCase()
    return userOpt

}

getComputerChoice()
getUserChoice()

function RPS(){
    let userOpt = getUserChoice ()
    let compOpt = getComputerChoice()

    if (userOpt == compOpt.toLowerCase()){
        console.log( "Empate!")
    }
}

/* 
    Get computer choice in a var
    get user choice in a ver
    create a function to compare them and see who won

*/