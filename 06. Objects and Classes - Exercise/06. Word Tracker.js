function wordsTracker(inputArr) {
    let [searched, ...rest] = inputArr;
    let wordsFound = {};

    for (const word of searched.split(' ')) {
        wordsFound[word] = 0;
    }

    for (const word of rest) {
        if(word in wordsFound) {
            wordsFound[word] = wordsFound[word] + 1;
        }
    }

    let sortedWords = Object.entries(wordsFound)
        .sort((a, b) => b[1] - a[1]);

    for (const [key, value] of sortedWords) {
        console.log(`${key} - ${value}`);
    }
}

wordsTracker(
    [
        'this sentence', 
        'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]        
)