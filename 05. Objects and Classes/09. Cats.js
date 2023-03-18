function cats(array) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let allCats = [];
    for (const item of array) {
        let [name, age] = item.split(' ');
        age = Number(age);
        allCats.push(new Cat(name, age));
    }

    for (const cat of allCats) {
        cat.meow();
    }
}

// cats(
//     ['Candy 1', 'Poppy 3', 'Nyx 2']
// );