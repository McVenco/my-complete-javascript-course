(function section2_8(){
    /*

    Variables and data types

    */

    var firstName = 'Eric';
    console.log(firstName);

    var lastName = 'Vonk';
    var age = 41;

    var fullAge = true;
    console.log(fullAge);

    var job;
    console.log(job);

    job = 'Front end developer';
    console.log(job);

    // Variable naming rules: variables cannot start with numbers or special characters, except $ or _
    var _3years = 3;
    var ericMarina = 'Eric and Marina';

    // var if = 23;
    // this is not allowed: "if" is a reserved name in Javascript, just like "function", "this", "delete" etc.

})();

(function section2_9(){
    /*

    Variable mutation and type coercion

    */

    var firstName = 'Eric';
    var age = 41;

    // Type coercion
    console.log(firstName + ' ' + age);

    var job, isMarried;
    job = 'Front end developer';
    isMarried = true;

    console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

    // Variable mutation
    age = 'forty one';
    job = 'writer';

    alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

    var lastName = prompt('What is his last name?');
    console.log(firstName + ' ' + lastName);

})();

(function section2_10(){
    /*

    Basic operators

    */

    var year, yearEric, yearMarina;
    currentYear = 2018;
    ageEric = 41;
    ageMarina = 35;

    // Math operators
    yearEric = currentYear - ageEric;
    yearMarina = currentYear - ageMarina;

    console.log(yearEric);

    console.log(currentYear + 2);
    console.log(currentYear * 2);
    console.log(currentYear / 10);

    // Logical operators
    var ericOlder = ageEric > ageMarina;
    console.log(ericOlder);

    // typeof operator
    console.log(typeof ericOlder);                      // boolean
    console.log(typeof ageEric);                        // number
    console.log(typeof 'Eric is older than Marina');    // string
    
    var x;
    console.log(typeof x);                              // undefined
    
    var funcTest = function(){};
    console.log(typeof funcTest);                       // function

    console.log(typeof 1/0);                            // NaN

})();