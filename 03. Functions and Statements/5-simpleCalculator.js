function simpleCalculator(numOne, numTwo, operator) {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const divide = (a, b) => a / b;
    const multiply = (a, b) => a * b;

    const operationMap = {
        add: add,
        subtract: subtract,
        divide: divide,
        multiply: multiply
    }

    console.log(operationMap[operator](numOne, numTwo));
}

// simpleCalculator(12, 19, 'add')