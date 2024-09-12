let x = 5 + 5; // x = 10
let y = x + 5; // y = 15
let z = y + y; // z = 30
console.log(z + z); // 60

let firstNumber = 7;
let secondNumber = 2;
let seven = 7;
let answer = 0;

console.log(firstNumber+secondNumber);
// det går inte att skriva firstNumber + secondNumber = answer. För att kunna ta reda på svaret måste man skriva svar = firstNumber + secondNumber
answer = firstNumber + secondNumber;
console.log(answer);

answer = firstNumber - secondNumber;
console.log(answer);

answer = firstNumber * secondNumber;
console.log(answer);

answer = firstNumber % secondNumber;
console.log(answer);

answer = firstNumber / secondNumber;
console.log(answer);

let gold = 50;
gold + 10;
console.log(gold); // 50

gold = gold + 10;
console.log(gold); // 60

gold += 10;
console.log(gold); // 70

gold *= 10;
console.log(gold); // 700

gold /= 10;
console.log(gold); // 70

gold -= 10;
console.log(gold); // 60

gold %= 2;
console.log(gold); // 0

let numberOfStudents = 0;
numberOfStudents += 1;
console.log(numberOfStudents); // 1

numberOfStudents++;
console.log(numberOfStudents); // 2

numberOfStudents--;
console.log(numberOfStudents); // 1

++numberOfStudents;
console.log(numberOfStudents); // 3
