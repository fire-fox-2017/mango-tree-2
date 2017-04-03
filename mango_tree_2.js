"use strict"

// Release 1
class FruitTree {
  constructor(age, height, fruit, healthy) {
    this._age = age;
    this._height = height;
    this._fruitCap = fruit;
    this._fruits = [];
    this._harvested = "";
    this._healthy = true;
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
  get healthy() {
    return this._healthy;
  }

  get fruitCap() {
    return this._fruitCap;
  }

  set age(age) {
    this._age = age;
  }

  set height(height) {
    this._height = height;
  }

  set fruit(fruit) {
    this._fruit = fruit;
  }

  set fruitCap(num) {
    this._fruitCap = num;
  }

  set healthy(bool) {
    this._healthy = bool;
  }

  grow(growRate, maxAge) {
    this.age = this.age += 1;
    this.fruit = [];
    this.fruitCap = getRandomNumber(this.fruitCap);
    let newHeight = 0.0;
    if (this.age < maxAge - 2) {
      newHeight = this.height + growRate;
    }
    this.height = Math.round(newHeight*10)/10;
    if (this.age === maxAge) {
      this.healthy = false;
    }
  }

}

class Fruit {
  constructor() {
    this.diameter = 0.1;
  }
}

// Release 0
function getRandomNumber(limit) {
  return Math.round(Math.floor(Math.random()*limit));
}

class MangoTree extends FruitTree {
  constructor(age, height, fruit, healthy) {
    super(age, height, fruit, healthy);
    this.growRate = getRandomNumber(2)/10;
    this.minBearingAge = getRandomNumber(3);
    this.maxAge = getRandomNumber(5) + 10;
    this.maxGrowAge = this.maxAge - getRandomNumber(5);
  }

  getAge() {
    return super.age;
  }
  getHeight() {
    return super.height;
  }
  getFruits() {
    return super.fruit;
  }
  getHealthStatus() {
    return super.healthy;
  }

  grow() {
    super.grow(this.growRate, this.maxAge);
  }

  produceMango() {
    for (let i = 0; i < this.fruitCap; i++) {
      let mango = new Mango();
      this.fruits.push(mango);
    }
  }

  harvest() {
    let goodCount = 0;
    for (let i = 0; i < this.fruits.length; i++) {
      if (this.fruits[i].quality === "good") {
        goodCount += 1;
      }
    }
    let badCount = this.fruits.length - goodCount;
    this.harvested = `${this.fruitCap} (${goodCount} good, ${badCount} bad)`;
  }

}

class AppleTree extends FruitTree {
  constructor(age, height, fruit, healthy) {
    super(age, height, fruit, healthy);
    this.growRate = getRandomNumber(4)/10;
    this.minBearingAge = getRandomNumber(2);
    this.maxAge = getRandomNumber(5) + 12;
    this.maxGrowAge = this.maxAge - getRandomNumber(8);
  }

  // Get current states here
  getAge() {
    return super.age;
  }
  getHeight() {
    return super.height;
  }
  getFruits() {
    return super.fruit;
  }
  getHealthStatus() {
    return super.healthy;
  }

  grow() {
    super.grow();
  }

  produceApples() {
    for (let i = 0; i < this.fruitCap; i++) {
      let apple = new Apple();
      this.fruits.push(apple);
    }
  }

  harvest() {
    let smallCount = 0;
    let mediumCount = 0;
    for (let i = 0; i < this.fruits.length; i++) {
      if (this.fruits[i].diameter === "small") {
        smallCount += 1;
      } else if (this.fruits[i].diameter === "medium") {
        mediumCount += 1;
      }
    }
    let largeCount = this.fruits.length - smallCount - mediumCount;
    this.harvested = `${this.fruitCap} (${smallCount} small, ${mediumCount} medium, ${largeCount} large)`;
  }
}

class Mango extends Fruit {
  constructor() {
    super();
    this.diameter = (Math.round((this.diameter + 0.1)*10))/10;
  }
}

class Apple extends Fruit{
  constructor() {
    super();
    this.diameter = (Math.round((this.diameter - 0.1)*10))/10;
  }
}



// Release 2
class TreeGrove {}


// Driver code
let mangoTree = new MangoTree(3, 0.5, 8, true);
console.log(mangoTree.getAge());
console.log(mangoTree.getHeight());
mangoTree.grow();
console.log(mangoTree.getAge());
console.log(mangoTree.getHeight());
mangoTree.produceMango();
console.log(mangoTree.getFruits());
