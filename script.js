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
        add(first, sec)
    } else if (op == '-') {
        subtract(first, sec);
    } else if (op == '*') {
        multiply(first, sec);
    } else if (op == '/') {
        divide(first, sec);
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
        if (text == '+' || text == '-' || text == 'X' || text == "÷") {
            firstNumber = displayValue;
            displayValue = '';
            let display = document.querySelector('#text');
            display.textContent = displayValue;
            operation = text;
        } else if (text == '=') {
            let answer = operate(operation, firstNumber, secNumber);
            let answerDisplay = document.querySelector('#text');
            answerDisplay.textContent = answer;
        } else {
            addDisplay(text);
        }
        
    });
});

let ops = document.querySelectorAll('.op');
ops = Array.from(ops);

/*ops.forEach((op)=> {
    op.addEventListener("click", (event) => {
        //fix button event that adds operatin to display from above
        if (firstNumber == '' && operation == '') {
            firstNumber = displayValue;
            displayValue = '';
            operation = op.textContent;
        }
        //make operations clear display and store number there
        //for use in operate function
        
    });
});*/
    
let clean = document.querySelector('#clear');
clean.addEventListener("click", (event) => {
    clear();
});

let equal = document.querySelector('#equals');
equal.addEventListener("click", (event) => {
    
});


function clear() {
    let text = document.querySelector('#text');
    text.textContent = '';
    displayValue = '';
    firstNumber = '';
}



