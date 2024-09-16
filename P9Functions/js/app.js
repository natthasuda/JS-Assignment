//Using those two prints, make a character:
// walk three steps forward.
walkThreeSteps();
// then turn around and walk three steps forward
turnAround();
walkThreeSteps();

// then turn left and walk three steps forward.
turnLeft();
walkThreeSteps();

// then turn left and walk one step forward.
turnLeft();
stepForward();

// then turn around and walk one step forward.
turnAround();
stepForward();

// Make sure to introduce functions in order to avoid repetitive code!
// Think: What is a left turn? What is turning around?


function stepForward() {
  console.log("Move forward");
}
function turnRight() {
  console.log("Turn right.")
}
function turnLeft() {
  turnRight();
  turnRight();
  turnRight();
}
function walkThreeSteps() {
  stepForward();
  stepForward();
  stepForward();
}
function turnAround() {
  turnRight();
  turnRight();
}
