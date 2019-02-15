// arguments object - no longer bound with arrow functions
// console.log(arguments); with a normal es5 function, inside of a arrow function this will nog longer work. The arguments refers to a, b.

const add = (a, b) => {
    return a + b;
};

console.log(add(5, 5));

// this keyword - no longer bound

// You can add methods to a object property.
const user = {
    name: 'Andrew',
    cities: ['Den Haag', 'Amsterdam', 'Haarlem'],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);
        const that = this;

        this.cities.forEach(function (city) {
            //this. name is nog accesable from inside this function, it is however accesable inside of the object above and this is because the this keyword is bound.
            //Therefore we can do a workaround, by putting everything from the this keyword inside a const/let and then you can access it from inside the function below.
            console.log(that.name + ' Has lived in: ' + city);
        });
    }
};

user.printPlacesLived();

const person = {
    name: 'Sjon',
    cities: ['Amsterdam', 'Den Haag', 'Haarlem'],
    printPlacesLivedArrowFunction: function () {
        // Inside of a arrow function the this keyword is no longer bound!!! But if you need to bound the this keyword like above, use a regular function.
        // This is because this will then look in the parent scope, there this refers not to the properties inside of the object.
        this.cities.forEach((city) => {
            console.log(this.name + ' Has lived in ' + city);
        }); 
    }
};

person.printPlacesLivedArrowFunction();

// example with es6 methods inside of a object, you can shorten it.
const human = {
    name: 'Henk',
    cities: ['Amsterdam', 'Den Haag', 'Haarlem'],
    printPlacesLivedArrowFunction() { //this is a es6 method on a object.
        this.cities.forEach((city) => {
            console.log(this.name + ' Has lived in ' + city);
        });
    }
};

human.printPlacesLivedArrowFunction();

// Map is an alternative to forEach, in a forEach you can do something with each item and with map you can actually transform each item getting a new array back.
const map = {
    name: 'map',
    cities: ['Amsterdam', 'Den Haag', 'Haarlem'],
    printPlacesLivedArrowFunction() { //this is a es6 method on a object.
        const cityMessages = this.cities.map((city) => { // map works like an forEach but you can transform the content.
            if (city === 'Amsterdam') {
               return city + ' Joden';
            }
            return city; //returns a value to the printPlacesLivedArrowFunction method/function, that function in turn returns a value cityMessages.
        });
        return cityMessages;  
    }
};

console.log(map.printPlacesLivedArrowFunction());

const userMap = {
    name: 'Tommy',
    cities: ['Schiphol', 'New York', 'Dublin'],
    printPlacesLivedWithMap() {
        return this.cities.map((city) => this.name + ' Has lived In ' + city);
    }
};

console.log(userMap.printPlacesLivedWithMap());

const multiplier = {
    number: [5, 10, 15, 20],
    multiplyBy: 2,
    multiply() {
        return this.number.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());

