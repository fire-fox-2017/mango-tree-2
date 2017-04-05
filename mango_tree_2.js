"use strict"

// Release 1
class FruitTree {
  constructor(data) {
    this._name = data.name,
      this._age = data.age,
      this._height = data.height,
      this._fruits = data.fruits,
      this._healthy = data.healthy,
      this._maxAge = data.maxAge
  }

  grow() {
    this._age++
      if (this._age === this._maxAge) {
        this._healthy = false;
      } else
    if (this._age < 50) {
      this._height += getRandomNumber()
    }
  }
  produces() {
    let fruit_condition = new Fruit();
    let produces_fruits = [];
    if (this._healthy !== false) {
      for (let i = 0; i < getRandomFruit(1, 9); i++) {
        produces_fruits.push(fruit_condition)
      }
      this._fruits += produces_fruits.length
    }

  }
}

class Fruit {
  constructor() {
    this.quality = this.quality()
  }
  quality() {
    if (getRandomNumber() >= 0.5) {
      return "Good"
    } else {
      return "Bad"
    }
  }
}

// Release 0
class AppleTree extends FruitTree {
  constructor(data) {
    super(data)
  }
  grow() {
    super.grow()
  }
  produces() {
    super.produces()
  }
}
class Apple extends Fruit {
  constructor() {
    super(quality)
  }
}

class MangoTree extends FruitTree {
  constructor(data) {
    super(data)
  }
  grow() {
    super.grow()
  }
  produces() {
    super.produces()
  }
}
class Mango extends Fruit {
  constructor() {
    super(quality)
  }
}

class PearTree extends FruitTree {
  constructor(data) {
    super(data)
  }
  grow() {
    super.grow()
  }
  produces() {
    super.produces()
  }
}
class Pear extends Fruit {
  constructor() {
    super(quality)
  }
}

// Release 2
class TreeGrove {
  constructor() {
    this.trees_grove = []
  }
  inputTree(name, age, height, fruits, healthy, maxAge) {
    let grove = '';
    switch (name) {
      case 'MangoTree':
        grove = new MangoTree({
          name: name,
          age: age,
          height: height,
          fruits: fruits,
          healthy: healthy,
          maxAge: maxAge
        })
        break;
      case 'AppleTree':
        grove = new AppleTree({
          name: name,
          age: age,
          height: height,
          fruits: fruits,
          healthy: healthy,
          maxAge: maxAge
        })
        break;
      case 'PearTree':
        grove = new PearTree({
          name: name,
          age: age,
          height: height,
          fruits: fruits,
          healthy: healthy,
          maxAge: maxAge
        })
        break;
      default:
        grove = new FruitTree({
          age: 10,
          height: 1.0,
          fruits: 5,
          healthy: true,
          maxAge: 8
        })
        //break;
    }
    this.trees_grove.push(grove)
  }
  next_year() {
    this.trees_grove.forEach((value) => {
      value.grow()
      value.produces()
    })
  }
  show_ages() {
    this.trees_grove.forEach((value) => {
      console.log(`${value._name}, berumur : ${value._age}`)
    })
  }
  show_trees() {
    let showTrees = []
    for (let i = 0; i < this.trees_grove.length; i++) {
      showTrees.push(JSON.stringify(this.trees_grove[i]))
    }
    console.log(showTrees);
  }
  mature_trees() {
    this.trees_grove.forEach((value) => {
      console.log(`${value._name}, total fruit harvest : ${value._fruits}`)
    })
  }
  dead_trees() {
    this.trees_grove.forEach((value) => {
      if (value._healthy == false) {
        console.log(`${value._name} dead was age : ${value._age}`);
      }
    })
  }
}

function getRandomFruit(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 20) / 10;
}

let grove = new TreeGrove()
grove.inputTree("MangoTree", 3, 1.8, 7, true, 10) // name, age, height, fruits, healthy, maxAge, 
grove.inputTree("MangoTree", 5, 2.4, 12, true, 10)
grove.inputTree("AppleTree", 4, 1.2, 5, true, 12)
grove.inputTree("PearTree", 7, 2, 15, true, 15)
grove.next_year()
grove.next_year()
grove.next_year()
grove.next_year()
grove.next_year()
grove.next_year()
grove.next_year()
grove.next_year()
grove.next_year()
grove.next_year()
grove.next_year()
grove.next_year()
grove.next_year()
grove.next_year()
grove.next_year()
grove.next_year()

// show trees age
grove.show_trees()
console.log('------------------------------------------------')
// mature trees
grove.mature_trees()
console.log('------------------------------------------------')
// // show dead trees
grove.dead_trees()