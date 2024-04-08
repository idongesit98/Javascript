let myNumber = 0;
while (myNumber < 50){
    myNumber += 2 // myNumber ++
    //console.log(myNumber)
}
//Don't create an infinite loop!!!!,oops but i already did it

let loopNumber = 50;
while (loopNumber < 50){
    loopNumber += 2;
    //console.log(loopNumber)
}
do{
   //console.log(loopNumber)
}while (loopNumber < 50)

for (let i = 1; i <= 10; i++){
    //console.log(i)
}

let myName = "Idongesit";
for(let i = 0; i < myName.length; i++){
    console.log(myName.charAt(i));
}

let myCrew = "Idongesit";
let counter = 0;
let myLetter;
while(true){
    myLetter = myCrew[counter];
    console.log(myCrew);
    if(myLetter === "t") break; // This keyword allows you to break out of the loop when you reach a particular variable
    counter++;
}

function getUserNameFromEmail(email){
    return email.slice(0,email.indexOf("@"));
}
console.log(getUserNameFromEmail("User@Github.com"));
//Or you could create an anonymous function
// const getUserNameFromEmail = function(email){ 
//     return email.slice(0, email.indexOf("@"));
// }

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(toProperCase("iDonGeSIT"));