"use strict"


// Release 1
class FruitTree {
    constructor(species, age, height, harvestAge, health) {
        this._maxHeigtht = 3.0;
        this._maxAge = 15;
        this.species = species;
        this.age = age;
        this.height = height;
        this.harvestAge = harvestAge;
        this.health = health;
        this.mature = 'false';
        this.buah = [];
        this.MAX_BUAH = Math.floor((Math.random() * 10) + 1)

    }

    grow() {
        this.age++;
        if (this.age >= this.harvestAge) {
            this.mature = 'true';
        }
        if (this.age >= this._maxAge) {
            this.health = 'false'
        }
        if (this.height < this._maxHeigtht) {
            this.height = this.height + (Math.random() * 1);
            if (this.height > this._maxHeigtht) {
                this.height = this._maxHeigtht;
            }
        }

        if (this.age >= this.harvestAge) {
            this.produceFruit()
        }




    }

    produceFruit() {
        let jumlahBuah = Math.floor((Math.random() * this.MAX_BUAH) + 1);
        for (let i = 0; i < jumlahBuah; i++) {
            let fruit = new Fruit();
            this.buah.push(fruit);
        }
    }


    harvest() {

        if (this.buah.length === 0) {
            console.log(`${this.species} belum atau tidak berbuah`)

        } else {
            let bagus = 0;
            for (let i = 0; i < this.buah.length; i++) {
                if (this.buah[i].quality === 'bagus') {
                    bagus++;
                }
            }
            console.log(`${this.species} = jumlah buah :  ${this.buah.length}  | bagus :  ${bagus}  jelek : ${this.buah.length-bagus}`);
        }
        this.buah = [];


    }





}

class Fruit {
    // Produce a mango
    constructor() {
        let i = Math.floor((Math.random() * 2));
        if (i == 1) {
            this.quality = 'bagus';
        } else {
            this.quality = 'jelek';

        }
    }
}
// Release 0
class AppleTree extends FruitTree {
    constructor(species, age, height, harvestAge, health) {
        super(species, age, height, harvestAge, health);

    }

}

class MangoTree extends FruitTree {
    constructor(species, age, height, harvestAge, health) {
        super(species, age, height, harvestAge, health);

    }

}

class PearTree extends FruitTree {
    constructor(species, age, height, harvestAge, health) {
        super(species, age, height, harvestAge, health);

    }

}


class Apple extends Fruit {
    constructor() {

    }
}



// Release 2
class TreeGrove {
    constructor() {
        this.grove = [];
    }

    inputTree(species, age, height, harvestAge, health) {
        if (species === 'AppleTree') {
            let appleTree = new AppleTree(species, age, height, harvestAge, health);
            this.grove.push(appleTree);
        }
        if (species === 'PearTree') {
            let pearTree = new PearTree(species, age, height, harvestAge, health);
            this.grove.push(pearTree);
        }
        if (species === 'MangoTree') {
            let mangoTree = new MangoTree(species, age, height, harvestAge, health);
            this.grove.push(mangoTree);
        }

    }



    show_tree() {
        let temp = '';
        for (let i = 0; i < this.grove.length; i++) {
            temp = temp + ' ' + this.grove[i].species;

        }
        console.log(temp);


    }

    mature_trees() {

        let temp = '';
        for (let i = 0; i < this.grove.length; i++) {

            if (this.grove[i].mature === 'true') {
                temp = temp + ' ' + this.grove[i].species;
            }
        }
        if (temp === '') {
            console.log('blom ada yang mature');
        } else {
            console.log(temp);
        }


    }

    dead_trees() {
        let temp = '';
        for (let i = 0; i < this.grove.length; i++) {
            if (this.grove[i].health == 'false') {
                temp = temp + this.grove[i].species;
            }
        }
        if (temp === '') {
            console.log('blom ada yang mati');
        } else {
            console.log(temp);
        }





    }
    harvestGrove() {
        for (let i = 0; i < this.grove.length; i++) {
            this.grove[i].harvest();
        }


    }




    nextYear() {
        for (let i = 0; i < this.grove.length; i++) {
            this.grove[i].grow();
        }


    }

    show_age() {
        for (let i = 0; i < this.grove.length; i++) {
            console.log(`${this.grove[i].species} : ${this.grove[i].age}`);
        }

    }


}

var Grove = new TreeGrove()

Grove.inputTree('MangoTree', 3, 1.8, 5, true);
Grove.inputTree('MangoTree', 5, 2.4, 12, true);
Grove.inputTree('AppleTree', 4, 1.2, 5, true);
Grove.inputTree('PearTree', 7, 2, 15, true);
// Grove.mature_trees();
// Grove.show_tree();
// Grove.nextYear();
//
// Grove.show_tree()
// Grove.mature_trees();
// Grove.nextYear();
//
//
// Grove.mature_trees();
// Grove.nextYear();
// Grove.mature_trees();
// Grove.show_age();
// Grove.dead_trees();
//
// Grove.nextYear();
// Grove.nextYear();
// Grove.nextYear();
// Grove.nextYear();
// Grove.nextYear();
// Grove.show_age();
// Grove.dead_trees();
// Grove.nextYear();
// Grove.show_age();
Grove.harvestGrove();
Grove.nextYear();
Grove.nextYear();
Grove.nextYear();
Grove.mature_trees();
Grove.harvestGrove();
