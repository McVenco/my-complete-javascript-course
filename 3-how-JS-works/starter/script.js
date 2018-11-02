(function section3_39(){

    /*
    
    Lecture: Hoisting

    */

    /* FUNCTIONS */

    // Function declaration - hoisting works
    calculateAge(1965);

    function calculateAge(year) {
        console.log(2016 - year);
    }


    // Function expression - hoisting does not work here

    // retirement(1956);
    var retirement = function(year) {
        console.log(65 - (2016 - year));
    }


    /* VARIABLES */

    console.log(age); // undefined
    var age = 23;
    console.log(age); // 23

    function foo() {
        console.log(age);
        var age = 65;
        console.log(age);
    }
    
    foo(); // 65
    console.log(age); // 23

})();

(function section3_40(){

    /*

    Lecture: Scoping

    */


    // First scoping example

    var a = 'Hello!';
    first();

    function first() {
        var b = 'Hi!';
        second();

        function second() {
            var c = 'Hey!';
            console.log(a + b + c);
        }
    }


    // Example to show the difference between execution stack and scope chain

    var a = 'Hello!';
    first();

    function first() {
        var b = 'Hi!';
        second();

        function second() {
            var c = 'Hey!';
            third()
        }
    }

    function third() {
        var d = 'John';
        console.log(a + d); // b and c are undefined here
    }

})();

(function section3_42(){

    /*

    Lecture: The this keyword

    */

    // console.log(this); // window object

    // calculateAge(1977); // also the window object because the function is attached to the global object, it's not to a method

    // function calculateAge(year) {
    //     console.log(2016 - year);
    //     console.log(this);
    // }

    var john = {
        name: 'John',
        yearOfBirth: 1990,
        calculateAge: function() {
            console.log(this); // the john Object
            console.log(2016 - this.yearOfBirth); // 26
            
            // function innerFunction() {
            //     console.log(this); // window object, because the innerFunction() is just a regular function, not a method of the john object
            // }
            // innerFunction();
        }
    }

    john.calculateAge();

    var mike = {
        name: 'Mike',
        yearOfBirth: 1984
    };

    mike.calculateAge = john.calculateAge; // this is called 'method borrowing'
    mike.calculateAge();

})();