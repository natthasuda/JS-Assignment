// Document elements
const textField0 = document.getElementById("text0");

const textField1 = document.getElementById("text1");

const textField2 = document.getElementById("text2");

// Buttons
const increaseScoreButton = document.getElementById("button0");

const pressRockButton = document.getElementById("button1");

const pressPaperButton = document.getElementById("button2");

const pressScissorButton = document.getElementById("button3");

// Internal Variables som ökar varje gång spelaren score poäng
let score = 0;


// Process - what is going to happen in what sequence?
increaseScoreByOne()
increaseScoreButton.addEventListener("click", () => {
  increaseScoreByOne();
  updateScoreText();
  checkScoreForSeven();
  checkScoreForLoss();

  pressRockButton();
  pressRockButton.addEventListener("click", () => {})
  pressPaperButton();
  pressPaperButton.addEventListener("click", () => {})
  pressScissorButton();
  pressScissorButton.addEventListener("click", () => {})
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

function checkScoreForLoss (){
  else if (score < 7) {
    // Do something
    changeScoreTextColortoRed();
  }
}

//View

function pressRockButton(){
  textField1.innerHTML = "Rock";
}

function pressScissorButton(){
  textField1.innerHTML = "Scissor";
}
function pressPaperButton(){
  textField1.innerHTML = "Paper";
}

function updateScoreText () {
  textField1.innerHTML = "Your score is: " + score;
}

function changeScoreTextColortoGreen (){
textField1.style.color = "green";
}

  function changeScoreTextColortoRed (){
  textField1.style.color = "red";
}
