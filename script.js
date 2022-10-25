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
        display.textContent = operate(num1, num2, operator);
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

//Result finder

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