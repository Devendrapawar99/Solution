
////////////////////TASK-1////////////////////////

/*Question-1: to check the greatest of three numbers
a=10
b=20
c=30
using conditional statements , print which is the greatest no of three.*/
//Answer:
let a = 10
let b = 20
let c = 30
if ((a > b) && (a > c)) {
    console.log("A is greater than B and C")

}

else if ((b > a) && (b > c)) {
    console.log("B is greater A and C")

}

else
    console.log("C is greater than A and B") //C is greater than A and B


//Question-1: Find greatest number
//Use of prompt:prompt is a pre defined function which is used to accept the values from the users.
// take input from the user
//Answer:
const num1 = prompt("Enter first number: ")
const num2 = prompt("Enter second number: ")
const num3 = prompt("Enter third number: ")
let largest;

// check the condition
if (num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

// display the result
console.log("The largest number is " + largest);


/*Question-2:Declare two variables: admin and name.Assign the value "John" to fname.
Copy the value from fname to admin.Show the value of admin using console.log*/
//Answer:
let admin
let Name
let fname = 'john'
admin = fname
console.log(admin) //john


/*Question-3: Write a program, using the variable declarations above, that displays the data type for each variable.*/
//Answer:
console.log(typeof admin)//string
console.log(typeof Name)//undefined
console.log(typeof fname)//string


/*Question-4:*/
//Answer:
console.log(5 > 4)//true
console.log("apple" > "pineaple")//false
console.log("2" > "12")//true
console.log(undefined == null)//true
console.log(undefined === null)//false





////////////////////TASK-2////////////////////////

/*Question-1:Using if..else, write the code which gets a number via prompt and then shows in alert:
1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number.*/
//Answer:
let value = prompt('Type a number');

if (value > 0) {
    alert(1);
} else if (value < 0) {
    alert(-1);
} else {
    alert(0);
}


/*Question-2:Write a function min(a,b) which returns the least of two numbers a and b.
For instance:
//Answer:
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1*/

let a = parseInt(prompt('Enter the first number:'));
let b = parseInt(prompt('Enter the second number:'));
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
//calling the function
let result = min(a, b);
console.log(`The min Number ${result}`);


/*Question-3:Write the code using if..else which would correspond to the following switch:
switch (browser) {
case 'Edge':
alert( "You've got the Edge!" );
break;
 
case 'Chrome':
case 'Firefox':
case 'Safari':
case 'Opera':
alert( 'Okay we support these browsers too' );
break;
 
default:
alert( 'We hope that this page looks ok!' );
} */
//Answer:
if (browser == 'Edge') {
    alert("You've got the Edge!");
} else if (browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}


/*Question-4:
Rewrite the code below using a single switch statement:
let a = +prompt('a?', '');
 
if (a == 0) {
alert( 0 );
}
if (a == 1) {
alert( 1 );
}
 
if (a == 2 || a == 3) {
alert( '2,3' );
}*/
//Answer:
let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(0);
        break;

    case 1:
        alert(1);
        break;

    case 2:
    case 3:
        alert('2,3');
        break;
}