"use strict"

//================================================================================================================================================
// Release 0
//================================================================================================================================================
// class MangoTree{
//   // Initialize a new MangoTree
//   constructor() {
//     this._age=0;
//     this._height=0;
//     this._maxTree=Math.floor(Math.random()*20)+15;
//     this._fruitFresh="";
//     this._fruitStatus=true;
//   }
//   get age() {
//     return this._age;
//   }
//   get height() {
//     return this._height;
//   }
//   get fruitsFresh() {
//     return this._fruitFresh;
//   }
//   get fruitStatus() {
//     return this._fruitStatus;
//   }
//   grow() {
//     if(this._age<this._maxTree&&this._fruitStatus==true){
//       this._age++;
//       let growValue=Math.round(Math.random()*2);
//       if(growValue>0){
//         this._height+=growValue;
//       }
//     }else {
//       this._fruitStatus=false;
//     }
//   }
//   produceMangoes() {
//     var myMango = new Mango();
//     myMango.runMango();
//     this._fruitFresh=` ${myMango.quantity} (${myMango.qualityGood} Good, ${myMango.qualityBad} Bad)`;
//   }
//
// }
//
// class Mango {
//   constructor() {
//     this._quantity=0;
//     this._qualityGood=0;
//     this._qualityBad=0;
//   }
//   runMango(){
//     this._quantity=Math.ceil(Math.random()*7)+7;
//     let temp=Math.ceil(Math.random()*this._quantity);
//     this._qualityGood=temp;
//     this._qualityBad=this._quantity-temp;
//   }
//   get quantity(){
//     return this._quantity;
//   }
//   get qualityGood(){
//     return this._qualityGood;
//   }
//   get qualityBad(){
//     return this._qualityBad;
//   }
// }
//
// class AppleTree {
//   constructor() {
//     this._age=0;
//     this._height=0;
//     this._maxTree=Math.floor(Math.random()*22)+17;
//     this._fruitFresh="";
//     this._fruitStatus=true;
//   }
//   get age() {
//     return this._age;
//   }
//   get height() {
//     return this._height;
//   }
//   get fruitsFresh() {
//     return this._fruitFresh;
//   }
//   get fruitStatus() {
//     return this._fruitStatus;
//   }
//   grow() {
//     if(this._age<this._maxTree&&this._fruitStatus==true){
//       this._age++;
//       let growValue=Math.round(Math.random()*2);
//       if(growValue>0){
//         this._height+=growValue;
//       }
//     }else {
//       this._fruitStatus=false;
//     }
//   }
//   produceApple() {
//     var myApple = new Apple();
//     myApple.runApple();
//     this._fruitFresh=` ${myApple.quantity} (${myApple.qualityGood} Good, ${myApple.qualityBad} Bad)`;
//   }
// }
// class Apple {
//   constructor() {
//     this._quantity=0;
//     this._qualityGood=0;
//     this._qualityBad=0;
//   }
//   runApple(){
//     this._quantity=Math.ceil(Math.random()*7)+4;
//     let temp=Math.ceil(Math.random()*this._quantity);
//     this._qualityGood=temp;
//     this._qualityBad=this._quantity-temp;
//   }
//   get quantity(){
//     return this._quantity;
//   }
//   get qualityGood(){
//     return this._qualityGood;
//   }
//   get qualityBad(){
//     return this._qualityBad;
//   }
// }
// let myMango = new MangoTree();
// let myApple = new AppleTree();
// console.log("The Tree is Alive! :smile:");
// do{
//   myMango.grow();
//   myMango.produceMangoes();
//   myApple.grow();
//   myApple.produceApple();
//   console.log(`[Year ${myMango.age} Report] Height = ${myMango.height} cm | Fruits Harvested = ${myMango.fruitsFresh}`);
//   console.log(`[Year ${myApple.age} Report] Height = ${myApple.height} cm | Fruits Harvested = ${myApple.fruitsFresh}`);
// }while (myMango.fruitStatus!=false&&myApple.fruitStatus!=false);
// console.log("The Tree is met its end :sad:");

//================================================================================================================================================
// Release 1
//================================================================================================================================================

