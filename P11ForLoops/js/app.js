// Print 13 different random numbers between 1 and 6
// Output 1, 6, 2, 5, 4, 6, 2, 5, 1
for (let i = 0; i < 13; i++) {
  console.log(getRandomInt(6) + 1);
}

function getRandomInt(max){
  return Math.floor(Math.random() * max);
}

// Start at 1, multiply the number of each iteration by 2 and stop after 1024. Print each number to console
// Output 1 2 4 8 10 12...
let startingMulti = 1;
let stoppingMulti = 1024;
for (let i = 1; i <= 1024; i *= 2) {
  console.log(i)
}

// Start at 10 and countdown to 0
// Output 10, 9, 8, 7, 6...
let startingNumber = 0;
let stoppingNumber = 10
for (let i = 10; i >= 0; i--) {
console.log(i)
}

// Write a function that has 2 number as parameters and return the first number to the power of the second number
// Input 4, 24
// Output 281474976...
function power(firstNumber, exponentNumber) {
  let result = firstNumber;
  for (let i = 1; i < exponentNumber; i++) {
    result = result * firstNumber;
  }
  return result;
}
console.log(power(2, 4));

// Output: 999 green bottles hanging on the wall. 999 green bottles hanging on the wall.
// Output: And if one green bottle, should accidentally fall, thee will be 998 green bottles hanging on the wall
// Output until 0 bottles are remaning
for (let i = 999; i >= 1; i--) {
  console.log(i + " green bottles hanging on the wall. " + i + " green bottles hanging on the wall." +
  " and if one green bottle, should accidentally fall, there will be" + i + " green bottles hanging on the wall. " );

}
