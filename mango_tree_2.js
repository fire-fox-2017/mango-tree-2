"use strict"


// Release 1
class FruitTree {
  constructor (tree, age, height, fruit, healthy) {
    this._kind = tree
    this._age = age || 0;
    this._height = height || 0;
    this._fruitlength = fruit || 0;
    this._healthy = healthy || true;

  }
  getAge() {
    return this._age;
  }
  getHeight() {
    return this._height;
  }
  getFruits() {
    return this._fruit;
  }
  getHealtyStatus() {
    if(this._healthy){
      return "The tree is alive!";
    } else {
      return "The tree has meet its end!";
    }
  }
}

class Fruit {
  constructor(){
    this._quality="";
  }
}

class AppleTree extends FruitTree {
  constructor(tree, age, height, fruit, healthy) {
  super(tree, age, height, fruit, healthy)
  this._max=30;
  this._fruit=[];
  this.fruitize();
  this._harvested=0;
  }
  fruitize() {
    if (this._fruitlength>0){
      for (let i=0; i<this._fruitlength; i++){
        var apple = new Apple();
        this._fruit.push(apple);
      }
    }
  }

  getAge() {
    super.getAge();
  }
  getHeight() {
    super.getHeight();
  }
  getFruits() {
    super.getFruits();
  }
  getHealtyStatus() {
    super.getHealtyStatus();
  }




  // Grow the tree
  grow() {
    this.produceApples();
    this._age += 1;
    if(this._age <= 8){
      this._height += Math.floor(Math.random()*3)+1;
    }
    if(this._age === 18){
      this._healthy=false;
    }
  }


  produceApples() {
    if(this._age <= 18 && this._fruit.length <= this._max){
      for(let i=0; i<Math.floor(Math.random()*this._max)+5; i++) {
        var apple = new Apple();
        this._fruit.push(apple)
      }
    }
  }

  // Get some fruits
  harvest() {
    var good = 0;
    var bad = 0;
    for(let i=0; i<this._fruit.length; i++){
      if(this._fruit[i]._quality==="good"){
        good += 1;
      } else {
        bad += 1;
      }
    }
    this._harvested = `${this._fruit.length} (${good} good, ${bad} bad)`;
    this._fruit=[];
    return this._harvested;
  }

}


class Apple extends Fruit{
  constructor() {
  super();
  this.qualitize();
  }
  qualitize() {
    if (Math.random()<0.8) {
      this._quality = "good"
    } else {
      this._quality = "bad"
    }
  }
}

class PearTree extends FruitTree {
  constructor(tree, age, height, fruit, healthy) {
  super(tree, age, height, fruit, healthy)
  this._max=25;
  this._fruit=[];
  this.fruitize();
  this._harvested=0;
  }
  fruitize() {
    if (this._fruitlength>0){
      for (let i=0; i<this._fruitlength; i++){
        var pear = new Pear();
        this._fruit.push(pear);
      }
    }
  }

  getAge() {
    super.getAge();
  }
  getHeight() {
    super.getHeight();
  }
  getFruits() {
    super.getFruits();
  }
  getHealtyStatus() {
    super.getHealtyStatus();
  }


  // Get current states here

  // Grow the tree
  grow() {
    this.producePears()
    this._age += 1;
    if(this._age <= 8){
      this._height += Math.floor(Math.random()*5)+1;
    }
    if(this._age === 17){
      this._healthy=false;
    }
  }


  producePears() {
    if(this._age <= 17 && this._fruit.length <= this._max){
      for(let i=0; i<Math.floor(Math.random()*this._max)+5; i++) {
        var pear = new Pear();
        this._fruit.push(pear)
      }
    }
  }

  // Get some fruits
  harvest() {
    var good = 0;
    var bad = 0;
    for(let i=0; i<this._fruit.length; i++){
      if(this._fruit[i]._quality==="good"){
        good += 1;
      } else {
        bad += 1;
      }
    }
    this._harvested = `${this._fruit.length} (${good} good, ${bad} bad)`;
    this._fruit=[];
    return this._harvested;
  }

}


