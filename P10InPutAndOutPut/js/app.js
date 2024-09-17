// Write a function that has 1 number as a parameter and multiplies it by itself and returnsthe result

let inPut = 4;
function multiplyBySelf(numberToMultiply){
return numberToMultiply * numberToMultiply;
}

console.log(multiplyBySelf(4));

//Write a function that has 2 numbers as parameters and averages them and returns the result

function average(firstNumber, secondNumber) {
  return (firstNumber+secondNumber) / 2;
}
console.log(average(2, 6));

//Write a function that has 2 strings as parameters and returns a welcoming result.
function welCome (yourName,yourLastname) {
  return "Welcome" + yourName + " " + yourLastname;
}
console.log(welCome(" Nattha" , "Suksod "));

//Write a function that has no parameters and returns a random number from 0 to 2. Input: NIL Output: 0, 2, 0, 1, 0, 2 (random each time it is run)
function randomNumber(NIL){
  return Math.floor(Math.random() * 3);
}
console.log(randomNumber())


// Write a function that has 1 number as a parameter and returns the result like this: Input: 0. Output: A.Input: 1. Output: B.Input: 2. Output: C.

  function convertNumbersToLetters(number) {
    if (number === 0) {
      return "A";
    } else if (number === 1) {
      return "B";
    } else if (number === 2) {
      return "C";
    }
    else {
      return "Invalid number"
  }
  }

// Test the function
  console.log(convertNumbersToLetters(0)); // Output: A
  console.log(convertNumbersToLetters(1)); // Output: B
  console.log(convertNumbersToLetters(2)); // Output: C
    console.log(convertNumbersToLetters(4868685)); // Output: C

// Write a function that has 2 numbers as parameters compares them and returns the following results: Output: Both numbers are equal! Output: First number is greater!○Output: Second number is greater!

function evaluateresult(firstNumber, secondNumber)  {
  if (firstNumber === secondNumber){
    return "Both numbers are equal!";
  }
    else if (firstNumber > secondNumber){
      return "First number is greater";
    }
      else if (firstNumber < secondNumber){
        return "Second number is greater";

}
}

console.log(evaluateresult(1,1));
console.log(evaluateresult(3,1));
console.log(evaluateresult(1,4));

