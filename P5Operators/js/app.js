// implement a program that makes an input for km/h and displays the result in m/s
let speedInput = 72;
let speedOutput= 0;
speedOutput = speedInput / 3.6;
console.log(speedOutput);

//implement a program that takes a number input for minutes and displays the result in seconds.
let minutesInput= 3;
let secondOutput = 0;
secondOutput = 60 * minutesInput;
console.log(secondOutput);

//implement a program that takes two numbers as input and displays their division result
let divisionInput = 11;
let divisionOutput = 4;
let divisionResult = 0;
divisionResult = divisionInput / divisionOutput;
console.log(divisionResult);

//implement a program that calculates the remainder of dividing two numbers and displays the result
let minutesInput1 = 11;
let minutesInput2 = 4;
divisionResult = minutesInput1 % minutesInput2;
console.log(divisionResult);


let remainderOutput = 0;
remainderOutput = minutesInput1 % minutesInput2;
console.log(remainderOutput);

// Implement a program that calculates the area of a circle using a number input for the radius and displays the result
const radius = 2;
const pi = Math.PI;
const areaOfCircle = radius * radius * pi;
console.log(areaOfCircle);

// Implement a program that takes a number input and displays its negation.
let number = 11;
number = -number;
console.log(number);

// Implement a program that calculates the BMI of a person using their weight in kilograms and height in meters. Display the BMI value.
let weightBMI = 70;
let heightBMI = 1.82;
BMIResult = weightBMI / (heightBMI * heightBMI);
console.log(BMIResult);


// Implement a program that calculates the length of the hypotenuse of a right triangle using the lengths of the other two sides as inputs. Display the result.
let hypoTenuse1 = 3;
let hypoTenuse2 = 4;
hypotenuseresult = (((hypoTenuse1 * hypoTenuse1) + (hypoTenuse2 * hypoTenuse2))**(1/2));
console.log(hypotenuseresult);


// Implement a program that takes a number input representing seconds and converts it to minutes and remaining seconds, then displays the result.
let secondsInput = 111; // Input in seconds
let minutes = Math.floor(secondsInput / 60); // Convert to minutes
let remainingSeconds = secondsInput % 60; // Get remaining seconds
console.log(`${minutes} minute(s) and ${remainingSeconds} second(s)`);
