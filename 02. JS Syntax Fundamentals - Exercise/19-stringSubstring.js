function stringSubstring(word, text) {
    let textArr = text.split(' ')
    .map((x) => x.toLowerCase());
    let found = false;
    for (const el of textArr) {
        if(el === word) {
            found = true;
            break;
        }
    }

    if(found === true) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

// stringSubstring('javascript',
// 'JavaScript is the best programming language'
// )

// stringSubstring('python',
// 'JavaScript is the best programming language'
// )