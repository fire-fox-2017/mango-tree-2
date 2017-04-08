"use strict"
//Release 0
class MangoTree{
constructor() {
  this.ManggoAge = 0;
  this.ManggoHeight = 0;
  this.ManggoFruits = [];
  this.ManggoHealthyStatus = "";
  this.ManggoMax = 15;
  this.ManggoMax_height = 100;
}

getHealthyStatus() {
  return this._HealthyStatus;
}

Manggogrow() {
  if (this.getHealthyStatus() === true){
    if(this.ManggoAge <= this.ManggoMax) {
        this.ManggoAge += 1;
  }
}
  if (this.ManggoAge > this.ManggoMax){
    this.ManggoHealth = false;
  }

  this._Height += Math.floor(Math.random()*4)
  if(this.ManggoHeight > this.ManggoMax_height ) {
      this.ManggoHeight = this.ManggoMax_Height
  }
}

// Produce some mangoes
produceMangoes() {
  let totalProduce = Math.floor(Math.random()*10)

  for (let i=0; i < totalProduce;i++){
      var mangoes = new Mango()
      this.ManggoFruit.push(mangoes)
    }
//    console.log(this._Fruits)
  }
ManggoHarvest(){
  return this.ManggoFruit.length
  this.ManggoFruit = [];
  }
}

//Release 1
class FruitTree {
  constructor(components){

    this._Fruits = []
    if(components.hasOwnProperty("Fruits")){
      let num_fruits = components ['Fruits']
      this.produceFruitsManual(num_fruits);}


    this._Height = 0;
    if (components.hasOwnProperty("Height")){
      this._Height = components ["Height"]}

    this._Age = 0;
    if(components.hasOwnProperty("Age")){
      this._Age = components ["Age"]}

    this._Produce = 0;
    if(components.hasOwnProperty("Produce")){
      this._Produce = components ["Produce"]}

    this._Health = true;
    if(components.hasOwnProperty("Health")){
      this._Health = components ["Health"]}

    this._Harvested =""
    if(components.hasOwnProperty("Harvested")){
      this._Harvested = components ["Harvested"]}

    this._MaxAge = 20
    if(components.hasOwnProperty("MaxAge")){
      this._MaxAge = components ["MaxAge"]}

    this._HeightGrowth = 0,5;
    if(components.hasOwnProperty("HeightGrowth")){
      this._HeightGrowth = components ['HeightGrowth']}

    this._Max_Growth_Age = 15;
    if(components.hasOwnProperty('Max_Growth_Age')){
      this._Max_Growth_Age = components ['Max_Growth_Age']}

    this._Min_Growth_Age = 1;
    if(components.hasOwnProperty('Min_Growth_Age')){
      this._Min_Growth_Age = components ['Min_Growth_Age']}

    this._MaxFruits = 200;
    if(components.hasOwnProperty('MaxFruits')){
      this._MaxFruits = components ['MaxFruits']}

    this._FruitName = "";
    if(components.hasOwnProperty('FruitName')){
      this._FruitName = components ['FruitName']}
    }

get age() {
  return this._Age;
}

get height() {
  return this._Height;
}

get fruits() {
  return this._Fruits;
}

get health() {
  return this._Health;
}

get fruit_name() {
  return this._FruitName;
}

get HeightGrowth(){
  return this._HeightGrowth
}

grow(){

  if(this._Age >= this._MaxAge){
    this._Health = false
  }

  if( this._Age <= this._MaxAge) {
    this._Age +=1
  }

  if(this._Age >= this._Min_Growth_Age && this._Age <= this._Max_Growth_Age){
    this._Height += this._HeightGrowth;
  }
}

produceFruits(){
  let totalFruits = Math.floor(Math.random()*100)
      if(totalFruits > this._MaxFruits){
        totalFruits = this._MaxFruits
      }

  for(let i = 0; i < totalFruits; i++){
      let newFruit = new Fruit()
      this._Fruits.push(newFruit)
    }
  }

produceFruitsManual(num) {
   for (let i = 0 ; i < num ; i++) {
     let newFruit = new Fruit();
     this._Fruits.push(newFruit);
   }
 }


harvest() {
  this._Harvested = `Total ${this._FruitName} Fruits: ${this._Fruits.length}`
  this._Fruits = [];
  }
}

class Fruit{
    constructor(){}
  }


