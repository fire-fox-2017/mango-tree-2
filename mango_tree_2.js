"use strict"

function getRandomNumber(max) {
  return Math.floor(Math.random()*max+1);
}

//========================================================================================
// Release
class FruitTree {
  constructor (age,height,fruitProduced){
    this._age = age;
    this._height =height;
    this._fruitBasket = [];
    this._fruitProduced = fruitProduced;
    this._fruitProducedThisYear = 0;
    this._healthy = true;
  }

  get age() {
    return this._age;
  }
  get height() {
    return this._height;
  }
  get fruitsProducedThisYear(){
    return this._fruitProducedThisYear;
  }
  get fruitsEverProduced() {
    return this._fruitProduced+this._fruitBasket.length;
  }
}

class Fruit {
  constructor(){
    this._shape = 'round';
  }
  get name(){
    return this._name;
  }
  get shape(){
    return this._shape;
  }
  get color(){
    return this._color
  }
}

//========================================================================================
// Release 0
class MangoTree extends FruitTree {
  constructor(age,height,fruitProduced){
    super(age,height,fruitProduced);
    this._name = 'Mango Tree';
    this._maxFruitPerYear = 50;
    this._maxAge = 10;
    this._maxGrowPeriod = 8;
    this._maxAnnualTreeGrow = 100; //in centimeters
    this._matureYear = 5;
  }
  grow(){
    let maxRate = this._maxAnnualTreeGrow;
    if(this._healthy!==false){
      if (this._age <= this._maxAge) {
        if (this._age < this._maxGrowPeriod) {
          this._height += getRandomNumber(maxRate);
          this._age += 1;
        } else if (this._age === this._maxAge-1) {
          this._healthy = false;
          this._age += 1;
        } else {
            this._age += 1;
        }
      }
    }
  }
  produce(){
    let random = getRandomNumber(this._maxFruitPerYear);
    this._fruitProducedThisYear = 0;
    if(this._age>=this._matureYear){
      for(let i=0;i<random;i++){
        let mango = new Mango();
        this._fruitBasket.push(mango);
        this._fruitProducedThisYear += 1;
      }
    }
  }
}

class AppleTree extends FruitTree {
  constructor(age,height,fruitProduced){
    super(age,height,fruitProduced);
    this._name = 'Apple Tree';
    this._maxFruitPerYear = 80;
    this._maxAge = 7;
    this._maxGrowPeriod = 5;
    this._maxAnnualTreeGrow = 90; //in centimeters
    this._matureYear = 3;
  }
  grow(){
    let maxRate = this._maxAnnualTreeGrow;
    if(this._healthy!==false){
      if (this._age <= this._maxAge) {
        if (this._age < this._maxGrowPeriod) {
          this._height += getRandomNumber(maxRate);
          this._age += 1;
        } else if (this._age === this._maxAge-1) {
          this._healthy = false;
          this._age += 1;
        } else {
            this._age += 1;
        }
      }
    }
  }
  produce(){
    let random = getRandomNumber(this._maxFruitPerYear);
    this._fruitProducedThisYear = 0;
    if(this._age>=this._matureYear){
      for(let i=0;i<random;i++){
        let apple = new Apple();
        this._fruitBasket.push(apple);
        this._fruitProducedThisYear += 1;
      }
    }
  }
}

class PearTree extends FruitTree {
  constructor(age,height,fruitProduced){
    super(age,height,fruitProduced);
    this._name = 'Pear Tree';
    this._maxFruitPerYear = 65;
    this._maxAge = 5;
    this._maxGrowPeriod = 4;
    this._maxAnnualTreeGrow = 110; //in centimeters
    this._matureYear = 1;
  }
  grow(){
    let maxRate = this._maxAnnualTreeGrow;
    if(this._healthy!==false){
      if (this._age <= this._maxAge) {
        if (this._age < this._maxGrowPeriod) {
          this._height += getRandomNumber(maxRate);
          this._age += 1;
        } else if (this._age === this._maxAge-1) {
          this._healthy = false;
          this._age += 1;
        } else {
            this._age += 1;
        }
      }
    }
  }
  produce(){
    let random = getRandomNumber(this._maxFruitPerYear);
    this._fruitProducedThisYear = 0;
    if(this._age>=this._matureYear){
      for(let i=0;i<random;i++){
        let pear = new Pear();
        this._fruitBasket.push(pear);
        this._fruitProducedThisYear += 1;
      }
    }
    //this._annualProduction += this._fruitProducedThisYear;
  }
}
//========================================================================================
class Mango extends Fruit{
  constructor(){
    super();
    this._name = 'Mango';
    this._taste = 'sweet';
    this._color = 'Green';
  }
}

class Apple extends Fruit{
  constructor(){
    super();
    this._name = 'Apple';
    this._taste = 'sweet-sour';
    this._color = 'Red';
  }
}

