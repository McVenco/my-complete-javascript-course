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
var ericMarina = 'Eric en Marina';

// var if = 23;
// this is not allowed: "if" is a reserved name in Javascript, just like "function", "this", "delete" etc.


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
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
