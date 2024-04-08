const myObj = {name:"Idongesit"}

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning: "Coffee",
        afernoon: "Iced Tee"
    },
    action: function (){
        return `Time for ${this.beverage.afernoon}`;
    }
};
console.log(anotherObj.action());

const vehicle = {
    wheel: 4,
    engine: function(){
        return "Vrooooom"
    }
};

const truck = Object.create(vehicle);
truck.doord = 2;
console.log(truck);
console.log(truck.wheel)// This occurs due to inheritance
console.log(truck.engine());
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function (){
    return "Whooosh"
};//This function overrides the earlier function
console.log(car.engine)

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};
console.log(Object.keys(band));
console.log(Object.values(band));

for(let job in band){
    console.log(`On ${job}, it's ${band[job]}!`);
}

//destructuring objects
const {vocals,guitar,bass,drums} = band;
console.log(guitar);

class Pizza{
    constructor(pizzaType,pizzaSize){
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "orginal";
        this.topping = [];
    }
    getCrust(){
        return this.crust;
    }
    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }
    getToppings(){
        return this.topping
    }
    setToppings(topping){
        this.topping.push(topping);
    }
    bake(){
        console.log(
            `Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`
        );
    }
}
const myPizza = new Pizza("pepperoni","small");
myPizza.setCrust("thin");
myPizza.bake();
myPizza.setToppings("sausage");
myPizza.setToppings("olives");
console.log(myPizza.getToppings());

class Prizza{
    constructor(prizzaSize){
        this._size = prizzaSize;
        this._crust = "original";
    }
    getCrust(){
        return this._crust;
    }
    setCrust(prizzaCrust){
        this._crust = prizzaCrust;
    }
}

class SpecialityPrizza extends Prizza{
    constructor (prizzaSize){
        super(prizzaSize);
        this.type = "The Works";
    }
    slice(){
        console.log(`Our ${this.type} ${this.size} prizza has 8 slices.`);
    }
}

const mySpeciality = new SpecialityPrizza("medium");
mySpeciality.slice();
