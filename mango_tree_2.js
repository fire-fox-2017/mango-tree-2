"use strict"

// Release 0
/*
class AppleTree {
  constructor(){
    this._age = 0
    this._maxAge = getRandomNumber(7)
    this._height = 0
    this._tempFruit = []
    this._maxFruit = 10
    this._healthy = true
    this._harvested = ''
    this._tempGood = 0
    this._tempBad = 0
  }

  grow(){
    if (this._age <= this._maxAge) {
      this._age += 1
      if (this._age < this._maxAge - 2) {
        this._height += getRandomNumber(3)
      }
      if (this._age >= this._maxAge) {
        this._healthy = false
      }
    } else {
      this._healthy = false
    }
  }

  produceApples(){
    for (let i = 0; i < getRandomNumber(this._maxFruit); i++) {
      let apple = new Apple()
      this._tempFruit.push(apple)
    }
  }

  harvest(){
    for (let i = 0; i < this._tempFruit.length; i++) {
      if (this._tempFruit[i].quality === 'good') {
        this._tempGood += 1
      } else {
        this._tempBad += 1
      }
      this._harvested = `${this._tempGood + this._tempBad} (${this._tempGood} good, ${this._tempBad} bad)`
    }
    this._tempFruit = []
    this._tempGood = 0
    this._tempBad = 0
  }
}

class Apple {
  constructor(){
    let type = ['good', 'bad']
    let randType = Math.floor(Math.random() * type.length+0)
    this.quality = type[randType]
  }
}

function getRandomNumber(num){
  return Math.floor(Math.random() * num) + 1
}

let tree = new AppleTree();
// console.log(`The tree is alive! :smile"`);

do {
  tree.grow()
  tree.produceApples()
  tree.harvest()
  console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvested}`);
} while (tree._healthy != false);
console.log(`The tree is alive! :sad"`);

module.exports = {
  AppleTree,
  Apple
}
*/

//=====================================================================================================
function getRandomNumber(num) {
    return Math.floor(Math.random() * num) + 1
}
// Release 1
class FruitTree {
    constructor(ages, height, health, harvest) {
        this._ages = ages
        this._height = height
        this._healthy = health
        this._harvest = harvest
        this._matureYear = false
        this._countMatureFruit = 0
    }

    grow() {
        this._ages++
            if (this._maxAge >= this._ages) {
                this._height += getRandomNumber(3)
            } else {
                this._healthy = false
            }
        if (this._ages >= this._harvestAge) {
            this._matureYear = true
            this._countMatureFruit++
        }
    }

    harvest() {
        if (this._ages > this._harvestAge) {
            this._harvest += getRandomNumber(2)
        }
    }

}

class MangoTree extends FruitTree {
    constructor(name, age, height, harvest, health) {
        super(age, height, health, harvest)
        this._maxAge = 20 // umur max
        this._maxSize = 15 // umur waktu berhenti bertumbuh
        this._harvestAge = 7 // umur mulai berbuah
        this._name = name
    }

    grow() {
        super.grow()
    }

    harvest() {
        super.harvest()
    }
}

class AppleTree extends FruitTree {
    constructor(name, age, height, harvest, health) {
        super(age, height, health, harvest)
        this._maxAge = 25 // umur max
        this._maxSize = 15 // umur waktu berhenti bertumbuh
        this._harvestAge = 9 // umur mulai berbuah
        this._name = name
    }

    grow() {
        super.grow()
    }

    harvest() {
        super.harvest()
    }
}

class PeerTree extends FruitTree {
    constructor(name, age, height, harvest, health) {
        super(age, height, health, harvest)
        this._maxAge = 17 // umur max
        this._maxSize = 10 // umur waktu berhenti bertumbuh
        this._harvestAge = 6 // umur mulai berbuah
        this._name = name
    }

    grow() {
        super.grow()
    }

    harvest() {
        super.harvest()
    }
}

class Fruit {
    constructor() {}
}

class Mango extends Fruit {
    constructor() {
        super()
    }
}

class Apple extends Fruit {
    constructor() {
        super()
    }
}

class Peer extends Fruit {
    constructor() {
        super()
    }
}

//==============================================================================================================
// Release 2
class TreeGrove {
    constructor() {
        this._tempTrees = []
    }

    inputTree(name_tree, age_tree, height_tree, harvest_tree, health_tree) {
        let tree
        if (name_tree === "MangoTree") {
            tree = new MangoTree(name_tree, age_tree, height_tree, harvest_tree, health_tree)
        } else if (name_tree === "AppleTree") {
            tree = new AppleTree(name_tree, age_tree, height_tree, harvest_tree, health_tree)
        } else if (name_tree === "PeerTree") {
            tree = new PeerTree(name_tree, age_tree, height_tree, harvest_tree, health_tree)
        }
        this._tempTrees.push(tree)
    }

    nextYear() {
        for (let i = 0; i < this._tempTrees.length; i++) {
            this._tempTrees[i].grow()
            this._tempTrees[i].harvest()
        }
    }

    // utk nampilkan umur setiap pohon
    showAge() {
        for (let i = 0; i < this._tempTrees.length; i++) {
            console.log(`${this._tempTrees[i]._name} age is ${this._tempTrees[i]._ages}`);
        }
    }

    // utk nampilkan spesifikasi dari setiap pohon
    showTrees() {
        let name_trees = []
        for (let i = 0; i < this._tempTrees.length; i++) {
            name_trees.push(`${this._tempTrees[i]._name} age: ${this._tempTrees[i]._ages}, Height: ${this._tempTrees[i]._height}, Harvest: ${this._tempTrees[i]._harvest}, Healthy: ${this._tempTrees[i]._healthy}`)
        }
        console.log(name_trees.join('\n'));
    }

    // utk nampilkan pohon sudah berbuah atau belum
    mature_trees() {
        for (let i = 0; i < this._tempTrees.length; i++) {
            if (this._tempTrees[i]._matureYear === true) {
                console.log(`${this._tempTrees[i]._name}: is mature, the mature fruit is: ${this._tempTrees[i]._countMatureFruit}`);
            }
        }
    }

    // utk nampilkan umur keberapa pohon itu mati
    dead_trees() {
        for (let i = 0; i < this._tempTrees.length; i++) {
            if (this._tempTrees[i]._healthy === false) {
                console.log(`${this._tempTrees[i]._name}: is dead`);
            }
        }
    }
}

let grove = new TreeGrove()
grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12, true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PeerTree", 7, 2, 15, true)
// console.log(grove._tempTrees)
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
console.log(grove._tempTrees)
grove.showAge()
grove.showTrees()
grove.mature_trees()
grove.dead_trees()
