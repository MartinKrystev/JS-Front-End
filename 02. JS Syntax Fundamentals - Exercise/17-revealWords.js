function revealWords(words, text) {
    let wordsArr = words.split(', ');
    let textArr = text.split(' ');
    
    for (const word of wordsArr) {
        for (const el of textArr) {
            
            if(el === '*'.repeat(el.length) 
                && word.length === el.length) {

                text = text.replace(el, word);
            }
        }
    }
    
    console.log(text);
}

// revealWords('great, learning',
// 'softuni is ***** place for ******** new programming languages'
// )

// revealWords('great',
// 'softuni is ***** place for learning new programming languages'
// )