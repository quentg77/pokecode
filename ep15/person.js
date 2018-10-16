
class Person {
    constructor(firstname, age) {

        if (typeof firstname !== 'undefined') {
            this.firstname = firstname;
            this.age = age;
            //console.log(firstname);
        }
    }

    hi() {
        console.log(`Hello, my name is ${this.firstname} and I'm ${this.age}`);
    }
}

module.exports = Person;