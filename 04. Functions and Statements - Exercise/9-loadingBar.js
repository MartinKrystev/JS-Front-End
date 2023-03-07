function loading(num) {
    let percentNum = num / 10;
    let dotsNum = 10 - percentNum;
    let percentMarks = '%'.repeat(percentNum);
    let dotMarks = '.'.repeat(dotsNum);

    if(num < 100) {
        console.log(`${num}% ${percentMarks}${dotMarks}`);
        console.log('Still loading...');
    } else {
        console.log('100 Complete!');
        console.log('[%%%%%%%%%%]');
    }
}

loading(100)