class PearTree extends FruitTree{
    constructor(components){
      super(components)
    }
  }

class Pear extends Fruit{
    constructor(){
      super()
    }
}

var newPearTree = new PearTree({FruitName: "Pear", Min_Growth_Age: 5 , HeightGrowth: 10});
console.log(`The ${newPearTree._FruitName} Tree is alive!!`)

do {
  newPearTree.grow();
  newPearTree.produceFruits();
  newPearTree.harvest();
  console.log(`Year =  ${newPearTree._Age} Report: Height = ${newPearTree._Height} | Fruits harvested = ${newPearTree._Harvested}`)
} while (newPearTree._Health !== false){
  console.log(`The ${newPearTree._FruitName} tree has met its end, sad :/`)}


class AppleTree extends FruitTree {
      constructor(components){
      super(components)}
}

class Apple extends Fruit {
      constructor(){
        super()
      }
}

var newAppleTree = new AppleTree({FruitName: "Apple", Min_Growth_Age: 3 , HeightGrowth: 20});

do {
  newAppleTree.grow();
  newAppleTree.produceFruits();
  newAppleTree.harvest();
  console.log(`Year =  ${newAppleTree._Age} Report: Height = ${newAppleTree._Height} | Fruits harvested = ${newAppleTree._Harvested}`)
} while (newAppleTree._Health !== false)
  console.log(`The ${newAppleTree._FruitName} tree has met its end, sad :/`)

// Release 2
class TreeGrove {
    constructor(){
      this._Trees = [];
  }

inputTree(Tree_type, Age, Height, Fruits, Health){
  switch(Tree_type) {
  case "AppleTree":
    let newApple  = new AppleTree({Age: Age, Height: Height, Fruits: Fruits, Health: Health, FruitName: "Apple"});
    this._Trees.push(newApple);
    break;
  case "PearTree":
    let newPear = new PearTree({Age: Age, Height: Height, Fruits: Fruits, Health: Health, FruitName: "Pear"});
    this._Trees.push(newPear);
    break;
  default:
console.log("Wrong Tree Type");
  }
}

show_ages(){
  var show = "Show Ages \n";
  for (let i = 0; i < this._Trees.length; i++){
    show += `${this._Trees[i]._FruitName} tree, Age=${this._Trees[i]._Age}\n`
    }
    console.log(show)
  }

show_trees() {
   let show = "Show Trees \n";
   for (let i = 0 ; i < this._Trees.length ; i++) {
     show += `${this._Trees[i]._FruitName} tree, Health=${this._Trees[i]._Health}, Age=${this._Trees[i]._Age}, Height=${this._Trees[i]._Height}, Total Fruits =${this._Trees[i]._Fruits.length} \n`
   }
   console.log(show);
}

nextYear() {
    for (let i = 0 ; i < this._Trees.length ; i++) {
      this._Trees[i].grow();
      this._Trees[i].produceFruits();
    }
  }

mature_trees() {
    let mature = "Mature Trees: \n";
    for (let i = 0 ; i < this._Trees.length ; i++) {
      if (this._Trees[i]._Age >= this._Trees[i]._Min_Growth_Age && this._Trees[i]._Age <= this._Trees[i]._Max_Growth_Age)
        mature += `${this._Trees[i]._FruitName} tree, Age=${this._Trees[i]._Age}\n`;
    }
    console.log(mature);
  }

dead_trees() {
    let dead = "Dead Trees: \n";
    for (let i = 0 ; i < this._Trees.length ; i++) {
      if (!this._Trees[i]._Health)
        dead += `${this._Trees[i]._FruitName} tree, Health=${this._Trees[i]._Health}, Age = ${this._Trees[i]._Age}\n`;
    }
    console.log(dead);
  }
}

var grove = new TreeGrove();

grove.inputTree("AppleTree", 3, 1.8, 7, true);
grove.inputTree("AppleTree", 5, 2.4, 12, true);
grove.inputTree("PearTree", 4, 1.2, 5, true);
grove.inputTree("PearTree", 7, 2, 15, true);
grove.show_trees()
grove.nextYear();
grove.show_trees();
grove.nextYear();
grove.show_trees();
grove.nextYear();
grove.show_trees();
grove.nextYear();
grove.show_trees();
grove.show_ages();
grove.mature_trees();
grove.dead_trees();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.show_trees()
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
grove.dead_trees();
