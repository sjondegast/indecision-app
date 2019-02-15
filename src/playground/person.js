export const isAdult = (age) => {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

export const canDrink = (age) => age >= 21;

export default (age) => age >= 65;

/*
form import file, app.js

// import './utils.js'
import subtract, { square, add } from './utils.js'
import isSenior, { isAdult, canDrink } from './person'

console.log('app is running!');
console.log(square(5));
console.log(add(5, 10));
console.log(subtract(100, 81));

console.log(isAdult(16));
console.log(canDrink(22));
console.log("IS senior? ", isSenior(65));

*/



