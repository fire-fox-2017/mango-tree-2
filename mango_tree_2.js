"use strict"

// Release 0
class AppleTree {
  // Initialize a new AppleTree
  constructor() {
    this.umur = 0;
    this.height = getRandomNumber();
    this.fruits = [];
    this.harvested = "";
    this.status_kesehatan = true;

    this.max_umur = 20;
    this.max_tinggi = 250;
    this.max_fruits = getRandomNumber() * 4;

    this.countGood = 0;
    this.countBad = 0;
  }

  getAge() {
    return this.umur;
  }
  getHeight() {
    return this.height;
  }
  getFruits() {
    return this.fruits;
  }
  getHealtyStatus() {
    return this.status_kesehatan;
  }


  // Get current states here

  // Grow the tree
  grow() {
    if(this.getHealtyStatus() == true) {

      if (this.umur < this.max_umur) {
        this.umur++;
      }

      if(this.umur >= this.max_umur) {
        this.status_kesehatan = false;
      }

      this.height += getRandomNumber() * 5;
      if (this.height > this.max_tinggi) {
        this.height = this.max_tinggi;
      }
    }
  }

  // Produce some Apples
  produceApples() {
    let random = getRandomNumber();
    if(random > this.max_fruits) {
      let totalProduced = this.max_fruits;
    } else {
      let totalProduced = random;
    }

    for (let i = 0 ; i < totalProduced ; i++) {
      let apple = new Apple();
      // count the apple qualities
      if (apple.quality == "good"){
        this.countGood++;
      }  else {
        this.countBad++;
      }
      // store the produced apples in fruits array
      this.fruits.push(apple);
    }
  }

  // Get some fruits
  harvest() {
    this.harvested = `${this.fruits.length} (${this.countGood} good, ${this.countBad} bad)`;

    // after harvest, empty the fruits array, and reset count
    this.fruits = [];
    this.countBad = 0;
    this.countGood = 0;
  }


}


class Apple {
  constructor() {
    // apple quality is generated randomly
  if(getRandomNumber()%2 == 0){
      this.quality = "good";
    } else {
      this.quality = "bad";
    }
  }
}

function getRandomNumber() {
  // produce random number from 0 to 9;
  return Math.floor(Math.random() * 10);
}

// Release 1
class FruitTree {
  constructor(args) {
    this._age = 0;
    if(args.hasOwnProperty('age'))
      this._age = args['age'];

    this._height = 0;
    if(args.hasOwnProperty('height'))
      this._height = args['height'];

    this._fruits = [];
    if(args.hasOwnProperty('number_of_fruits')) {
      let num_fruits = args['number_of_fruits']
      this.produceFruitsManual(num_fruits);
    }

    this._health = true;
    if(args.hasOwnProperty('health'))
      this._health = args['health'];

    this._harvested = "";
    this._max_age = 10;
    // params
    // height_increment, max_growth_age, min_growth_age, max_fruits_per_year, fruit_name

    this._height_increment = getRandomNumber()/5; // in m
    if(args.hasOwnProperty('height_increment'))
      this._height_increment = args['height_increment'];

    this._max_growth_age = 8;
    if(args.hasOwnProperty('max_growth_age'))
      this._max_growth_age = args['max_growth_age'];

    this._min_growth_age = 2;
    if(args.hasOwnProperty('min_growth_age'))
      this._min_growth_age = args['min_growth_age'];

    this._max_fruits_per_year = 100;
    if(args.hasOwnProperty('max_fruits_per_year'))
      this._max_fruits_per_year = args['max_fruits_per_year'];

    this._fruit_name = "Unknown";
    if(args.hasOwnProperty('fruit_name'))
      this._fruit_name = args['fruit_name'];

    this._countGood = 0;
    this._countBad = 0;

  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get health() {
    return this._health;
  }

  get fruit_name() {
    return this._fruit_name;
  }

  grow() {
    if (this._health) {
      if(this._age < this._max_age)
        this._age++;

      if(this._age >= this._max_age)
        this._health = false;

      // height increase if age is between min and max growth age
      if(this._age >= this._min_growth_age && this._age <= this._max_growth_age)
        this._height += this._height_increment;

    }
  }

  produceFruits() {
    let random = getRandomNumber();
    let totalProduced = random * 12 > this._max_fruits_per_year ? this._max_fruits_per_year : random * 12;

    for (let i = 0 ; i < totalProduced ; i++) {
      let fruit = new Fruit();
      // count the mango qualities
      fruit._quality == "good" ? this._countGood++ : this._countBad++;
      // store the produced mangoes in fruits array
      this._fruits.push(fruit);
    }
  }

  produceFruitsManual(num) {
    for (let i = 0 ; i < num ; i++) {
      let fruit = new Fruit();
      // count the mango qualities
      if (fruit._quality == "good"){
        this._countGood++;
      }  else {
        this._countBad++;
      }
      // store the produced mangoes in fruits array
      this._fruits.push(fruit);
    }
  }

  harvest() {
    this.harvested = `Total ${this._fruit_name} fruits: ${this._fruits.length} (${this._countGood} good, ${this._countBad} bad)`;

    // after harvest, empty the fruits array, and reset count
    this._fruits = [];
    this._countBad = 0;
    this._countGood = 0;
  }


}

class Fruit {
  constructor () {
    this._diameter = getRandomNumber();
    this._quality = (getRandomNumber()%2 == 0) ? "good" : "bad";
  }
}


class MangoTree extends FruitTree {
  constructor (args) {
    super(args);
  }
}

class Mango extends Fruit {
  constructor() {
    super();
  }
}


// var tree = new MangoTree({fruit_name: "Mango"});
// console.log(`The ${tree._fruit_name} tree is alive! :smile:`);
//
// do {
//   tree.grow();
//   tree.produceFruits();
//   tree.harvest();
//   console.log(`[Year ${tree.age} Report] Height = ${tree.height} m | Fruits harvested = ${tree.harvested}`)
// } while (tree.health != false)
//
// console.log(`The ${tree._fruit_name} tree has met its end. :sad:`);


class PearTree extends FruitTree {
  constructor (args) {
    super(args);
  }
}

class Pear extends Fruit {
  constructor() {
    super();
  }
}

//var pearTree = new PearTree({fruit_name: "Pear"});
// console.log(`The ${pearTree._fruit_name} tree is alive! :smile:`);

// do {
//   pearTree.grow();
//   pearTree.produceFruits();
//   pearTree.harvest();
//   } while (pearTree.health != false)
// //   console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} m | Fruits harvested = ${pearTree.harvested}`)
//

// console.log(`The ${pearTree._fruit_name} tree has met its end. :sad:`);



// Release 2
class TreeGrove {
  constructor () {
    this._trees = [];
    // this._dead_trees = [];
  }

