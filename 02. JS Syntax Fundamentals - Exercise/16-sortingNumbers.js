function sortNumbers(arr) {
    let sortAsc = [...arr].sort((a, b) => a - b);
    let step = 0;
    let result = [];

    while(sortAsc.length > 0) {
        if(step % 2 === 0) {
            let first = sortAsc.shift();
            result.push(first);
        } else {
            let last = sortAsc.pop();
            result.push(last);
        }
        step++;
    }
    
    // console.log(result);
    return result;
}

// sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);