/*
1 Press number -> displays on screen
(Everytime button pressed, update displayValue which is text content for a div)
2 Press operator -> store number entered before as well as operator
(Dont update display value)
3 Press number -> displays on screen
(Update display value)
4 Press equal to -> Find result and display on screen
(Evaluate and display)
(or) Press operator again -> Find result, go back to 3
*/

let num1;
let num2;
let operator;

const display = document.querySelector('.display');

//Numbers:

const numbers = document.querySelectorAll('.number');

numbers.forEach(number => number.addEventListener('click', () => {
    display.textContent += number.id;
}));

//Operators

const operators = document.querySelectorAll('.operator');

operators.forEach(op => op.addEventListener('click', () => {
    if (op.id === '=') {
        num2 = display.textContent;
        result = operate(num1, num2, operator);
        if (result === Infinity) {
            alert('Bruh please don\'t do that 💀');
            Reset()
        } else {
            display.textContent = result;
        }
    } else if (num1 != undefined && num2 === undefined) {
        num2 = display.textContent;
        num1 = operate(num1, num2, operator);
        operator = op.id;
        num2 = undefined;
        display.textContent = '';
    } else {
        num1 = display.textContent;
        operator = op.id;
        display.textContent = '';
    }
}))

//Special buttons

const reset = document.querySelector('#reset');
const del = document.querySelector('#delete');

reset.addEventListener('click', Reset);
del.addEventListener('click', Delete);

//Required functions

function operate(num1, num2, operator) {
    let result;
    a = parseFloat(num1);
    b = parseFloat(num2);
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '÷':
            result = a / b;
            break;
        case 'x':
            result = a * b
            break
        default:
            break;
    }
    return result;
}

function Delete() {
    let tempArray = display.textContent.split('');
    tempArray.pop();
    display.textContent = tempArray.join('');
}

function Reset() {
    num1 = 0;
    num2 = 0;
    display.textContent = '';
}