  inputTree(tree_type, age, height, number_of_fruits, health) {
    // tree_type, age, height, number_of_fruits, health

    switch(tree_type) {
      case "MangoTree":
        let mt = new MangoTree({age: age, height: height, number_of_fruits: number_of_fruits, health: health, fruit_name: "Mango"});
        this._trees.push(mt);
        break;
      case "PearTree":
        let pt = new PearTree({age: age, height: height, number_of_fruits: number_of_fruits, health: health, fruit_name: "Pear"});
        this._trees.push(pt);
        break;
      default:
        console.log("Wrong Tree Type");
    }

  }

  show_ages() {
    let str = '';
    for (let i = 0 ; i < this._trees.length ; i++) {
      str += `${this._trees[i].fruit_name} tree, age=${this._trees[i].age}\n`;
    }
    console.log(str);
  }

  show_trees() {
    let str = "";
    for (let i = 0 ; i < this._trees.length ; i++) {
      str += `${this._trees[i].fruit_name} tree, health=${this._trees[i].health}, age=${this._trees[i].age}, height=${this._trees[i].height}, total fruits=${this._trees[i].fruits.length} \n`
    }

    // return this._trees;
    console.log(str);
  }

  nextYear() {
    // grow the trees and producefruits
    for (let i = 0 ; i < this._trees.length ; i++) {
      this._trees[i].grow();
      this._trees[i].produceFruits();
    }
  }

  // return trees that stil bear fruit
  mature_trees() {
    let str = "Mature Trees: \n";
    for (let i = 0 ; i < this._trees.length ; i++) {
      if (this._trees[i]._age >= this._trees[i]._min_growth_age && this._trees[i]._age <= this._trees[i]._max_growth_age)
        str += `${this._trees[i].fruit_name} tree, age=${this._trees[i].age}\n`;
    }
    console.log(str);
  }

  dead_trees() {
    let str = "Dead Trees: \n";
    for (let i = 0 ; i < this._trees.length ; i++) {
      if (!this._trees[i]._health)
        str += `${this._trees[i].fruit_name} tree, health=${this._trees[i].health}, age=${this._trees[i].age}\n`;
    }
    console.log(str);
  }

}


var grove = new TreeGrove();

// grove.inputTree("MangoTree", 3, 1.8, 7, true);
grove.inputTree("MangoTree", 3, 1.8, 7, true);
grove.inputTree("MangoTree", 5, 2.4, 12, true);
grove.inputTree("PearTree", 4, 1.2, 5, true);
grove.inputTree("MangoTree", 7, 2, 15, true);
grove.show_trees()

grove.nextYear();
grove.show_trees()
// console.log(grove._trees);

grove.show_ages();
grove.mature_trees();
grove.dead_trees(); // still no dead_trees


grove.nextYear();
grove.nextYear();
grove.nextYear();


grove.show_trees()

grove.dead_trees();
