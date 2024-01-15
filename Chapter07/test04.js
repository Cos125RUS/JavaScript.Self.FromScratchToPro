class Employee {
    firstName;
    lastName;
    experience;

    constructor(firstName, lastName, experience) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.experience = experience;
    }


}


let employers = [];
employers.push(new Employee("Sam", "Smith", 10));
employers.push(new Employee("Amy", "Adams", 14));
Employee.prototype.info = function() {
    return this.firstName + " " + this.lastName + " " + this.experience;
}
employers.forEach(e => console.log(e.info()));