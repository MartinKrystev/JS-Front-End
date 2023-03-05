function printMatrix(num) {
    for(let i = 0; i < num; i++) {

        let row = [];
        for (let k = 0; k < num; k++) {
            row.push(num);
        }

        console.log(row.join(' '));
        // console.log('-----');
    }
}

// printMatrix(7)