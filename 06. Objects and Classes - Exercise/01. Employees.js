function employees(array) {
    let list = {};
    for (const item of array) {
        list[item] = item.length;
    }
    
    for (const name in list) {
       console.log(`Name: ${name} -- Personal Number: ${list[name]}`)
    }
}

employees(
    [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
)