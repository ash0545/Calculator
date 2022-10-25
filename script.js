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

const numbers = document.querySelectorAll('.number');

numbers.forEach(number => number.addEventListener('click', () => {
    display.textContent += number.id;
}));

const operators = document.querySelectorAll('.operator');

operators.forEach(op => op.addEventListener('click', () => {
    if (op.id === '=') {
        operate();
    } else {
        num1 = display.textContent;
        operator = op.id;
        display.textContent = 0;
    }
}))

function operate(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
        case '=':
        case '÷':
        case 'x':
    }
}