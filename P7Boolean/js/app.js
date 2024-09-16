//Boolean method
// Save to a let variable named isChild, when the age is from 10 - 30
// Save to a let variable named isTeenager, when the age is from 11 to 17 (born after 2005, after 2013)
// Save to a let variable named isAdult, when the age is 18 or more (born before 2005)
// Then print them all to the console
// Try different birth year

const birthYear = 2000;
const currentYear = 2024
let ageOfPerson = currentYear - birthYear;
console.log(ageOfPerson);

let isChild = ageOfPerson <=10;

let isTeenager = (ageOfPerson >=11) && (ageOfPerson<=17);

let isAdult = ageOfPerson >= 18;

console.log(isChild);
console.log(isTeenager);
console.log(isAdult);

let heightFromGround = 20;
let playerTouchGround = heightFromGround === 0; // === Safecompare
let playerHasJetPack = false;


if(playerTouchGround){console.log("Player is on the ground!"); console.log("Player can jump!")}


let playerTouchGroundnot = false;
if(!playerTouchGroundnot){console.log("Player is NOT on the ground!"); console.log("Player cannot jump!")}

// man kan skriva else istället för att skriva ut hela "if(!playerTouchGroundnot)"

else if (playerHasJetPack) {
  console.log("Player is on the ground!");
}

else {
  console.log("Player is NOT on the ground!");
  console.log("Player can jump!");
}

