function sumDigits(number) {

    let text = number.toString();
    let sum = 0;
    for(let i = 0; i < text.length; i++) {
        sum += parseInt(text.charAt(i));
    }
    console.log(sum);
}

// sumDigits(245678)
