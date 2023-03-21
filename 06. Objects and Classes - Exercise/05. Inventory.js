function heroInventory(inputArr) {

    let heroes = [];
    for (const line of inputArr) {
        let info = line.split(' / ');
        let heroName = info[0];
        let heroLevel = Number(info[1]);
        let heroItems = info[2];

        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        }

        heroes.push(hero);
    }


    let sortedHeroes = heroes.sort((a, b) => a.level - b.level);
    for (const hero of sortedHeroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

heroInventory(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
)