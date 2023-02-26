function printAndSum(start, end) {
   
    let string = '';
    let sum = 0;
    for(let i = start; i <= end; i++) {
        string += i.toString() + ' ';
        sum += i;
    }

    console.log(string);
    console.log(`Sum: ${sum}`);
}

// printAndSum(0, 26)