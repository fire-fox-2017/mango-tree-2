"use strict"


class FruitTree {
    constructor(args) {
        this._name = args['name'];
        this._age = args['age'];
        this._height = args['height'];
        this._fruitFresh = args['fruitsFresh'];
        this._fruitStatus = args['fruitStatus'];
    }
    getData() {
        let temp = {};
        temp.name = this._name;
        temp.age = this._age;
        temp.height = this._height;
        temp.fruitFresh = this._fruitFresh;
        temp.fruitStatus = this._fruitStatus;
        return temp;
    }
}
class Fruit {
    constructor(args) {
        this._quantity = 0;
        this._qualityGood = 0;
        this._qualityBad = 0;
    }
}
class MangoTree extends FruitTree {
    constructor(args) {
        super(args);
    }
}
class Mango extends Fruit {
    constructor(args) {
        super(args);
    }
}
class AppleTree extends FruitTree {
    constructor(args) {
        super(args);
    }
}
class Apple extends Fruit {
    constructor(args) {
        super(args);
    }
}
class PearTree extends FruitTree {
    constructor(args) {
        super(args);
    }
}
class Pear extends Fruit {
    constructor(args) {
        super(args);
    }
}




class TreeGrove {
    constructor() {
        this._arrTree = [];
        this._maxAge = [];
        this._arrMature = [];
    }
    inputTree(args) {
        if (args.name == "MangoTree") {
            let myMango = new MangoTree(args);
            this._arrTree.push(myMango.getData());
        } else if (args.name == "AppleTree") {
            let myApple = new AppleTree(args);
            this._arrTree.push(myApple.getData());
        } else if (args.name == "PearTree") {
            let Pear = new PearTree(args);
            this._arrTree.push(Pear.getData());
        } else {
            this._arrTree.push(args);
        }
        this._maxAge.push(Math.floor(Math.random() * 17) + 15);
        this._arrMature.push(false);
    }

    nextYear() {
        for (let i = 0; i < this._arrTree.length; i++) {
            this._arrTree[i].age += 1;
            let growValue = Math.floor(Math.random() * 2);
            if (growValue > 0) {
                this._arrTree[i].height += growValue;
            } else {
                this._arrMature[i] = true;
            }
            if (this._arrTree[i].age > this._maxAge[i]) {
                this._arrTree[i].health = false;
            }
            this._arrTree[i].fruitsFresh = Math.ceil(Math.random() * 7) + 3;
        }
        console.log("-------------------------Happy New Year!!!!-------------------------");
    }

    showAge() {
        console.log("Age View");
        for (let i = 0; i < this._arrTree.length; i++) {
            console.log("Name Tree " + this._arrTree[i].name + " Age " + this._arrTree[i].age);
        }
    }

    showTrees() {
        console.log("Tree View");
        for (let i = 0; i < this._arrTree.length; i++) {
            console.log("Name Tree " + this._arrTree[i].name + ", Age " + this._arrTree[i].age + ", Height " + this._arrTree[i].height + ", Fruits Fresh " + this._arrTree[i].fruitsFresh + ", Health Tree " + this._arrTree[i].fruitsFresh);
        }
    }

    matureTrees() {
        console.log("Mature Tree View");
        for (let i = 0; i < this._arrTree.length; i++) {
            console.log("Name Tree " + this._arrTree[i].name + ", Mature " + this._arrMature[i]);
        }
    }
    deadTrees() {
        console.log("Dead Tree View");
        for (let i = 0; i < this._arrTree.length; i++) {
            if (this._arrTree[i].health == false) {
                console.log("Name Tree " + this._arrTree[i].name);
            }
        }
    }
}

let grove = new TreeGrove();

grove.inputTree({
    name: "MangoTree",
    age: 3,
    height: 1.8,
    fruitsFresh: 7,
    fruitStatus: true
});
grove.inputTree({
    name: "MangoTree",
    age: 5,
    height: 2.4,
    fruitsFresh: 12,
    fruitStatus: true
});
grove.inputTree({
    name: "AppleTree",
    age: 4,
    height: 1.2,
    fruitsFresh: 5,
    fruitStatus: true
});
grove.inputTree({
    name: "PearTree",
    age: 7,
    height: 2,
    fruitsFresh: 15,
    fruitStatus: true
});

grove.showTrees();
grove.nextYear();
grove.showTrees();
grove.matureTrees();
grove.deadTrees();
grove.nextYear();
grove.showTrees();
grove.matureTrees();
grove.deadTrees();
grove.nextYear();
grove.showTrees();
grove.matureTrees();
grove.deadTrees();
grove.nextYear();
grove.showTrees();
grove.matureTrees();
grove.deadTrees();
grove.nextYear();
grove.showTrees();
grove.matureTrees();
grove.deadTrees();
grove.nextYear();
grove.showTrees();
grove.matureTrees();
grove.deadTrees();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.deadTrees();
