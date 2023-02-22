// let n = 3;
// let arr = [10, 20, 30, 40, 50];

function func(n, arr) {

    let newArr = [];
    for(let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    // console.log(newArr);

    let result = '';
    for(let i = newArr.length - 1; i >= 0; i--) {
        result += (newArr[i] + ' ');
    }
    console.log(result);
}

// func(n, arr);