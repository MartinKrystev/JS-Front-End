function towns(array) {

    let allTowns = [];
    for (const line of array) {

        let currTown = {};
        let [townName, lat, long] = line.split(' | ');

        let latTwoDecimal = Number(lat).toFixed(2);
        let longTwoDecimal = Number(long).toFixed(2);

        currTown.town = townName;
        currTown.latitude = latTwoDecimal;
        currTown.longitude = longTwoDecimal;

        allTowns.push(currTown);
    }

   for (const item of allTowns) {
        console.log(item)
   }
}

towns(
    ['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)