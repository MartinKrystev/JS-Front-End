function oddOccurrences(input) {
    let arr = input.split(' ');

    let obj = {};
    for (const el of arr) {
        let elToLower = el.toLowerCase();

        if(elToLower in obj) {
            obj[elToLower]++;
        } else {
            obj[elToLower] = 1;
        }
    }

    let sorted = Object.entries(obj)
        .sort((a, b) => b[1] - a[1]);
    
    let result = [];
    for (const [key, value] of sorted) {
        if(value % 2 !== 0) {
            result.push(key);
        }
    }
    console.log(result.join(' '));
}

oddOccurrences(
    'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
)

// oddOccurrences(
//     'Cake IS SWEET is Soft CAKE sweet Food'
// )