function orders(item, quantity) {
    let price = 0;
    switch(item) {
        case 'coffee':
            price = quantity * 1.5;
            break;
        case 'water':
            price = quantity * 1;
            break;
        case 'coke':
            price = quantity * 1.4;
            break;
        case 'snacks':
            price = quantity * 2;
            break;
    }

    console.log(`${price.toFixed(2)}`)
}

// orders('coffee', 2)