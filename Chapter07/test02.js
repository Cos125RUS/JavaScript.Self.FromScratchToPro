class Person {
    #firstName;
    #lastName;

    constructor(firstName, lastName){
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    get firstName(){
        return this.#firstName;
    }

    set firstName(firstName){
        this.#firstName = firstName;
    }

    get lastName(){
        return this.#lastName;
    }

    set lastName(lastName){
        this.#lastName = lastName;
    }
}

let people = new Person("John", "Marlboro");
console.log(people.firstName, people.lastName);
people.firstName = "Sam";
people.lastName = "Smith";
console.log(people.firstName, people.lastName);
Person.prototype.introduce = function(){
    console.log("Hi, i'm", this.firstName);
}
people.introduce();