"use strict"

// Release 0
class AppleTree {
  // Initialize a new AppleTree
  constructor() {
    this.age = 0;
    this.height = getRandomNumber();
    this.fruits = [];
    this.harvested = "";
    this.healthy = true;

    this.max_age = 20;
    this.max_height = 250;
    this.max_fruits = getRandomNumber() * 4;

    this.countGood = 0;
    this.countBad = 0;
  }

  getAge() {
    return this.age;
  }
  getHeight() {
    return this.height;
  }
  getFruits() {
    return this.fruits;
  }
  getHealtyStatus() {
    return this.healthy;
  }


  // Get current states here

  // Grow the tree
  grow() {
    if(this.getHealtyStatus() == true) {

      if (this.age < this.max_age) {
        this.age++;
      }

      if(this.age >= this.max_age) {
        // already reached max_age, tree is dead
        this.healthy = false;
      }

      this.height += getRandomNumber() * 5;
      if (this.height > this.max_height) {
        this.height = this.max_height;
      }
    }
  }

  // Produce some Apples
  produceApples() {
    let random = getRandomNumber();
    let totalProduced = random > this.max_fruits ? this.max_fruits : random;

    for (let i = 0 ; i < totalProduced ; i++) {
      let apple = new Apple();
      // count the apple qualities
      apple.quality == "good" ? this.countGood++ : this.countBad++;
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
    this.quality = (getRandomNumber()%2 == 0) ? "good" : "bad";
  }

}

function getRandomNumber() {
  // produce random number from 0 to 9;
  return Math.floor(Math.random() * 10);
}


/*
var tree = new AppleTree();
console.log(`The tree is alive! :smile:`);

do {
  tree.grow();
  tree.produceApples();
  tree.harvest();
  console.log(`[Year ${tree.age} Report] Height = ${tree.height} cm | Fruits harvested = ${tree.harvested}`)
} while (tree.healthy != false)

console.log('The tree has met its end. :sad:');
*/

// ========================================================================
// Release 1
class FruitTree {
  constructor(args) {
    this._age = 0;
    this._height = 0; // getRandomNumber();
    this._fruits = [];
    this._harvested = "";
    this._health = true;
    this._max_age = 30;
    // params
    // height_increment, max_growth_age, min_growth_age, max_fruits_per_year, fruit_name

    this._height_increment = 30; // in cm
    if(args.hasOwnProperty('height_increment'))
      this._height_increment = args['height_increment'];

    this._max_growth_age = 20;
    if(args.hasOwnProperty('max_growth_age'))
      this._max_growth_age = args['max_growth_age'];

    this._min_growth_age = 3;
    if(args.hasOwnProperty('min_growth_age'))
      this._min_growth_age = args['min_growth_age'];

    this._max_fruits_per_year = 100;
    if(args.hasOwnProperty('max_fruits_per_year'))
      this._max_fruits_per_year = args['max_fruits_per_year'];

    this._fruit_name = "Unknown";
    if(args.hasOwnProperty('fruit_name'))
      this._fruit_name = args['fruit_name'];

    // this.max_height = 250;
    // this.max_fruits = getRandomNumber() * 4;

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

  harvest() {
    this.harvested = `${this._fruits.length} (${this._countGood} good, ${this._countBad} bad)`;

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


var tree = new MangoTree({fruit_name: "Mango"});
console.log(`The ${tree._fruit_name} tree is alive! :smile:`);

do {
  tree.grow();
  tree.produceFruits();
  tree.harvest();
  console.log(`[Year ${tree.age} Report] Height = ${tree.height} cm | Fruits harvested = ${tree.harvested}`)
} while (tree.health != false)

console.log(`The ${tree._fruit_name} tree has met its end. :sad:`);


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

var pearTree = new PearTree({fruit_name: "Pear", min_growth_age: 10 , height_increment: 50});
console.log(`The ${pearTree._fruit_name} tree is alive! :smile:`);

do {
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} cm | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.health != false)

console.log(`The ${pearTree._fruit_name} tree has met its end. :sad:`);



// Release 2
class TreeGrove {}





//
