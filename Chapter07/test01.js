class MyClass {
    constructor(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
}

let obj = new MyClass("arg1", "arg2");
console.log(obj);

class Person {
    constructor(firstName = "John", lastName = "Doe"){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    hello() {
        console.log("Hi,", this.firstName, this.lastName);
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

let jd = new Person();
let samSmith = new Person("Sam", "Smith");
console.log("Hi,", jd.firstName, jd.lastName);
console.log("Hi,", samSmith.firstName, samSmith.lastName);
samSmith.hello();
console.log(samSmith.getFullName());