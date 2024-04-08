const myArray = [];
//add elements to the array

myArray[0] = "Idongesit";
myArray[1] = 1004;
myArray[2] = false;

// refer to an array
console.log(myArray);

console.log(myArray.length);
console.log(myArray[myArray.length - 1]);
console.log(myArray[1]);
myArray.push("school")
console.log(myArray);

const lastItem = myArray.pop();
console.log(lastItem);

const newLength = myArray.unshift(42); //unshift add to the beginning of the array,pop add to the back
//shift removes from the front, un

console.log(newLength)
//using the delete method can cause errors cause the position is still there but shows undefined
// instead use .splice it can also be used to add at a particular position

myArray.splice(1,1,42)
console.log(myArray);
console.log(myArray[1]);

const alpaArrays1 = ["A","B","C","D","E","F","G"];
const alpaArrays2 = ["H","I","J","K","L","M","N"];
// const newAlphArrays = alpaArrays.slice(2,5);
// console.log(newAlphArrays);

// alpaArrays.reverse();
// console.log(alpaArrays)
// const newString = alpaArrays.join();
// console.log(newString)

const newArray = [...alpaArrays1,...alpaArrays2];
console.log(newArray)

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];
const clothesShelfA = ["tank tops", "t-shirts","jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
//or
console.log(equipShelfB[0]);

const equipDept = [equipShelfA,equipShelfB];
const clothDept = [clothesShelfA,clothesShelfB];
console.log(equipDept[0][1]);
console.log(clothDept[1][0])

const sportStore = [equipDept,clothDept];
console.log(sportStore[0][0][1]); 
console.log(sportStore[1][1][0]);