function charactersInRange(charOne, charTwo) {
    let asciiOne = charOne.charCodeAt(0);
    let asciiTwo = charTwo.charCodeAt(0);

    let result = [];
    if(asciiOne < asciiTwo) {
        while(asciiOne < asciiTwo - 1) {
            let currSymbol = String.fromCharCode(asciiOne + 1);
            result.push(currSymbol);
            asciiOne += 1;
        }
    } else {
        while(asciiTwo < asciiOne - 1) {
            let currSymbol = String.fromCharCode(asciiTwo + 1);
            result.push(currSymbol);
            asciiTwo += 1;
        }
    }
    console.log(result.join(' '));
}

// charactersInRange('a', 'd')
// charactersInRange('C', '#')
// charactersInRange('#',':')