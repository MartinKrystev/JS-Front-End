function jsonToObject(json) {
    let obj = JSON.parse(json);

    for (const key in obj) {
      console.log(`${key}: ${obj[key]}`);
    }
}

// jsonToObject(
//     '{"name": "George", "age": 40, "town": "Sofia"}'
// )

// jsonToObject(
//     '{"name": "Peter", "age": 35, "town": "Plovdiv"}'
// )