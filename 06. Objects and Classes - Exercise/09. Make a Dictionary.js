function dictionary(input) {

    let terms = {};

    for (const el of input) {
        let elToObj = JSON.parse(el);
        let entries = Object.entries(elToObj);
        
        for (const [key, value] of entries) {
            terms[key] = value;
        }
    }

    let entries = Object.entries(terms);
    let sortedByKey = entries.sort((a, b) => {
        let keyA = a[0];
        let keyB = b[0];
        return keyA.localeCompare(keyB);
    });

    for (const [key, value] of sortedByKey) {
        console.log(`Term: ${key} => Definition: ${value}`);
    }
}

dictionary(
    [
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]    
)