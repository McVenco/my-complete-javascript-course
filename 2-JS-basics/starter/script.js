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

(function section2_11(){
    /*
    
    Operator precedence
    
    documentation here:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

    */

    var now = 2018;
    var yearEric = 1977;
    var fullAge = 18;

    // Multiple operators
    var isFullAge = now - yearEric >= fullAge; // true
    console.log(isFullAge);

    // Grouping
    var ageEric = now - yearEric;
    var ageMarina = 35;
    var average = (ageEric + ageMarina) / 2;
    console.log(average);

    // Multiple assignments
    var x, y;
    x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
    console.log(x, y);

    // More operators
    x *= 2;
    console.log(x);
    x += 10;
    console.log(x);
    x--;
    console.log(x);

})();

(function section2_12(){
    /*

    Coding challenge #1

    Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
    BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs
    3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
    4. Print a string to the console containing the variable from step 3.
       (Something like "Is Mark's BMI higher than John's? true"). 

    */

    // 1
    var heightEric = 1.87;
    var weightEric = 95;
    var heightMarina = 1.81;
    var weightMarina = 80;

    // 2
    var ericBMI = weightEric / (heightEric * 2);
    var marinaBMI = weightMarina / (heightMarina * 2);

    // 3
    var isEricsBMIHigher = ericBMI > marinaBMI;

    // 4
    console.log('Is Eric\'s BMI higher than Marina\'s? ' + isEricsBMIHigher);

    // alternative solution with a function (not yet discussed in this course but what the heck)
    function bmi(height, weight){
        return weight / (height * 2);
    };

    var functionEricBMI = bmi(1.87, 95);
    var functionMarinaBMI = bmi(1.81, 80);
    console.log("Is Eric's BMI higher than Marina's?", functionEricBMI > functionMarinaBMI);

})();

(function section2_14(){
    /*

    If / else statements

    */

    var firstName = 'Eric';
    var civilStatus = 'married';

    if (civilStatus === 'married') {
        console.log(firstName + ' is married!');
    } else {
        console.log(firstName + ' is available, ladies!');
    }

    var isMarried = false;
    if (isMarried) {
        console.log(firstName + ' is married!');
    } else {
        console.log(firstName + ' is available, ladies!');
    }

    var heightEric = 1.87;
    var weightEric = 95;
    var heightMarina = 1.81;
    var weightMarina = 80;

    var ericBMI = weightEric / (heightEric * 2);
    var marinaBMI = weightMarina / (heightMarina * 2);

    if (ericBMI < marinaBMI) {
        console.log('Marina\'s BMI is higher than Eric\'s.');
    } else {
        console.log('Eric\'s BMI is higher than Marina\'s.');
    }

})();

(function section2_15(){
    /*

    Boolean logic

    */

    var firstName = 'Eric';
    var age = 41;

    if (age < 13) {
        console.log(firstName + ' is a boy');
    } else if (age >= 13 && age < 20) {
        console.log(firstName + ' is a teenager');
    } else if (age >= 20 && age < 30) {
        console.log(firstName + ' is a young man');
    } else {
        console.log(firstName + ' is a man');
    };

})();

(function section2_16(){
    /*

    The Ternary operator and Switch statements

    (the ternary operator is also known as the conditional operator)

    */

    var firstName = 'Eric';
    var age = 41;

    // ternary operator
    age >= 18 ? console.log(firstName + ' drinks whisky.') : console.log(firstName + ' drinks milk.');

    var drink = age >= 18 ? 'beer' : 'juice';
    console.log(drink);

    // switch statement
    var job = 'coder';
    switch (job) {
        case 'developer':
        case 'coder':
            console.log(firstName + ' makes awesome code!');
            break;
        case 'musician':
            console.log(firstName + ' plays guitar in the best band in the world!');
            break;
        case 'actor':
            console.log(firstName + ' is an award-winning stage actor');
            break;
        default:
            console.log(firstName + ' does something else');
    }

    age = 22;
    switch (true) {
        case age < 13:
            console.log(firstName + ' is a boy');
            break;
        case age >= 13 && age < 20:
            console.log(firstName + ' is a teenager');
            break;
        case age >= 20 && age < 30:
            console.log(firstName + ' is a young man');
            break;
        default:
            console.log(firstName + ' is a man');
    }

})();

(function section2_17(){
    /*
    Truthy and Falsy values and equality operators
    */

    // falsy values: undefined, null, 0, '', NaN
    // truthy values: NOT falsy values

    var height;

    height = 23;

    if (height || height === 0) {
        console.log('Variable is defined');
    } else {
        console.log('Variable has NOT been defined');
    }

    // Equality operators
    if (height == '23') {
        console.log('The == operator does type coercion!');
    }

})();

