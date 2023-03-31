let firstNumber;
let secondNumber;
let firstNumberText = "";
let secondNumberText = "";
let operator = "";
let operatorText;
let display = document.getElementById("display");
let displayText;

function add(num1, num2) {
  let total = num1 + num2;
  return total;
}
function subtract(num1, num2) {
  let total = num1 - num2;
  return total;
}
function multiply(num1, num2) {
  let total = num1 * num2;
  return total;
}
function divide(num1, num2) {
  let total = num1 / num2;
  return total;
}
function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      total = add(firstNumber, secondNumber);
      return total;
    case "-":
      total = subtract(firstNumber, secondNumber);
      return total;
    case "*":
      total = multiply(firstNumber, secondNumber);
      return total;
    case "/":
      total = divide(firstNumber, secondNumber);
      return total;
  }
}
function addToDisplay(character) {
  if (character == "+") {
    operator = "+";
  } else if (character == "-") {
    operator = "-";
  } else if (character == "*") {
    operator = "*";
  } else if (character == "/") {
    operator = "/";
  } else if (!operator) {
    firstNumberText += character;
  } else {
    secondNumberText += character;
  }

  updateDisplayInnerText();
}

function equals() {
  firstNumber = parseFloat(firstNumberText);
  secondNumber = parseFloat(secondNumberText);
  operate(operator, firstNumber, secondNumber);
  firstNumberText = total;
  operator = "";
  secondNumberText = "";
  updateDisplayInnerText();
}

function updateDisplayInnerText() {
  display.innerText = firstNumberText + " " + operator + " " + secondNumberText;
}
