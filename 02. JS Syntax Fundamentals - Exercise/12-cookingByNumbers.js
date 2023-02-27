function cook(numAsString, ...operations) {
    let number = Number(numAsString);

    operations
        .forEach((el) => {
            switch(el) {
                case 'chop':
                    number /= 2;
                    break;
                case 'dice':
                    number = Math.sqrt(number);
                    break;
                case 'spice':
                    number++;
                    break;
                case 'bake':
                    number *= 3;
                    break;
                case 'fillet':
                    number -= number * 0.2;
                    break;                    
            }

            console.log(number);
        });
}

// cook('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');