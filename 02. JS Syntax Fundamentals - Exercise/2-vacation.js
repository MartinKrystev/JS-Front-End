function vacation(group, type, day) {

    let totalPrice = 0;
    let discount = 0;
    let priceAfterDiscount = 0;
    switch(type) {
        case 'Students':
            
            switch(day) {
                case 'Friday':
                    totalPrice = group * 8.45;
                    if(group >= 30) {
                        discount = 15 / 100 * totalPrice; 
                    }
                break;
                case 'Saturday':
                    totalPrice = group * 9.80;
                    if(group >= 30) {
                        discount = 15 / 100 * totalPrice; 
                    }
                break;
                case 'Sunday':
                    totalPrice = group * 10.46;
                    if(group >= 30) {
                        discount = 15 / 100 * totalPrice; 
                    }
                break;
            }
        break;
        case 'Business':
            
            switch(day) {
                case 'Friday':
                    totalPrice = group * 10.90;
                    if(group >= 100) {
                        discount = 10 * 10.90;
                    }
                break;
                case 'Saturday':
                    totalPrice = group * 15.60;
                    if(group >= 100) {
                        discount = 10 * 15.60;
                    }
                break;
                case 'Sunday':
                    totalPrice = group * 16;
                    if(group >= 100) {
                        discount = 10 * 16;
                    }
                break;
            }
        break;
        case 'Regular':
            
            switch(day) {
                case 'Friday':
                    totalPrice = group * 15;
                    if(10 <= group && group <= 20) {
                        discount = 5 / 100 * totalPrice;
                    }
                break;
                case 'Saturday':
                    totalPrice = group * 20;
                    if(10 <= group && group <= 20) {
                        discount = 5 / 100 * totalPrice;
                    }
                break;
                case 'Sunday':
                    totalPrice = group * 22.50;
                    if(10 <= group && group <= 20) {
                        discount = 5 / 100 * totalPrice;
                    }
                break;
            }
        break;
    }

    priceAfterDiscount = totalPrice - discount;
    console.log(`Total price: ${priceAfterDiscount.toFixed(2)}`);
}

vacation(30, 'Students', 'Sunday');