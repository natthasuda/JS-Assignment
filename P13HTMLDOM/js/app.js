// Reference "text0" and assign it to the variable called "textField0"
// Take headerText5 and change it to "This is my website"
// Take headerText5, access its style, access its color & change it
// Take textField0 and change to name
// Reference "header5" and assign it to the variable called "headerText5"

const textField0 = document.getElementById("text0");
textField0.innerHTML= "Nattha";

const headerText5 = document.getElementById("header5");
headerText5.innerHTML= "This is my website"

const headerText2 = document.getElementById("header2");
headerText2.innerHTML= multiplyBySelf(5)

const headerText3 = document.getElementById("header3");
headerText3.innerHTML= getRandomInt().toString();



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

function getRandomInt() {
  return Math.floor(Math.random() * 3);

}
