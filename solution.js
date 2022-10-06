/*Question-1: to check the greatest of three numbers
a=10
b=20
c=30
using conditional statements , print which is the greatest no of three.*/
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
let admin
let Name
let fname = 'john'
admin = fname
console.log(admin) //john


/*Question-3: Write a program, using the variable declarations above, that displays the data type for each variable.*/
console.log(typeof admin)//string
console.log(typeof Name)//undefined
console.log(typeof fname)//string


/*Question-4:*/
console.log(5 > 4)//true
console.log("apple" > "pineaple")//false
console.log("2" > "12")//true
console.log(undefined == null)//true
console.log(undefined === null)//false

 