let text = 'A small sentence with some words small';
let word = 'small';

function func(text, word) {
    let censoredWord = '';

    for (let i = 0; i < word.length; i++) {
       censoredWord += '*';
    }

    let censored = text.replace(word, censoredWord);
    while(censored.includes(word)) {
        censored = censored.replace(word, censoredWord);
    }
    console.log(censored);
}

func(text, word);