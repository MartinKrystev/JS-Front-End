function findSmallest(a, b, c) {
    if(a <= b && a <= c) {
        console.log(a);
    } else if(b <= a && b <= c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

// findSmallest(5, 10, 3)