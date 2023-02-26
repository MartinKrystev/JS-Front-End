function sameNums(number) {

    let sum = 0;
    let same = true;
    let numText = number.toString();

    for(let i = 1; i <= numText.length - 1; i++) {
        
        if(numText.charAt(i) !== numText.charAt(i - 1)) {
            same = false;
            break;
        }
    }

    for(let i = 0; i < numText.length; i++) {
        sum += parseInt(numText.charAt(i));
    }

    console.log(same);
    console.log(sum);
}

// sameNums(11111)