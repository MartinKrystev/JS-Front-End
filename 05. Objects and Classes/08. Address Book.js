function addressBook (inputArr) {

    addressObj = {};
    for (const item of inputArr) {
        let [key, value] = item.split(':');
        addressObj[key] = value;
    }

    let entries = Object.entries(addressObj);
    // let sortedByName = entries.sort((a, b) => {
    //     let aName = a[0];
    //     let bName = b[0];
    //     return aName.localeCompare(bName);
    // });

    let sortedByName = entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (const [key, value] of sortedByName) {
        console.log(`${key} -> ${value}`);
    }
}

// addressBook(
//     ['Tim:Doe Crossing',
//     'Bill:Nelson Place',
//     'Peter:Carlyle Ave',
//     'Bill:Ornery Rd']
// );