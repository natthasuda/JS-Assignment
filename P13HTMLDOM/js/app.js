// Reference "text0" and assign it to the variable called "textField0"
const textField0 = document.getElementById("text0");

// Take textField0 and change to name
textField0.innerHTML= "Nattha";
textField0.innerHTML = average(9, 13);
textField0.innerHTML = multiplyBySelf(6);


// Reference "header5" and assign it to the variable called "headerText5"
const headerText5 = document.getElementById("header5");

// Take headerText5 and change it to "This is my website"
headerText5.innerHTML= "This is my website"

// Take headerText5, access its style, access its color & change it
headerText5.style.color = "indigo";

const button0 = document.getElementById("button0");
button0.addEventListener("click",()=>{})
button0.style.color = "red";

function average(firstNumber, secondNumber) {
  return firstNumber + secondNumber / 2;
}

function multiplyBySelf(numberToMultiply) {
  return numberToMultiply * numberToMultiply;
}