(function section2_18(){
    /*

    Coding challenge #2


    John and Mike both play basketball in different teams.
    In the latest 3 games, John's team scored 89, 120 and 103 points,
    while Mike's team scored 116, 94 and 123 points.

    1. Calculate the average score for each team
    2. Decide which teams wins in average (highest average score),
       and print the winner to the console. Also include the average score in the output.
    3. Then change the scores to show different winners.
       Don't forget to take into account there might be a draw (the same average score)

    4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points.
       Like before, log the average winner to the console.
       HINT: you will need the && operator to take the decision.
       If you can't solve this one, just watch the solution, it's no problem :)
    5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

    */

    var scoreJohn = (89 + 120 + 103) / 3;
    var scoreMike = (116 + 94 + 123) / 3;
 
    switch(true) {
        case scoreJohn > scoreMike:
            console.log('John wins with average score ' + scoreJohn);
            break;
        case scoreJohn < scoreMike:
            console.log('Mike wins with average score ' + scoreMike);
            break;
        default:
            console.log('the score is equal!')
    }

    var scoreMary = (97 + 134 + 105) / 3;

    switch(true) {
        case scoreJohn > scoreMike && scoreJohn > scoreMary:
            console.log('John wins with average score ' + scoreJohn);
            break;
        case scoreMike > scoreJohn && scoreMike > scoreMary:
            console.log('Mike wins with average score ' + scoreMike);
            break;
        case scoreMary > scoreJohn && scoreMary > scoreMike:
            console.log('Mary wins with average score ' + scoreMary);
            break;
        case scoreMary === scoreJohn && scoreMary > scoreMike:
            console.log('Mary and John both win with average score ' + scoreMary);
            break;
        case scoreJohn === scoreMike && scoreJohn > scoreMary:
            console.log('John and Mike both win with average score ' + scoreJohn);
            break;
        case scoreMike === scoreMary && scoreMike > scoreJohn:
            console.log('Mike and Mary both win with average score ' + scoreMike);
            break;
        default:
            console.log('There are three winners with score ' + scoreJohn + '!');
    }

})();

(function section2_20(){
    /*

    Functions

    */

    function calculateAge(birthYear){
        return 2018 - birthYear;
    }

    var ageEric = calculateAge(1977);
    var ageMarina = calculateAge(1982);
    var ageLiese = calculateAge(2015);
    console.log(ageEric, ageMarina, ageLiese);

    function yearsUntilRetirement(year, firstName) {
        var age = calculateAge(year);
        var retirement = 65 - age;
        
        if (retirement > 0) {
            console.log(firstName + ' retires in ' + retirement + ' years.');
        } else {
            console.log(firstName + ' is already retired.')
        }
    }
    
    yearsUntilRetirement(1977, 'Eric');
    yearsUntilRetirement(1982, 'Marina');
    yearsUntilRetirement(1950, 'Theo');
})();

(function section2_21(){
    /*

    Function Statements and Expressions

    */

    // Function declaration
    // function whatDoYouDo(job, firstName) {}

    // Function expression
    var whatDoYouDo = function(job, firstName) {
        switch(job) {
            case 'developer':
            case 'coder':
                return firstName + ' makes awesome code!';
            case 'musician':
                return firstName + ' plays a Telecaster guitar in a cool band';
            case 'actor':
                return firstName + ' is an award-winning stage actor';
            default:
                return firstName + ' does something else';
        }
    }

    console.log(whatDoYouDo('coder', 'Eric'));
    console.log(whatDoYouDo('musician', 'Bruce'));
    console.log(whatDoYouDo('actor', 'Cassidy'));
    console.log(whatDoYouDo('retired', 'Theo'));

})();

(function section2_22(){
    /*

    Arrays

    */

    // Initialize new array
    var names = ['Eric', 'Marina', 'Julian'];
    var years = new Array(1977, 1982, 2017);

    console.log(names, years);
    console.log(names.length);
    console.log(names[2] + ' is born in ' + years[2]);

    // Mutate array data
    names[1] = 'Liese';
    years[1] = 2015;
    console.log(names, years);

    names[names.length] = 'Nicole';
    years[years.length] = 1979;
    console.log(names, years);

    // Different data types
    var eric = ['Eric', 'Vonk', 1977, 'developer', true];

    eric.push('blue');
    eric.unshift('Mr.');
    console.log(eric);
    
    eric.pop();
    eric.pop();
    eric.shift();
    console.log(eric);
    
    console.log(eric.indexOf(23));
    
    var isDesigner = eric.indexOf('designer') === -1 ? 'Eric is NOT a designer' : 'Eric IS a designer';
    console.log(isDesigner);

})();

(function section2_23(){
    /*

    Coding Challenge 3


    John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

    To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

    In the end, John would like to have 2 arrays:
    1) Containing all three tips (one for each bill)
    2) Containing all three final paid amounts (bill + tip).

    */

    var bills = [124, 48, 268];

    function calculateTip(billAmount){
        if (billAmount < 50) {
            return billAmount * 0.2;
        } else if (billAmount >= 50 && billAmount < 200) {
            return billAmount * 0.15;
        } else {
            return billAmount * 0.1;
        }
    }

    var tips = [
        calculateTip(bills[0]),
        calculateTip(bills[1]),
        calculateTip(bills[2])
    ];

    var totals = [
        (bills[0] + tips[0]),
        (bills[1] + tips[1]),
        (bills[2] + tips[2])
    ]

    console.log(tips, totals);

})();