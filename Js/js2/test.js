function pizzaFactory(pizzaSize){
    const crust = "original";
    const size = pizzaSize;
    return{
        bake:() => console.log(`Baking a ${size} ${crust} crust pizza.`)
    };
}

const myPizza = pizzaFactory("small");
myPizza.bake();

class Pizza{
    crust = "original";
    #sauce = "traditional"; //Both below indicate a private class
    #size;
    
    constructor(pizzaSize){
        this.#size = pizzaSize
    }

    getCrust(){
        return this.crust;
    }
    setCrust(pizzaCrust){
        this.crust = pizzaCrust
    } 
    hereYouGo(){
        console.log(
            `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`
        );
    }
}

const myPrixxa = new Pizza("large");
myPrixxa.hereYouGo();
console.log(myPrixxa.getCrust())

const myObj = {
    name:"Idongesit",
    hobbies:["eat","sleep","code","repeat"],
    hello:function(){
        console.log("Hello")
    }
};
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJson = JSON.stringify(myObj);
console.log(sendJson);
console.log(typeof sendJson);
console.log(sendJson.name);

const receiveJson = JSON.parse(sendJson);
console.log(receiveJson);
console.log(typeof receiveJson); 