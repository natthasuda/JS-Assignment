// Document elements
const textField0 = document.getElementById("text0");

const textField1 = document.getElementById("text1");

const increaseScoreButton = document.getElementById("button0");

// Internal Variables som ökar varje gång spelaren score poäng
let score = 0;

// Process - what is going to happe in what sequence?
increaseScoreByOne()
increaseScoreButton.addEventListener("click", () => {
  increaseScoreByOne();
  updateScoreText();
  checkScoreForSeven();
});


// Controllers
function increaseScoreByOne(){
  score++;
}

function checkScoreForSeven (){
  if (score >= 7) {
    // Do something
    changeScoreTextColortoGreen();
  }
}


//View
function updateScoreText () {
  textField1.innerHTML = "Your score is: " + score;
}

function changeScoreTextColortoGreen (){
textField1.style.color = "green";
}
