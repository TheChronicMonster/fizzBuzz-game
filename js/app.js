var fizz = "fizz";             /* 3 */
var buzz = "buzz";             /* 5 */
var fizzBuzz = "Fizzbuzz";     /* 3 & 5 */
var sixer = "sixer";           /* 6 */
var nixer = "nixer";           /* 9 */
var sixerNixer = "sixerNixer"; /* 6 & 9 */


for (var i=1; i <= 144; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(fizzBuzz);
  } else if (i % 3 === 0) {
    console.log(fizz);
  } else if (i % 5 === 0) {
    console.log(buzz);
  } else {
    console.log(i);
  }
}
