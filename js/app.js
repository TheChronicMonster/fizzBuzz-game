// establish string variables
var fizz = "fizz";             /* 3 */
var buzz = "buzz";             /* 5 */
var fizzBuzz = "Fizzbuzz";     /* 3 & 5 */
var sixer = "sixer";           /* 6 */
var nixer = "nixer";           /* 9 */
var sixerNixer = "sixerNixer"; /* 6 & 9 */

// function creates a random integer
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

// declaritive function to check randomInt
function integerChecker() {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log(fizzBuzz);
		document.getElementById("number").innerHTML = fizzBuzz;
	} else if (i % 3 === 0) {
		console.log(fizz);
		document.getElementById("number").innerHTML = fizz;
	} else if (i % 5 === 0) {
		console.log(buzz);
		document.getElementById("number").innerHTML = buzz;
	} else {
		console.log(integer);
		document.getElementById("number").innerHTML = integer;
	}
};



// calls getRandomInt and pushes through fizzBuzzer
var i = getRandomInt(1, 145);
console.log(i);
document.getElementById("computer-number").innerHTML = i;
integerChecker();
