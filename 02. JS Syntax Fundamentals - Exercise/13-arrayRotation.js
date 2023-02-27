function arrRotation(numbers, rotations) {
    rotations %= numbers.length;

    for(let i = 0; i < rotations; i++) {
        let firstElement = numbers.shift();
        numbers.push(firstElement);
    }

    console.log(numbers.join(' '));
}

// arrRotation([51, 47, 32, 61, 21], 2);
// arrRotation([32, 21, 61, 1], 4);