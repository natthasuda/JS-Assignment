const birthYear = 2000;
const currentYear = 2024;
const favoriteNumber = 22;
let ageOfPerson = currentYear - birthYear;
console.log(ageOfPerson);

// Save to a let variable named isChild, when the age is from 0 till 10.
let isChild = (ageOfPerson >= 0) && (ageOfPerson <= 10);

// Save to a let variable named isTeenager, when the age is from 11 to 17
let isTeenager = (ageOfPerson >= 11) && (ageOfPerson <= 17);

// Save to a let variable named isAdult, when the age is 18 or more.
let isAdult =  ageOfPerson >= 18;

if (isChild){console.log("You are a child");}
else if(isTeenager) {console.log("You are a teenager");}

else if (isAdult){
  console.log("You are an adult");

}

if (favoriteNumber > ageOfPerson){
  console.log("Favorite number is greater");
}

else if (favoriteNumber === ageOfPerson){
  console.log("They are the same");
}

else {
  console.log("Age is greater");
}

if (favoriteNumber % 2 === 0){
  console.log("Favorite number is even");
}
else {
  console.log("Favorite number is odd");
}

favoriteNumber % 2 === 0 ? console.log("Favorite number is even"):console.log("Favorite number is odd");
// Detta är samma sak som uträkningen som har gjorts ovanför. Kallas för ternary condition.




// Functions (används för att förkorta en kodning för att repetera flera gånger)
function makeLasagna (){
  console.log ("Fry meat.");
  console.log("Cut onion.");
  console.log("Fry onion");
  console.log("Add tomato sauce.");
  console.log("Add spices.");
  console.log("Boil");
}
makeLasagna();
