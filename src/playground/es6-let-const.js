// Start with const, later on wen we need to changed it we can change it to let. 

var nameVar = 'Andrew';
nameVar = 'Mike';
console.log('nameVar', nameVar);

// Let can be changed somewhere else in the code, but you can not make na new  let variable with the same name.
// This means that you can set a name and a value, and somewhere else you can change the value but not the name. 
let nameLet = 'Jen';
nameLet = 'Klaas';
console.log('nameLet', nameLet);

//const is read only, wen const is set you can't change it somewhere else in the code
//const variable are block scoped, this means that const from inside {} of a if statement but not outside of the {}
// The same is true for let
const nameConst = 'Frank';
// nameConst = 'Jan';
console.log('nameConst', nameConst);

function getPetName() {
    //You can only access the var petName from inside of the scope of the function it resides in.
    //This is also true for let and const.
    var petName = 'Hal';
    return petName;
};

//Block scoping

var fullName = 'Andrew Mead';

if (fullName) {
    // fullName.split(' ') = split the string into an array of strings, you can also split on a letter but in 
    // this example we split on the spaces. Thereafter we fill the var firstName with the first item in the array.
    // Var variables are function scoped, so the var inside of the if statement is still avaliable from outside the if statement.
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}