// let myName = prompt("Please enter your name.");
// if(myName){
//     console.log(myName.length);
//     console.log(myName.trim().length);
//     console.log(myName.trim());
// }else{
// console.log("You didn't enter your name.");
// }

let playGame = confirm("Shall we play rock, paper, or scissors?");

if (playGame) {
    while(playGame){
    const playerChoice = prompt("Please enter rock, paper, or scissors.");

    if (playerChoice || playerChoice === "") { // Check if the user canceled the prompt
        const playerOne = playerChoice.trim().toLowerCase();

        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            const computerChoice = Math.floor(Math.random() * 3);
            const rpsArray = ["rock","paper","scissors"];
            const computer = rpsArray[computerChoice];
            
            const result =
                playerOne === computer
                ? "Tie game!"
                :playerOne === "rock" && computer === "paper"
                ? `playerOne: ${playerOne}\nComputer :${computer}\nComputer wins!`
                :playerOne === "paper" && computer === "scissors"
                ?`playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                :playerOne === "scissors" && computer === "rock"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
            alert(result);
           playGame = confirm("Play again?");
           if(!playGame) alert ("Ok, thanks for playing.");
            continue;
        } else {
            alert("You didn't enter rock, paper, or scissors.");
            continue;
        }
    } else {
        alert("I guess you changed your mind. Maybe next time.");
        break;
    }
}
} else {
    alert("Ok, maybe next time.");
}
