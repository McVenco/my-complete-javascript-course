// Function contructor


// the standard way of creating objects as we did before:
// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = 
function(){
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'job');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


// Extra: create my own Object

var Car = function(brand, model, year, insurance){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.insurance = insurance;
}

Car.prototype.isOldtimer =
function(){
    if (2018 - this.year > 40) {
        console.log(this.brand + ' ' + this.model + ' is an oldtimer');
    } else if (2018 - this.year > 25) {
        console.log(this.brand + ' ' + this.model + ' is a youngtimer');
    } else {
        console.log(this.brand + ' ' + this.model + ' is pretty new');
    }
};

var tesla = new Car('Tesla','Model S', 2016, true);
var citroen = new Car('Citroen', 'AX', 1990, true);
var ferrari = new Car('Ferrari', '250GT Lusso', 1960, false);

tesla.isOldtimer();
citroen.isOldtimer();
ferrari.isOldtimer();
