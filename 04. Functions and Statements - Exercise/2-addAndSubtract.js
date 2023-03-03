function addAndSubtract(a, b, c) {
    let result = subtract((a + b), c);
    console.log(result);

    function subtract(sumResult, c) {
        return sumResult - c;
    }

}

// addAndSubtract(2, 2, 1);