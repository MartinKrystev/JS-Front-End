function convertToJSON(firstName, lastName, hairColor) {
    person = {
        name: firstName,
        lastName,
        hairColor
    };

    console.log(JSON.stringify(person));
}

// convertToJSON(
//     'George', 'Jones', 'Brown'
// );