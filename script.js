let statement = "";
let values = ['','',''];
let operatorPresent = false;

const outputTop = document.querySelector('.top');
const outputBot = document.querySelector('.bottom');
const btn = document.querySelector('#one');
outputTop.textContent = statement;

//.addEventListener('click', update(1));

function update(value) {
  console.log(values);
  const operators = ['+', '-', 'X', '/'];

  //operator input
  if (operators.includes(value)) {
    if (values[1] === '') { //if no operator, add the operator
      values[1] = value;
    } else  if (values[2] === '') { //if no 2nd value for the operation
      if (value === '-') { //converts to negative
        values[2] += value
      } else { // else changes the operator
      values[1] = value;
      }
    } else { //evaluates and stores result at value[0], add new operator
      operate();
      values[1] = value;
    } 
  } else if (value === '=') { //equal sign input
    if (values[1] !== '' && values[2] !==  '') {
      operate();
    }
  } else if (value ==='.') { //decimal input
    if (values[1] === '') {
      if (!(values[0].includes('.'))) {
        values[0] += value;
      }
    } else {
      if (!(values[2].includes('.'))) {
        values[2] += value;
      }
    }
  } else { //number input
    if (values[1] == '') {
      values[0] += value;
    } else {
      values[2] += value;
    }
  }
  statement = values.join(' ')
  outputTop.textContent = statement;
}

function clear2() {
  values = ['','',''];
  statement = "";
  outputTop.textContent = statement;
}

function delete2() {
  if (values[2] !== '') {
    const length = values.length
    values[2] = values[2].slice(0, length-1);
  } else if (values[1] !== '') {
    values[1] = '';
  }
  else if (values[0] != '') {
    const length = values[0].length
    values[0] = values[0].slice(0, length-1);
  }
  statement = values.join(' ')
  outputTop.textContent = statement;
  }

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

function operate() {
  let x = parseFloat(values[0]);
  let y = parseFloat(values[2]);
  let operator = values[1];
  if (operator === "+") {
    values[0] = add(x,y);
  } else if (operator === "-") {
    values[0] = subtract(x,y);
  } else if (operator === "X") {
    values[0] = multiply(x,y);
  } else if (operator === "/") {
    if (y === 0) {
      alert("Can't divide by 0");
      return null;
    } else {
      values[0] = divide(x,y);
    }
  }
  values[0] = (Math.round(values[0] * 1000)/ 1000).toString();
  values[1] = '';
  values[2] = '';
}


