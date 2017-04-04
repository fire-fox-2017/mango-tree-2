"use strict"

// Release 1
//parent class
class FruitTree {
  constructor(age,height,produce,status){
    this._age = age
    this._height = height
    this._produce = produce
    this._status = status
  }

  grow(){
    if(this._age == this._maxAge){
      this._status = false
    } else {
      this._age++
      if(this._age < this._stopHeight){
        let random = (this.getRandomNumber(1,5).toFixed(1))
        this._height += +random
      }
      if(this._age >= this._startProduce){
        this._produce += Math.floor(this.getRandomNumber(1,5))
      }
    }
    // if(this._status == true){

    // }
    // this._age++
    // if (this._age <= this._stopHeight) {
    //   this._height += this.getRandomNumber(1,5)
    // }
    // if(this._age >= this._startProduce){
    //   this._produce += this.getRandomNumber(1,5)
    // }
    // if (this._age == this._maxAge) {
    //   this._status = false
    // }
  }

  getRandomNumber(min, max){
    return Math.random() * (max - min) + min;
  }
}

// Release 0
class AppleTree extends FruitTree {
  constructor(age,height,produce,status){
    super(age,height,produce,status)
    this._name = "Pohon Apple"
    this._startProduce = 6
    this._stopHeight = 8
    this._maxAge = 10
  }

  grow(){
    super.grow()
  }

  harvest(){
    super.harvest()
  }
}

class ManggoTree extends FruitTree {
  constructor(age,height,produce,status) {
    super(age,height,produce,status)
    this._name = "Pohon Mangga"
    this._startProduce = 5
    this._stopHeight = 9
    this._maxAge = 14

  }

  grow(){
    super.grow()
  }

  harvest(){
    super.harvest()
  }
}

class PearTree extends FruitTree {
  constructor(age,height,produce,status) {
    super(age,height,produce,status)
    this._name = "Pohon Pear"
    this._startProduce = 6
    this._stopHeight = 10
    this._maxAge = 12
  }

  grow(){
    super.grow()
  }

  harvest(){
    super.harvest()
  }
}

class Fruit {
  constructor(){

  }
}

class Apple {
  constructor(){

  }
}

class Manggo {
  constructor() {

  }
}

class Pear {
  constructor() {

  }
}

// Release 2
class TreeGrove {
  constructor(){
    this.trees = []
  }

  inputTree(name, age, height, produce, status){
    let pohon;
    if (name == "ManggoTree"){
      pohon = new ManggoTree(age,height,produce,status)
    } else if (name == "AppleTree") {
      pohon = new AppleTree(age,height,produce,status)
    } else {
      pohon = new PearTree(age,height,produce,status)
    }
    this.trees.push(pohon)
  }

  nextYear(){
    this.trees.map((element)=>{
      return element.grow()
    })
  }

  showAge(){
    this.trees.forEach((element)=>{
      console.log(`Umur dari ${element._name} : ${element._age} Tahun`);
    })
  }

  showTrees(){
    this.trees.forEach((element)=>{
      console.log(`${element._name} : Umur ${element._age} tahun berbuah dalam setahun ${element._produce} dan tinggi ${element._height.toFixed(1)}`);
    })
  }

  mature_trees(){
    this.trees.forEach((element)=>{
      console.log(`${element._name} : berbuah sebanyak ${element._produce}`);
    })
  }

  dead_trees(){
    this.trees.forEach((element)=>{
      if(element._status == true){
        console.log(`${element._name} Masih dalam pertumbuhan`);
      } else {
        console.log(`${element._name} pertumbuhan sudah berakhir`);
      }
    })
  }
}

let grove = new TreeGrove()
//input your trees data!
grove.inputTree("ManggoTree", 3, 1.8, 7,true)
grove.inputTree("ManggoTree", 5, 2.4, 12,true)
grove.inputTree("AppleTree", 4, 1.2, 5,true)
grove.inputTree("PearTree", 7, 2, 15,true)

// console.log(grove.trees);
//show Trees age before nextYear
console.log('======umur pohon pertama kali======');
grove.showAge()
// console.log('=====================');

//next year
grove.nextYear() //1
grove.nextYear() //2
grove.nextYear() //3
grove.nextYear() //4
grove.nextYear() //5
// console.log('=====================');
// console.log(grove.trees);
grove.nextYear() //6
// grove.nextYear() //7
// grove.nextYear() //8
// grove.nextYear() //9
// grove.nextYear() //10
// grove.nextYear() //11
// grove.nextYear() //12

// console.log('=====================');
// console.log(grove.trees);

//show Trees age after nextYear
console.log();
console.log('======setelah berganti tahun=======');
grove.showAge()

// show mature trees
console.log();
console.log('======info pohon yang sudah mature atau tidak mature=====');
grove.mature_trees()

// show dead tress
console.log('=========pohon yang sudah dead dan tidak==========');
grove.dead_trees()

//show trees
console.log('===========================');
grove.showTrees()