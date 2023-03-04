function palindromeInteger(arr) {
    for (const el of arr) {

        let palindrome = true;
        let numAsString = el.toString();
        for (let i = 0; i < numAsString.length / 2; i++) {
            if(numAsString[i] !== numAsString[numAsString.length - 1 - i]) {
                palindrome = false;
                break;
            }
        }

        console.log(palindrome);
    }
}

// palindromeInteger([123,323,421,121])
// palindromeInteger([32,2,232,1010])