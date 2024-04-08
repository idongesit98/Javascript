switch(Math.floor(Math.random() * 3 + 1)){
    case 1:
        console.log(1);
        break;
    
    case 2:
        console.log(2);
        break;
    
    case 3:
        console.log(3)
        break;
    
        default:
            console.log("No match");
}

let playerOne = "scissors";
let computer = "rock";

switch (playerOne){
    case computer:
    console.log("Tie game")
    break;

    case "rock":
        if(computer === "paper"){
            console.log("computer wins!");
        }else{
            console.log("playerOne wins!");
        }
        break;
    
    case "paper":
        if(computer === "scissors"){
            console.log("computer wins")
        }else{
            console.log("playerOne wins!");
        }
        break;
    default:
        if(computer === "rock"){
            console.log("computer wins");
        }else{
            console.log("playerOne wins!");
        }

        //Tenary Operator
        //syntax
        // condition ? ifTrue : ifFalse

        let soup = "Chicken Noodle Soup"
        let isCustomerBanned = false;
        let soupAccess = isCustomerBanned
        ? "Sorry, no soup for you!" 
        :  soup
        ?  `Yes, we have ${soup} today.` 
        :  "Sorry, no soup today.";

     console.log(soupAccess);

     let testScores = 88;
let myGrade = 
  testScores > 89
    ? "A"
    : testScores > 79
    ? "B"
    : testScores > 69
    ? "C"
    : testScores > 59
    ? "D"
    : "F";

console.log(`My test grade is a ${myGrade}`);

let playerTwo = "paper";
let computerTwo = "rock";
let result = 
playerTwo === computer
? "Tie game!"
: playerTwo === "rock" && computer === "paper"
? "Computer wins!"
:playerTwo === "paper" && computerTwo == "scissors"
? "Computer wins!"
:playerTwo === "scissors" && computerTwo === "rock"
? "Computer wins!"
: "playerTwo wins!";
console.log(result);
}