//class FruitTree {
//   constructor(args){
//     this._name=args['name'];
//     this._age=args['age']||0;
//     this._height=args['height']||0;
//     this._maxTree=args['maxTree']||Math.floor(Math.random()*20)+15;
//     this._fruitFresh=args['fruitsFresh']||"";
//     this._fruitStatus=args['fruitStatus']||true;
//   }
//   get name() {
//     return this._name;
//   }
//   get age() {
//     return this._age;
//   }
//   get height() {
//     return this._height;
//   }
//   get fruitsFresh() {
//     return this._fruitFresh;
//   }
//   get fruitStatus() {
//     return this._fruitStatus;
//   }
//   grow() {
//     if(this._age<this._maxTree&&this._fruitStatus==true){
//       this._age++;
//       let growValue=Math.round(Math.random()*2);
//       if(growValue>0){
//         this._height+=growValue;
//       }
//     }else {
//       this._fruitStatus=false;
//     }
//   }
// }
// class Fruit {
//   constructor(args){
//     this._quantity=0;
//     this._qualityGood=0;
//     this._qualityBad=0;
//   }
//   get quantity(){
//     return this._quantity;
//   }
//   get qualityGood(){
//     return this._qualityGood;
//   }
//   get qualityBad(){
//     return this._qualityBad;
//   }
// }
//
// class MangoTree extends FruitTree {
//   constructor(args) {
//     super(args);
//   }
//   grow() {
//     super.grow();
//   }
//   produceMangoes() {
//     var myMango = new Mango();
//     myMango.runMango();
//     this._fruitFresh=` ${myMango._quantity} (${myMango._qualityGood} Good, ${myMango._qualityBad} Bad)`;
//   }
// }
//
// class Mango extends Fruit {
//   constructor(args) {
//     super(args);
//   }
//   runMango(){
//     this._quantity=Math.ceil(Math.random()*7)+7;
//     let temp=Math.ceil(Math.random()*this._quantity);
//     this._qualityGood=temp;
//     this._qualityBad=this._quantity-temp;
//   }
// }
//
// class AppleTree extends FruitTree {
//   constructor(args) {
//     super(args);
//   }
//   grow() {
//     super.grow();
//   }
//   produceApple() {
//     var myApple = new Apple();
//     myApple.runApple();
//     this._fruitFresh=` ${myApple._quantity} (${myApple._qualityGood} Good, ${myApple._qualityBad} Bad)`;
//   }
// }
// class Apple extends Fruit{
//   constructor(args) {
//     super(args);
//   }
//   runApple(){
//     this._quantity=Math.ceil(Math.random()*7)+3;
//     let temp=Math.ceil(Math.random()*this._quantity);
//     this._qualityGood=temp;
//     this._qualityBad=this._quantity-temp;
//   }
// }
//
// let myMango = new MangoTree({name:'Manggo'});
// let myApple = new AppleTree({name:'Apple'});
// console.log("The Tree is Alive! :smile:");
// do{
//   myMango.grow();
//   myMango.produceMangoes();
//   myApple.grow();
//   myApple.produceApple();
//   console.log(`[Year ${myMango.age} Report ${myMango.name} Fruit] Height = ${myMango.height} cm | Fruits Harvested = ${myMango.fruitsFresh}`);
//   console.log(`[Year ${myApple.age} Report ${myApple.name}  Fruit] Height = ${myApple.height} cm | Fruits Harvested = ${myApple.fruitsFresh}`);
// }while (myMango.fruitStatus!=false&&myApple.fruitStatus!=false);
// console.log("The Tree is met its end :sad:");

//================================================================================================================================================
// Release 2
//================================================================================================================================================
class TreeGrove {
  constructor(){
    this._arrTree=[];
    this._maxAge=[];
    this._arrMature=[];
  }
  inputTree(args){
    this._arrTree.push(args);
    this._maxAge.push(Math.floor(Math.random()*17)+15);
    this._arrMature.push(false);
  }

  nextYear(){
    for(let i=0;i<this._arrTree.length;i++){
      this._arrTree[i].age+=1;
      let growValue=Math.round(Math.random()*2);
      if(growValue>0){
        this._arrTree[i].height+=growValue;
      }else{
        this._arrMature[i]=true;
      }
      if(this._arrTree[i].age>this._maxAge[i]){
        this._arrTree[i].health=false;
      }
      this._arrTree[i].fruitsFresh=Math.ceil(Math.random()*7)+3;
    }
    console.log("-------------------------Happy New Year!!!!-------------------------");
  }

  showAge(){
    console.log("Age View");
    for(let i=0;i<this._arrTree.length;i++){
      console.log("Name Tree "+this._arrTree[i].name+" Age "+this._arrTree[i].age);
    }
  }

  showTrees(){
    console.log("Tree View");
    for(let i=0;i<this._arrTree.length;i++){
      console.log("Name Tree "+this._arrTree[i].name+", Age "+this._arrTree[i].age+", Height "+this._arrTree[i].height+", Fruits Fresh "+this._arrTree[i].fruitsFresh+", Health Tree "+this._arrTree[i].fruitsFresh);
    }
  }

  matureTrees(){
    console.log("Mature Tree View");
    for(let i=0;i<this._arrTree.length;i++){
      console.log("Name Tree "+this._arrTree[i].name+", Mature "+this._arrMature[i]);
    }
  }
  deadTrees(){
    console.log("Dead Tree View");
    for(let i=0;i<this._arrTree.length;i++){
      if(this._arrTree[i].health==false){
        console.log("Name Tree "+this._arrTree[i].name);
      }
    }
  }
}

let grove = new TreeGrove();

grove.inputTree({name:"MangoTree1",age:3,height:1.8,fruitsFresh:7,fruitStatus:true});
grove.inputTree({name:"MangoTree2",age:5,height:2.4,fruitsFresh:12,fruitStatus:true});
grove.inputTree({name:"AppleTree1",age:4,height:1.2,fruitsFresh:5,fruitStatus:true});
grove.inputTree({name:"AppleTree2",age:7,height:2,fruitsFresh:15,fruitStatus:true});

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
