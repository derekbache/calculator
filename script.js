let firstNumber;
let secondNumber;
let operator;

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
    case add:
      return add(firstNumber, secondNumber);
    case subtract:
      return subtract(firstNumber, secondNumber);
    case multiply:
      return multiply(firstNumber, secondNumber);
    case divide:
      return divide(firstNumber, secondNumber);
  }
}
