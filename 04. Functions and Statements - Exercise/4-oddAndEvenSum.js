function oddAndEvenSum(num) {
    let odd = 0;
    let even = 0;

    while(num > 0) {
        let currNum = num % 10;
        if(currNum % 2 === 0) {
            even += currNum;
        } else {
            odd += currNum;
        }
        num = Math.floor(num / 10);
    }

    console.log(`Odd sum = ${odd}, Even sum = ${even}`)
}

// oddAndEvenSum(1000435)
// oddAndEvenSum(3495892137259234)