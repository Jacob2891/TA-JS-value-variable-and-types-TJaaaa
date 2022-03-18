// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let num = Number(prompt("pick a number"));
if(num % 2 == 0) {alert("its an even number.");}
else{alert("its an odd number");}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1 = Number(prompt("enter first number"));
let num2 = Number(prompt("enter second number"));
if (num1>num2){alert("first number is greater.");}
if (num2>num1){alert("second number is greater.");}
else{alert("both numbers are equal");}
// 3. Convert the above code using`?` terniary operator

 num1 > num2 ? alert("first number is greater"): alert ("second number is greater");

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/



let houseName =(prompt(`What is your house name.?`));

if (houseName ==`stark`){alert(`Winter is Coming`);}
else if (houseName ==`lannister`){alert(`A lannister always pays his debt`);}
else (alert(`All men must die`));


// 5. Convert the above code using`?` terniary operator

(houseName == `stark`) ? alert(`Winter is coming`) : alert(`A Lannister always pays his debt`) ;

// Switch

switch (houseName) {
  case 'stark':alert('Winter is Coming .');
  break ;
  case 'lannister':alert('A Lannister always pays his debt .');
  break ;
  default:alert('All Men must die.')
}

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let month = Number(prompt("enter the month number"));

switch(month) {
  case 1: alert(`January 31`);
  break ;
  case 2: alert(`February 28`);
  break ;
  case 3: alert(`March 31`);
  break ;
  case 4: alert(`April 30`);
  break ;
  case 5: alert(`May 31`);
  break ;
  case 6: alert(`June 30`);
  break ;
  case 7: alert(`July 31`);
  break ;
  case 8: alert(`August 31`);
  break ;
  case 9: alert(`September 30`);
  break ;
  case 10: alert(`October 31`);
  break ;
  case 11: alert(`November 30`);
  break ;
  case 12: alert(`December 31`);
  break ;
  default: alert(`Please enter a valid month number .`);
}

/* 7.
- Write a program that take the salary of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

// let salary = Number(prompt("Enter your salary amount .")) ;

// if (salary<=20000) {alert("Tax is 10%");}
// else if (salary<=40000) {alert("Tax is 20%");}
// else if (salary>=50000) {alert("Tax is 30%");}

//  if..else vs switch

/* 8.
Implement the condition given below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

// let val = Number(prompt("enter your marks"));

// if (marks > 100){alert(`Marks can't be greater than 100`);}
// else if (marks >80 && marks <=100) {alert(`Grade A`);}
// else if (marks >50 && marks <80) {alert(`Grade B`);}
// else if (marks >30 && marks <50) {alert(`Grade C`);}
// else if (marks >0 && marks <30) {alert(`Grade D`);}

// var selIndex = 0;
// var val = 100;
//     switch(true)
//     {
//         case ((val >= 1) && (val <= 10)):
//             selIndex = 0;
//             break;
//         case ((val >= 11) && (val <= 100)):
//             selIndex = 1;
//             break;
//         case ((val >= 101) && (val <= 1000)):
//             selIndex = 2;
//             break;
//         case ((val >= 1001) && (val <= 10000)):
//             selIndex = 3;
//             break;

//     }



/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt(`What is the weather like outside .?`)

switch (weather){
  case `sunny` : alert(`Wear a T-Shirt`);
  break;
  case `rainy` :alert(`Don't forget to take your raincoat`);
  break;
  case  `hot` :alert(`Get a hanky`);
  break;
  case `freezing` :alert(`Get your sweater on`);
  break;
  default: alert(`Not a valid input`);
} 
