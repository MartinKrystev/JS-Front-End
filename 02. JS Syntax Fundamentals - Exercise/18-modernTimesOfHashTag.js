function findHashTag(text) {
    let words = text.split(' ')
    .filter((word) => word.startsWith('#') && word.length > 1 && isValid(word));

    let result = [];
    for (const el of words) {
        result.push(el.slice(1));
    }

    console.log(result.join('\n'));

    function isValid(oneWord) {
        let oneWordLowerCase = oneWord.toLowerCase()
            .slice(1);

        let validated = true;
        for (const symbol of oneWordLowerCase) {
            
            let asciiValue = symbol.charCodeAt(0);
            if(!(asciiValue >= 97 && asciiValue <= 122)) {
                validated = false;
                break;
            }
        }

        return validated;
    }

}
// findHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')

// findHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign')