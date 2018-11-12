(function section5_61(){

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

})();

(function section5_63(){

    // Object.create

    var personProto = {
        calculateAge: function(){
            console.log(2018 - this.yearOfBirth);
        }
    };

    var john = Object.create(personProto);
    john.name = 'John';
    john.yearOfBirth = 1990;
    john.job = 'teacher';

    var jane = Object.create(personProto, {
        name: { value: 'Jane' },
        yearOfBirth: { value: 1969 },
        job: { value: 'designer'}
    });

})();

(function section5_64(){

    // Primitives vs. Objects

    // Primitives
    var a = 23;
    var b = a;
    a = 46;
    console.log(a); // 46
    console.log(b); // 23

    // Objects
    var obj1 = {
        name: 'John',
        age: 26
    };
    var obj2 = obj1;
    obj1.age = 30;
    console.log(obj1.age); // 30
    console.log(obj2.age); // 30

    // Functions
    var age = 27;
    var obj = {
        name: 'Jonas',
        city: 'Lisbon'
    };

    function change(a, b) {
        a = 30;
        b.city = 'San Francisco';
    }

    change(age, obj);

    console.log(age); // 27
    console.log(obj.city); // San Francisco

})();