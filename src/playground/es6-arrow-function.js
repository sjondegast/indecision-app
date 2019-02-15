const square = function (x) {
    return x * x;
};

//Verbose syntax
// es6 arrow functions are allways anonymous, you can't name it.
// if you want to reference to a arrow function later, put it inside a variable as you can see below.
const squareArrow = (x) => {
    return x * x;
};

//shorthand syntax
// arrow function expression syntax, if it only returns a single expression like below you can simplefy it.
const squareArrowTwo = (x) => x * x;

console.log(square(5));
console.log(squareArrow(8));
console.log(squareArrowTwo(4));

// Challenge - Use arrow functions
// Get firstName('Mike Smith') - > 'Mike
// Create regular arrow function
// Create arrow function using shorthand syntax

// const fullName = 'Sjon Gast';
const firstName = (fullName) => {
    return fullName.split(' ')[0];
};    

console.log(firstName('Mike Strong'));

const firstNameShort = (fullName) => fullName.split(' ')[0];
console.log(firstNameShort('Sjon Gast'));