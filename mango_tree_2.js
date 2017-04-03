"use strict"

// Release 1
class FruitTree {
  constructor(components) {
    this.name = components.name || `Pohon ${randomGenerator(1, 101)}`;
    this.maxHeight = components.maxHeight || 15;
    this.maxAge = components.maxAge || 10;
    this.startingAge = components.startingAge;
    this.maxFruitsHarvestedPerYear = components.maxFruitsHarvestedPerYear;
    this.age = components.age || 0;
    this.height = components.height || 0;
    this.maxFruitCapacity = components.maxFruitCapacity || 0;
    this.fruitsContainer = [];
    this.harvestedFruits = 0;
    this.isDead = false;
    this.type = components.type;
  }

  grow() {
    if(!this.isDead)
      this.age += 1;
      this.height += randomGenerator(1, 3);
    if(this.height > this.maxHeight)
      this.height = this.maxHeight;
  }

  produceFruits() {
    let fruit;
    for(let i = 0; i < randomGenerator(1, 6); i++) {
      if(this.type === 'mango') {
        fruit = new Mango();
        this.fruitsContainer.push(fruit);
      } else if(this.type === 'pear') {
        fruit = new Pear();
        this.fruitsContainer.push(fruit);
      } else if(this.type === 'apple') {
        fruit = new Apple();
        this.fruitsContainer.push(fruit);
      }
    }
  }

}

class Fruit {
  constructor() {
    this.fruitQuality = fruitQualityGenerator();
    this.diameter = randomGenerator(9, 16); // 9 - 15
    this.isGood = this.fruitQualityChecker();
  }
  
  fruitQualityChecker() {
    if(this.fruitQuality === 'good')
      return true;
    else {
      return false;
    }
    }
}

// Release 0
class AppleTree extends FruitTree {
  constructor(components) {
    super(components)
    this.fruit = new Apple();
  }
}

class PearTree extends FruitTree {
  constructor(components) {
    super(components);
    this.fruit = new Pear();
  }
}

class MangoTree extends FruitTree {
  constructor(components) {
    super(components);
    this.fruit = new Mango();
  }
}

class Apple extends Fruit {
  constructor() {
    super()
  }
}

class Pear extends Fruit {
  constructor() {
    super()
  }
}

class Mango extends Fruit {
  constructor() {
    super()
  }
}


// Release 2
class TreeGrove {
  constructor() {
    this.containerOfTrees = [];
  }

  inputTree(objectOfTress) {
    this.containerOfTrees.push(objectOfTress);
  }

  showAges() {
    let containerOfAges = [];
    let containerOfNames = [];
    let result = [];
    for(let i = 0; i < this.containerOfTrees.length; i++) {
      containerOfNames.push(this.containerOfTrees[i].name);
      containerOfAges.push(this.containerOfTrees[i].age);
      result.push(`${containerOfNames[i]} is ${containerOfAges[i]} year old.`);
    }
    return result;
  }

  showTrees() {
    return this.containerOfTrees;
  }

  nextYear() {
    for (let i = 0; i < this.containerOfTrees.length; i++) {
      if(this.containerOfTrees[i].age === this.containerOfTrees[i].maxAge)
        this.containerOfTrees[i].isDead = true;
        else {
        this.containerOfTrees[i].grow();
      }
      }
  }

  checkTreesCondition() {
    let container = []; // tree condition
    let allDead = false;

    for(let i = 0; i < this.containerOfTrees.length; i++) {
      if(this.containerOfTrees[i].age === this.containerOfTrees[i].maxAge && this.containerOfTrees[i].isDead === true)
        container.push(this.containerOfTrees[i].isDead);
      if(container.length === this.containerOfTrees.length)
        allDead = true;
    }
    return allDead;
  }

  matureTrees() {
    let containerOfMatureTrees = [];
    for(let i = 0; i < this.containerOfTrees.length; i++) {
      if(this.containerOfTrees[i].age >= this.containerOfTrees[i].startingAge && this.containerOfTrees[i].isDead !== true) {
        containerOfMatureTrees.push(`${this.containerOfTrees[i].name} sedang dalam masa berbuah dan belum mati.`);
      }
    }
    console.log(containerOfMatureTrees);
    return containerOfMatureTrees;
  }

