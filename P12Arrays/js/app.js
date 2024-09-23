// Create an array to count the occurrences of random numbers
// Roll 10000 times for a number between 0 and 10 by using:
// And count the number of times that you have rolled that specific number
// Afterwards, print the result to the console.

let randomNumberCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// use a for loop to write into an array
randomNumberCount[0] += 1;

// use a for loop to read a value in an array
for (let i = 0; i < 10000; i++) {
  let randomNumber = getRandomInt(10);
 randomNumberCount[randomNumber] += 1;
}

// to see how many times I've rolled a certain number
for (let i = 0; i < randomNumberCount.length; i++) {
  console.log("I rolled " + i + " " + randomNumberCount[i] + " times.");

}

function getRandomInt(max) {
 return Math.floor(Math.random() * max);
}
