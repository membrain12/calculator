function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
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