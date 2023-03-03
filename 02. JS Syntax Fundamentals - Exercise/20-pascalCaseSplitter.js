function splitter(pascalCase) {

    let regex = /([A-Z][a-z]*)/;
    let result = pascalCase
        .split(regex)
        .filter((x) => x.length > 0)
        .join(', ');

    console.log(result);
}

// splitter('HoldTheDoor')

// splitter('SplitMeIfYouCanHaHaYouCantOrYouCan')