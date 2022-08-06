let displayValue = '';
let firstNumber = '2';
let secNumber = '2';
let operation = '+';


function add(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a + b;
}

function subtract(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a - b;
}

function multiply(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a * b;
}

function divide(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a / b;
}

function operate(op, first, sec) {
    if (typeof op != 'string') {
        return;
    } else if (op == '+') {
        return add(first, sec)
    } else if (op == '-') {
        return subtract(first, sec);
    } else if (op == '*') {
        return multiply(first, sec);
    } else if (op == '/') {
        return divide(first, sec);
    } else {
        console.log('not recognized');
    }
}

function addDisplay(s) {
    let text = document.querySelector('#text');
    text.textContent += s;
    displayValue += s;
}

let buttons = document.querySelectorAll('button');
buttons = Array.from(buttons);

buttons.forEach((btn)=> {
    btn.addEventListener("click", (event) => {
        text = btn.textContent;
        if (text == '+' || text == '-' || text == 'x' || text == "÷") {
            firstNumber = displayValue;
            displayValue = '';
            let display = document.querySelector('#text');
            display.textContent = displayValue;
            operation = text;
        } else if (text == '=') {
            let answerDisplay = document.querySelector('#text');
            secNumber = answerDisplay.textContent;
            console.log(firstNumber);
            console.log(secNumber);
            console.log(operation);
            let answer = operate(operation, firstNumber, secNumber);
            answerDisplay.textContent = answer;
            firstNumber = answer;
        } else {
            addDisplay(text);
        }
        
    });
});
    
let clean = document.querySelector('#clear');
clean.addEventListener("click", (event) => {
    clear();
});

function clear() {
    let text = document.querySelector('#text');
    text.textContent = '';
    displayValue = '';
    firstNumber = '';
}