class Pear extends Fruit{
  constructor(){
    super();
    this._name = 'Pear';
    this._taste = 'sour';
    this._color = 'Yellow';
  }
}
//========================================================================================
//Release 2
class TreeGrove {
  constructor(){
    this._arrayOfTrees = [];
  }
  inputTree(name,age,height,fruitProduced){
    if(name==='MangoTree'){
      let tree = new MangoTree(age,height,fruitProduced);
      this._arrayOfTrees.push(tree);
    } else if (name==='AppleTree') {
      let tree = new AppleTree(age,height,fruitProduced);
      this._arrayOfTrees.push(tree);
    } else if (name==='PearTree') {
      let tree = new PearTree(age,height,fruitProduced);
      this._arrayOfTrees.push(tree);
    }
  }
  showAges(){
    let temp = [];
    for(let i=0; i<this._arrayOfTrees.length;i++){
      temp.push(`${this._arrayOfTrees[i]._name}:${this._arrayOfTrees[i]._age}`);
    }
    if (temp.length===0){
    return console.log('There\'s no tree in my garden\n===================================================================')
    } else if (temp.length===1){
    return console.log(`My Tree age:\n${temp.join('\n')}\n===================================================================`);
    } else {
    return console.log(`My Trees age:\n${temp.join('\n')}\n===================================================================`);
    }
  }
  showTrees(){
    let temp = [];
    for(let i=0; i<this._arrayOfTrees.length;i++){
      temp.push(`${this._arrayOfTrees[i]['_age']} year old ${this._arrayOfTrees[i]['_name']} with ${this._arrayOfTrees[i].fruitsEverProduced} fruits (current year production: ${this._arrayOfTrees[i].fruitsProducedThisYear})`)
    }
    if (temp.length===0){
      return console.log('There\'s no tree in my garden\n===================================================================')
    } else if (temp.length===1){
      return console.log(`Tree in my garden is:\n${temp.join('\n')}\n===================================================================`);
    } else {
      return console.log(`Trees in my garden are:\n${temp.join('\n')}\n===================================================================`);
    }
  }
  matureTrees(){
    let temp = [];
    for(let i=0; i<this._arrayOfTrees.length;i++){
      if(this._arrayOfTrees[i]._age>=this._arrayOfTrees[i]['_matureYear']){
        temp.push(`${this._arrayOfTrees[i]['_age']} year old ${this._arrayOfTrees[i]['_name']} with ${this._arrayOfTrees[i].fruitsEverProduced} fruits (current year production: ${this._arrayOfTrees[i].fruitsProducedThisYear})`)
      }
    }
    if (temp.length===0){
      return console.log('There\'s no mature tree in my garden\n===================================================================')
    } else if (temp.length===1){
      return console.log(`Mature tree in my garden is:\n${temp.join('\n')}\n===================================================================`);
    } else {
      return console.log(`Mature trees in my garden are:\n${temp.join('\n')}\n===================================================================`);
    }
  }
  deadTrees(){
    let temp = [];
    for(let i=0; i<this._arrayOfTrees.length;i++){
      if(this._arrayOfTrees[i]._age>=this._arrayOfTrees[i]['_maxAge']){
        temp.push(`${this._arrayOfTrees[i]['_age']} year old ${this._arrayOfTrees[i]['_name']} with ${this._arrayOfTrees[i].fruitsEverProduced} fruits (final year production: ${this._arrayOfTrees[i].fruitsProducedThisYear})`)
      }
    }
    if (temp.length===0){
      return console.log('There\'s no dead tree in my garden\n===================================================================')
    } else if (temp.length===1) {
      return console.log(`Sadly, dead tree in my garden is:\n${temp.join('\n')}\n===================================================================`);
    } else {
      return console.log(`Sadly, dead trees in my garden are:\n${temp.join('\n')}\n===================================================================`);
    }
  }

  nextYear(){
    for(let i=0; i<this._arrayOfTrees.length;i++){
      this._arrayOfTrees[i].grow();
      this._arrayOfTrees[i].produce();
    }
  }
}

var appleTree = new AppleTree(1,200,true,100,4); //age,height,healthyStatus,fruitProduced,matureYear

// if (appleTree._healthy===true) {
//   while (appleTree._healthy !== false){
//     appleTree.grow();
//     appleTree.produce();
//     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Total Apple harvested = ${appleTree.fruitsEverProduced} (This year: ${appleTree.fruitsProducedThisYear})`);
//   }
// } else {
//   console.log(`[Tree Status: Height = ${appleTree.height} | Total Apple ever produced = ${appleTree.fruitsEverProduced} `);
// }

var grove = new TreeGrove()
grove.showTrees();
grove.showAges();
grove.matureTrees();
grove.deadTrees();
//========================================================================================
grove.inputTree('MangoTree',0,0,0); //age,height,fruitProduced
grove.inputTree('AppleTree',0,0,0); //age,height,fruitProduced
grove.inputTree('PearTree',0,0,0); //age,height,fruitProduced
//========================================================================================
grove.showTrees();
grove.showAges();
grove.matureTrees();
grove.deadTrees();
//========================================================================================
for(let i=0;i<6;i++){
  grove.nextYear();
}
//========================================================================================
grove.showTrees();
grove.showAges();
grove.matureTrees();
grove.deadTrees();
//console.log(grove._arrayOfTrees)
