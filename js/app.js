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
	} else if (i % 3 === 0) {
		console.log(fizz);
	} else if (i % 5 === 0) {
		console.log(buzz);
	} else {
		console.log(integer);
	}
};

// calls getRandomInt() for a number between 1 & 144 and integerChecker()
var i = getRandomInt(1, 145);
console.log(i);
integerChecker();
