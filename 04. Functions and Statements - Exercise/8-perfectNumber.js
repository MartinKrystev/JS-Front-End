function isPerfect(n) {

    sum = 1;
    for (let i = 2; i * i <= n; i++)
    {
        if (n % i === 0)
        {
            if(i * i !== n)
                sum = sum + i + n / i;
            else
                sum = sum + i;
        }
    }

    if(sum === n && n !== 1) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
}

// isPerfect(6)
// isPerfect(28)
// isPerfect(1236498)