function signCheck(...numbers) {
    let result =  numbers
        .filter((x) => x < 0);

    if(result.length % 2 === 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

// signCheck( -1, -2, -1)