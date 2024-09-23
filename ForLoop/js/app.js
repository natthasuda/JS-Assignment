// Positive, öka 1
let startingIndex = 0;
let stoppingIndex = 5;

for (let i = startingIndex; i < stoppingIndex; i++) {
  console.log("Good morning")
}


// Varannan, öka 2
for (let i = startingIndex; i < stoppingIndex; i+= 2) {
  console.log(i)
}

// Negativ (krokodil munnen ska vara på andra hållet, siffrorna ska byta håll, samt ange minus - tecken)
for (let i = stoppingIndex; i > startingIndex; i--) {
  console.log(i)
}
