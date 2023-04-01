let firstNumber;
let secondNumber;
let firstNumberText = "";
let secondNumberText = "";
let operator = "";
let operatorText;
let display = document.getElementById("display");
let displayText;
let totalCharacterCount = 0;
let hasDecimal = false;

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if (b === 0) return errorHandling("divideByZero");
      return divide(a, b);
  }
}
function addToDisplay(character) {
  totalCharacterCount++;
  if (totalCharacterCount > 18) {
    return errorHandling("overflow");
  }
  if (character == ".") {
    if (hasDecimal) {
      return errorHandling("oneTooManyDecimalsPal");
    }
    hasDecimal = true;
  }
  if (character == "+") {
    operator = "+";
    hasDecimal = false;
  } else if (character == "-") {
    operator = "-";
    hasDecimal = false;
  } else if (character == "*") {
    operator = "*";
    hasDecimal = false;
  } else if (character == "/") {
    operator = "/";
    hasDecimal = false;
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
  firstNumberText = operate(operator, firstNumber, secondNumber);
  operator = "";
  secondNumberText = "";
  hasDecimal = false;
  updateDisplayInnerText();
}
function clearAll() {
  firstNumberText = "";
  secondNumberText = "";
  operator = "";
  hasDecimal = false;
  updateDisplayInnerText();
}

function updateDisplayInnerText() {
  display.innerText = firstNumberText + " " + operator + " " + secondNumberText;
}

function deleteText() {
  if (secondNumberText) {
    secondNumberText = "";
  } else if (operator) {
    operator = "";
  } else {
    firstNumberText = "";
  }
  updateDisplayInnerText();
}

function errorHandling(typeOfError) {
  if (typeOfError == "overflow") {
    return alert("Too Many digits!");
  } else if (typeOfError == "divideByZero") {
    return alert("Bruv, you ain't dividin by zero");
  } else if (typeOfError == "oneTooManyDecimalsPal") {
    return alert("How many decimals does one number need??");
  }
}
