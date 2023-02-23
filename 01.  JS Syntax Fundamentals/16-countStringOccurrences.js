let text = 'A small sentence with some words small small';
let word = 'small';

function func(text, word) {

    let count = 0;
    let arr = text.split(' ');

    // console.log(arr);

    for(let el of arr) {
        if(el === word) {
            count++;
        }
    }

    console.log(count);
}

func(text, word);