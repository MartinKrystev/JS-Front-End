function solve(input) {
    let rows = Number(input.shift());
    let allPieces = {};
    let commandParser = {
        'Add': addPiece,
        'ChangeKey': changeKey,
        'Remove': removePiece
    };

    for (let i = 0; i < rows; i++) {
        let [piece, composer, key] = input.shift().split('|');
        allPieces[piece] = {composer, key}; 
    }

    for (let line of input) {
        if(line === 'Stop') {
            break;
        }

        let commandInputs = line.split('|');
        let command = commandInputs[0];

        commandParser[command](...commandInputs.slice(1));
    }

    for (const piece in allPieces) {
        console.log(`${piece} -> Composer: ${allPieces[piece].composer}, Key: ${allPieces[piece].key}`);
    }

    function addPiece(piece, composer, key) {
        if(!allPieces.hasOwnProperty(piece)) {
            allPieces[piece] = {composer, key};
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        } else {
            console.log(`${piece} is already in the collection!`);
        }
    };

    function changeKey(piece, newKey) {
        if (allPieces.hasOwnProperty(piece)) {
            allPieces[piece].key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`) ;
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    };

    function removePiece(piece) {
        if (allPieces.hasOwnProperty(piece)) {
            delete allPieces[piece];
            console.log(`Successfully removed ${piece}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    };


};

// solve(
//     [
//         '3',
//         'Fur Elise|Beethoven|A Minor',
//         'Moonlight Sonata|Beethoven|C# Minor',
//         'Clair de Lune|Debussy|C# Minor',
//         'Add|Sonata No.2|Chopin|B Minor',
//         'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//         'Add|Fur Elise|Beethoven|C# Minor',
//         'Remove|Clair de Lune',
//         'ChangeKey|Moonlight Sonata|C# Major',
//         'Stop'  
//       ]      
// );