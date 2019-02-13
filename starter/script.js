/******************************
* Variables and data types
*/
/*
var firstName = 'John' ;
console.log (firstName) ;

var lastName = 'Smith' ;
var age = 28; 
var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/


/******************************
* Variable mutation and type coercion


var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + ' Is he married? ' + isMarried);


// Variable Mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + ' Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);



/******************************
* Basic operator


var yearJohn, yeahmark
now = 2018
ageJohn = 28;
ageMark = 33;



// Math operators
yearJohn = now - ageJohn;
yeahMark = now - ageMark;

console.log(yearJohn);
console.log(now + 2);
console.log(now / 10);



// Logical operators

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);



// typeof operator
console.group(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);


/******************************
* Operator precedence


var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping 
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 -6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *=2;
console.log(x);
x +=10;
console.log(x);
x--
console.log(x);

/******************************
* If / else statements

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married')
} else {
    console.log(firstName + ' will hopefully marry soon :) ');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married')
} else {
    console.log(firstName + ' will hopefully marry soon :) ');
}

/******************************
* Boolean logic


var firstName = 'John';
var age = '20';

if (age < 20) {
    console.log(firstName + ' is a boy. ');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager. ');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man. ');
} else {
    console.log(firstName + ' is a man. ');
}

/******************************
* The Ternary Operator and Switch Statements
*/

var firstName = 'John';
var age = '14';

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');
var drink = 18 >= 18 ? 'beer' : 'juice';
console.log(drink);

/*if (age >=18) {
    var drink = 'beer';
} else { 
    var drink = 'juice';
}*/

// Swith statement
    var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites');
        break;
    default:
        console.log(firstName + ' does something else');

}

age = 56; 
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy. ');
    break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager. ');
    break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man. ');
    break;
    default:
    console.log(firstName + ' is a man. ');
}

/******************************
* Truthly and Falsy values and equality operators

// Falsy values = undefined, null, 0, ' ', NaN
// Truthly values = NOT falsy values


var height;

height = 23;

if (height || height === 0) {
    console.log('variable is define');
} else {
    console.log('variable has NOT been defined')
}

// Equality operators
if (height == '23') {
    console.log('the == operator does type corcien!');
}

/******************************
* John & Mike Score

/
var scoreJohn = (110 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
console.log(scoreJohn, scoreMike);

if (scoreJohn > scoreMike){
    console.log('John\'s team wins with' + scoreJohn + 'points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\s team with' + scoreMike + 'points'); 
}
else {
    console.log('There is a draw');
}


/******************************
* Functions


function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year)
    var retirement = 65 - age;

    if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years. ');
}   else {
        console.log(firstName + ' is already retired. ')
    }
}
yearsUntilRetirement (1990, 'John');
yearsUntilRetirement (1948, 'Mike');
yearsUntilRetirement (1969, 'Jane');


/******************************
* Functions Statements and Expressions
*/

// Function Decleration
// Function whatDoYouDo(job, firstName){}

// Function Expression
var whatDoYouDo = function(job, firstName) {
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
        return firstName + ' does something else ';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