  deadTrees() {
    let containerOfDeadTrees = [];
    for(let i = 0; i < this.containerOfTrees.length; i++) {
      if(this.containerOfTrees[i].isDead === true) {
        containerOfDeadTrees.push(`${this.containerOfTrees[i].name} sudah mencapai umurnya dan akhirnya mati.`);
      }
    }
    console.log(containerOfDeadTrees);
  }

  produceFruits() {
    for(let i = 0; i < this.containerOfTrees.length; i++) {
      if(this.containerOfTrees[i].fruitsContainer.length <= this.containerOfTrees[i].maxFruitCapacity)
      this.containerOfTrees[i].produceFruits();
    }
  }

  // fruitChecker() {
  //   let good = 0;
  //   let bad = 0;
    
  //   for(var i = 0; i < this.containerOfTrees.length; i++) {
  //     for(let j = 0; j < this.containerOfTrees[i].fruitsContainer.length; j++)
  //     if(this.containerOfTrees[i].fruitsContainer[j].isGood === true) {
  //       good++;
  //       // return this.containerOfTrees[i].fruitsContainer[0].isGood;
  //     } else {
  //       bad++;
  //     }
  //   //     good++;
  //   //   } else if(this.containerOfTrees[i].fruitsContainer.isGood === 'bad') {
  //   //     bad++;
  //   //   }
  //   // }
  //   // console.log(this.containerOfTrees[0].fruitsContainer)
  //   let result = `(${good} good, ${bad} bad)`;
  //   return result;

    // let good = 0;
    // let bad = 0;
    
    // for(let i = 0; i < this.containerOfTrees.length; i++) {
    //   for(let j = 0; j < this.containerOfTrees[i].fruitsContainer.length; j++) {
    //     if(this.containerOfTrees[i].fruitsContainer[j].fruitQuality === 'good') {
    //       good++;
    //     } else {
    //       bad++;
    //     }
    //   }
    // }
    // let result = `(${good} good, ${bad} bad)`;
    // return result;
  }





// function
let randomGenerator = (min, max) => {
  let random = Math.floor(Math.random() * (max - min)) + min;
  return random;
}

let fruitQualityGenerator = () => {
  let quality = randomGenerator(0, 2);
  return quality === 0 ? 'bad' : 'good';
}

// object init

let myTreeGrove = new TreeGrove();
let myPearTree = new PearTree({
  'name': 'Pohon Pir 1',
  'maxHeight': 10,
  'maxAge': 12,
  'startingAge': 3,
  'maxFruitsHarvestedPerYear': randomGenerator(2, 6),
  'maxFruitCapacity': randomGenerator(15, 21),
  'type': 'pear'
});
let myAppleTree = new AppleTree({
  'name': 'Pohon Apel 1',
  'maxHeight': 11,
  'maxAge': 7,
  'startingAge': 1,
  'maxFruitsHarvestedPerYear': randomGenerator(14, 22),
  'maxFruitCapacity': randomGenerator(70, 112),
  'type': 'apple'
})
let myMangoTree = new MangoTree({
  'name': 'Pohon Mangga 1',
  'maxHeight': 15,
  'maxAge': 19,
  'startingAge': 4,
  'maxFruitsHarvestedPerYear': randomGenerator(21, 54),
  'maxFruitCapacity': randomGenerator(90, 220),
  'type': 'mango'
})

myTreeGrove.inputTree(myAppleTree);
myTreeGrove.inputTree(myPearTree);
myTreeGrove.inputTree(myMangoTree);

do {
  myTreeGrove.nextYear();
  myTreeGrove.produceFruits();

  for(let i = 0; i < myTreeGrove.containerOfTrees.length; i++) {
    console.log(`[Year ${myTreeGrove.containerOfTrees[i].age} Report for ${myTreeGrove.containerOfTrees[i].name}] Height = ${myTreeGrove.containerOfTrees[i].height} m | Fruits harvested = ${myTreeGrove.containerOfTrees[i].fruitsContainer.length} ${myTreeGrove.containerOfTrees[i].type}`);
    // ${myTreeGrove.fruitChecker()}
  }
  
} while (myTreeGrove.checkTreesCondition() === false)

// console.log(myTreeGrove.matureTrees());
// console.log(myTreeGrove.checkTreesCondition())
// console.log(myTreeGrove.showAges());
// console.log(myTreeGrove.showTrees());
// console.log(myTreeGrove.containerOfTrees);
// console.log(myTreeGrove.showAges());
// console.log(myApple);
// console.log(myPearTree);
// console.log(myFruitTree);
