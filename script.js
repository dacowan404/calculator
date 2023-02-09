function add(x, y) {
  return x + y;
}

function subtract(x,y) {
  return x-y;
}

function multiply(x,y) {
  return x*y;
}

function divide(x,y) {
  return x/y;
}

function operate(x,y, operator) {
  if (operator === "+") {
    return add(x,y);
  } else if (operator === "-") {
    return subtract(x,y);
  } else if (operator === "x") {
    return multiply(x,y);
  } else if (operator === "/") {
    return divide(x,y);
  }
}

const outputTop = document.querySelector('.top');
const outputBot = document.querySelector('.bottom');

outputTop.textContent = 'top';
outputBot.textContent = 'bot';
