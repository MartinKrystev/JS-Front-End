function piccolo(input) {
    let cars = [];

    for (const el of input) {
        let [command, regNum] = el.split(', ');

        if(command === 'IN' && !cars.includes(regNum)) {
            cars.push(regNum);
        } else if(command === 'OUT' && cars.includes(regNum)) {
            let indexToRemove = cars.indexOf(regNum);
            cars.splice(indexToRemove, 1);
        }
    }

    if(cars.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        let sortedCars = cars.sort((a, b) => a.localeCompare(b));

        for (const car of sortedCars) {
            console.log(car);
        }
    }
}

piccolo(
    [
        'IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU'
    ] 
)