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

(function section5_65(){

    // First Class Functions: passing functions as arguments

    var years = [1977, 1965, 1937, 2005, 1998];

    function arrayCalc(arr, fn) {
        var arrRes = [];
        for (var i = 0; i < arr.length; i++) {
            arrRes.push(fn(arr[i]));
        }
        return arrRes;
    }

    // callback functions:
    function calculateAge(el){
        return 2018 - el;
    }

    function isFullAge(el){
        return el >= 18;
    }

    function maxHeartRate(el){
        if(el >= 18 && el <= 81){
            return Math.round(206.9 - (0.67 * el));
        } else {
            return -1;
        }
        
    }

    var ages = arrayCalc(years, calculateAge);
    var fullAge = arrayCalc(ages, isFullAge);
    var ageHeartRate =  arrayCalc(ages, maxHeartRate);

    console.log(ages);
    console.log(fullAge);
    console.log(ageHeartRate);

})();

(function section5_66(){

    // First Class Functions: functions returning functions

    function interviewQuestion(job) {
        if (job === 'designer') {
            return function(name) {
                console.log(name + ', can you please explain what UX design is?');
            }
        } else if (job === 'teacher') {
            return function(name) {
                console.log('What subject do you teach, ' + name + '?');
            }
        } else {
            return function(name) {
                console.log('Hello ' + name + ', what do you do?');
            }
        }
    }

    var teacherQuestion = interviewQuestion('teacher');
    var designerQuestion = interviewQuestion('designer');

    teacherQuestion('John');
    designerQuestion('Mark');
    designerQuestion('Jane');

    interviewQuestion('teacher')('Mark');

})();

(function section5_67(){

    // Immediately Invoked Function Expressions (IIFE)

    function game() {
        var score = Math.random() * 10;
        console.log(score >= 5);
    }
    game();


    (function () {
        var score = Math.random() * 10;
        console.log(score >= 5);
    })();

    //console.log(score);


    (function (goodLuck) {
        var score = Math.random() * 10;
        console.log(score >= 5 - goodLuck);
    })(5);

})();

(function section5_68(){

    // Closures

    function retirement(retirementAge){
        var a = ' years left until retirement.';
        return function(yearOfBirth){
            var age = 2018 - yearOfBirth;
            console.log((retirementAge - age) + a);
        }
    }

    var retirementUS = retirement(66);
    var retirementGermany = retirement(65);
    var retirementIceland = retirement(67);
    
    retirementGermany(1990);
    retirementUS(1990);
    retirementIceland(1990);

    // retirement(67)(1982);

    // function from section 5.66:
    /*
    function interviewQuestion(job) {
        if (job === 'designer') {
            return function(name) {
                console.log(name + ', can you please explain what UX design is?');
            }
        } else if (job === 'teacher') {
            return function(name) {
                console.log('What subject do you teach, ' + name + '?');
            }
        } else {
            return function(name) {
                console.log('Hello ' + name + ', what do you do?');
            }
        }
    }

    */

    // rewritten as closure:
    function interviewQuestion(job){
        return function(name){
            if (job === 'designer') {
                console.log(name + ', can you please explain what UX design is?');
            } else if (job === 'teacher') {
                console.log('What subject do you teach, ' + name + '?');
            } else {
                console.log('Hello ' + name + ', what do you do?');
            }
        }
    }

    interviewQuestion('teacher')('John');
    interviewQuestion('designer')('Mark');

})();