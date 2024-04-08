const myVariable = "Mathematics";
const mySearch = "English Language"
const localVariable = "Variable"
console.log(myVariable.length)
console.log(myVariable.charAt(6))
console.log(myVariable.indexOf("at"));
console.log(myVariable.slice(5,8))
console.log(myVariable.toUpperCase)
console.log(myVariable.includes("lish"))//This returns a booleen if not found
console.log(myVariable.includes("tics"))// if present includes returns true
console.log(myVariable.split(""))
console.log("Dave, Frank, John".split(" "));
const myNumber = 42
// A number with a decimal point is a float which refrences the "floting point"
const myFloat = 42.01;
const myString = "42.123abc"
// The Number.parseFloat() method parses an argument and returns a floating point number. 
// if a number cannot be parsed from the argument, it returns "NOT A NUMBER"NAN
// To fix formats a number according to how many dp you provide as a parameter
console.log(myNumber);
console.log(myFloat);
console.log(myFloat.toFixed(2));
//This is an e.g of chaining methods
console.log(Number.parseFloat(myString).toFixed(2))