/* 
random number from 1 to 3
if 1, var = "rock"..

*/

function getComputerChoice(){
    let opt 
    let RandNum = Math.floor((Math.random() * 3) +1) 
    switch(RandNum){
        case 1: 
        opt = "Rock";
        break;

        case 2:
        opt = "Paper";
        break;

        case 3:
        opt = "Scissors";
        break;
    }
    console.log(opt)
}

getComputerChoice()