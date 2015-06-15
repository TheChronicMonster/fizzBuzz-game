var fizz = "fizz";
var buzz = "buzz";
var fizzBuzz = "Fizzbuzz";

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
