/* Implémenter les test de fizzbuzz sur un nombre saisi 
✓S'il est multiple de 3 afficher fizz 
✓S'il est multiple de 5 afficher buzz 
✓S'il est multiple de 3 et 5 afficher fizzbuzz 
✓Sinon afficher le nombre */

var number = parseInt(prompt("Saisir un nombre"));
var fizz = "Fizz";
var buzz = "Buzz";
var fizzbuzz = "FizzBuzz";



if ( number % 15 == 0 ) {
    console.log(fizzbuzz);
}  else if ( number % 5 == 0) {
    console.log(buzz)
}  else if ( number % 3 == 0 ) {
    console.log(fizz)
}  else {
    console.log(number)
}

 /* Autre solution avec concatenation
 let msg = ""
 if (number % 3 == 0) msg += "fizz";
 if (number % 5 == 0) msg += "buzz";

 console.log(msg == ""? n: msg);  



 Autre solution avec Ternaire 
 let isFizz = n % 3 == 0;
 let isBuzz = n % 5 == 0; 
console.log(isFizz ?  (isBuzz ? "fizzbuzz" : "fizz") : (isBuzz ? "buzz" : n));

 */ 