class Pear extends Fruit{
  constructor() {
  super();
  this.qualitize();
  }
  qualitize() {
    if (Math.random()<0.7) {
      this._quality = "good"
    } else {
      this._quality = "bad"
    }
  }
}

class MangoTree extends FruitTree {
  constructor(tree, age, height, fruit, healthy) {
  super(tree, age, height, fruit, healthy)
  this._max=20;
  this._fruit=[];
  this.fruitize();
  this._harvested=0;
  }
  fruitize() {
    if (this._fruitlength>0){
      for (let i=0; i<this._fruitlength; i++){
        var mango = new Mango();
        this._fruit.push(mango);
      }
    }
  }

  getAge() {
    super.getAge();
  }
  getHeight() {
    super.getHeight();
  }
  getFruits() {
    super.getFruits();
  }
  getHealtyStatus() {
    super.getHealtyStatus();
  }




  // Grow the tree
  grow() {
    this.produceMangoes()
    this._age += 1;
    if(this._age <= 10){
      this._height += Math.floor(Math.random()*3)+1;
    }
    if(this._age === 20){
      this._healthy=false;
    }
  }


  produceMangoes() {
    if(this._age <= 20 && this._fruit.length <= this._max){
      for(let i=0; i<Math.floor(Math.random()*this._max)+5; i++) {
        var apple = new Apple();
        this._fruit.push(apple)
      }
    }
  }

  // Get some fruits
  harvest() {
    var good = 0;
    var bad = 0;
    for(let i=0; i<this._fruit.length; i++){
      if(this._fruit[i]._quality==="good"){
        good += 1;
      } else {
        bad += 1;
      }
    }
    this._harvested = `${this._fruit.length} (${good} good, ${bad} bad)`;
    this._fruit=[];
    return this._harvested;
  }

}


class Mango extends Fruit{
  constructor() {
  super();
  this.qualitize();
  }
  qualitize() {
    if (Math.random()<0.6) {
      this._quality = "good"
    } else {
      this._quality = "bad"
    }
  }
}
// Release 2
class TreeGrove {
  constructor(){
    this.trees=[];
  }
  inputTree(type, age, height, fruit, healthy){
    if (type==="MangoTree"){
      var mangoTree = new MangoTree(type, age, height, fruit, healthy)
      this.trees.push(mangoTree)
    }
    if (type==="AppleTree"){
      var appleTree = new AppleTree(type, age, height, fruit, healthy)
      this.trees.push(appleTree)
    }
    if (type==="PearTree"){
      var pearTree = new PearTree(type, age, height, fruit, healthy)
      this.trees.push(pearTree)
    }
  }
  showAges(){
    for (let i=0; i<this.trees.length; i++){
      console.log(`${this.trees[i]._kind}, age: ${this.trees[i]._age} years old`)
    }
  }
  showTrees(){
    for (let i=0; i<this.trees.length; i++){
      console.log(this.trees[i]._kind)
    }
  }
  matureTrees(){
    for (let i=0; i<this.trees.length; i++){
      if (this.trees[i]._fruitlength > 0){
        console.log(`${this.trees[i]._kind}, fruits: ${this.trees[i]._fruit.length}, height: ${this.trees[i]._height} m`)
      }
    }
  }
  deadTrees(){
    for (let i=0; i<this.trees.length; i++){
      if (this.trees[i]._healthy === false){
        console.log(this.trees[i]._kind)
      }
    }
  }
  nextYear(){
    for (let i=0; i<this.trees.length; i++){
      this.trees[i].grow();
    }
  }
}
var grove = new TreeGrove()
grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12, true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)
grove.nextYear()
grove.showAges()
grove.showTrees()
grove.matureTrees()
grove.deadTrees()
