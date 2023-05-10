function solve(input) {
    let allProducts = input.shift().split('!');
    let commandParser = {
        'Urgent': urgentItem,
        'Unnecessary': unnecessaryItem,
        'Correct': correctItem,
        'Rearrange': rearrangeItem
    };

    for (const line of input) {
        if(line === 'Go Shopping!') {
            break;
        }

        let commandInputs = line.split(' ');
        let command = commandInputs[0];

        commandParser[command](...commandInputs.slice(1));
    }

    console.log(allProducts.join(', '));
    
    function urgentItem(item) {
        if(!allProducts.includes(item)) {
            allProducts.unshift(item);
        };
    };

    function unnecessaryItem(item) {
        if(allProducts.includes(item)) {
            let index = allProducts.indexOf(item);
            allProducts.splice(index, 1);
        }
    };

    function correctItem(oldItem, newItem) {
        if (allProducts.includes(oldItem)) {
            let index = allProducts.indexOf(oldItem);
            allProducts.splice(index, 1, newItem);
        }
    };

    function rearrangeItem(item) {
        if(allProducts.includes(item)) {
            let index = allProducts.indexOf(item);
            allProducts.splice(index, 1);
            allProducts.push(item);
        }
    };
}

solve(
    ([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",  
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
])

)

// solve(
//     ([
//     "Tomatoes!Potatoes!Bread",
//     "Unnecessary Milk",
//     "Urgent Tomatoes",
//     "Go Shopping!"
//     ])
// )