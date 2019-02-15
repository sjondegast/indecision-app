class Person {
    //name = 'anonymous' -> this will set the value name to anonymous by default if no name is given.
    constructor(name = 'anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() { //method
        return `${ this.name.toUpperCase() } is ${this.age} years ${this.age <= 16 ? 'young' : 'old'}`;
    }
    getDescription() {
        return `${this.name.length > 0 ? this.name : 'anonymous'} is ${this.age} old`;
    }
}

class Student extends Person { //subClass of Person, it shares content. extends from person.
    constructor (name, age, major) { //need to add everything from Person then new content like major.
        super(name, age); //extract the constructor of the super(class)..
        this.major = major; // get content dedicated to the subClass - major.
    }
    hasMajor() { // you can use the methods of the super(class) and also add new methods that only excist in the subclass
        // return `${this.name} is ${this.age} year(s) old and does the major ${this.major}`;
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }

        return description;
    }

}

class Traveler extends Person {
    constructor (name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let Greeting = super.getGreeting();

        if (this.hasLocation()) {
            Greeting += `, I'm visiting from ${this.homeLocation}`;
        }
        return Greeting;
    }
}

const traveler = new Traveler('Sjon', 20, 'Den Haag');
console.log(traveler.getGreeting());

//make an instance of the class person
const me = new Person('Sjon', 15);
// console.log(me.getGreeting());
console.log(me.getDescription());

const meStudent = new Student('Mark', 15, 'CMD');
console.log(meStudent.getDescription());

const meStudentTwo = new Student('Sabrina', 0 ,'');
console.log(meStudentTwo.getDescription());

// new class, subclass of person named traveler extends person
// Add support for homeLocation
// override getGreeting
//1. if there is a home location, include it I'm visiting from New York
//2. no home location, return hi i'm adrew mead