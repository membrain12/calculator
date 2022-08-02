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
        addDisplay(text);
    });
});

let ops = document.querySelectorAll('.op');
ops = Array.from(ops);

ops.forEach((op)=> {
    op.addEventListener("click", (event) => {
        displayValue += op.textContent;
        
        
    });
});

/*buttons.addEventListener("click", (event) => {
    alert("butt");
});*/

let displayValue = '';
let firstNumber = '';
let secNumber = '';

