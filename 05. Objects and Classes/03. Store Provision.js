function storeProvision(storeItems, storeOrders) {

    let products = {};
    for (let i = 0; i < storeItems.length; i += 2) {
        products[storeItems[i]] = Number(storeItems[i + 1]);    
    }
    
    for (let j = 0; j < storeOrders.length; j += 2) {
        if(products.hasOwnProperty(storeOrders[j])) {
            products[storeOrders[j]] += Number(storeOrders[j + 1]);
        } else {
            products[storeOrders[j]] = Number(storeOrders[j + 1]);
        }
    }

    for (const item in products) {
        console.log(`${item} -> ${products[item]}`)
    }
}

storeProvision(
    [
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]    
)