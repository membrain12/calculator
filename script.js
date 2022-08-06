let displayValue = '';
let firstNumber = '';
let secNumber = '';
let operation = '';


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
    } else if (op == 'x') {
        return multiply(first, sec);
    } else if (op == '÷') {
        return divide(first, sec);
    } else {
        console.log('not recognized');
    }
}

function addDisplay(s) {
    let text = document.querySelector('#text');
    if (text.textContent.length < 15) {
        text.textContent += s;
        displayValue += s;
    }
    
}

let buttons = document.querySelectorAll('button');
buttons = Array.from(buttons);

buttons.forEach((btn)=> {
    btn.addEventListener("click", (event) => {
        text = btn.textContent;
        let display = document.querySelector('#text');
        if (firstNumber != '') {
            secNumber = display.textContent;
        }
        if (text == '+' || text == '-' || text == 'x' || text == "÷") {
            firstNumber = displayValue;
            displayValue = '';
            display.textContent = displayValue;
            operation = text;
        } else if (text == '=') {
            secNumber = display.textContent;
            console.log(firstNumber);
            console.log(secNumber);
            console.log(operation);
            let answer = operate(operation, firstNumber, secNumber);
            console.log(typeof answer);
            answer = answer.toString();
            if (answer.length > 15) {
                answer = round(answer);
            }
            display.textContent = answer;
            displayValue = answer;
            firstNumber = answer;
        } else {
            addDisplay(text);
        }
        
    });
});

function round(s) {
    return s.slice(0, 15);
}
    
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



