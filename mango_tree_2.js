"use strict"

//PARENT CLASS
class FruitTree {
  constructor(name, age, height, health, max_fruit, maxAge, stopGrowing){
    this.age = age;
    this.height = height;
    this.health = health;
    this.name = name;
    this.maksimum_fruit = max_fruit;
    this.fruit = [];
    this.maxAge = maxAge;
    this.stopGrowing = stopGrowing;
    this.mature = false;
  }

  getRandomFruit() {
    return Math.floor(Math.random() * this.maksimum_fruit) + 1
  }

  getRandomNumberHeight() {
    return Math.floor(Math.random()*3)+1;
  }

  grow() {
    let heightRandom;
    this.age++;

      //JIKA UMUR 5 ATAU LEBIH, BISA BERBUAH this._mature = true
      if(this.age >= 5){
        this.mature = true;
      }

      if(this.age<=this.stopGrowing){
        heightRandom=this.getRandomNumberHeight();
        this.height=this.height + heightRandom;
      }

      //KALAU UMUR == MAKSIMAL, POHON MATI (this.healt = false)
      else if(this.age==this.maxAge){
        this.health=false;
      }
    }

  produceFruit(){
      let banyakBuah = this.getRandomFruit();
      this.fruit = [];
      if(this.health==true && this.name == "MangoTree" && this.mature==true){

        for(let i=0;i<banyakBuah;i++){
            let fruitNya = new MangoFruit();
            this.fruit.push(fruitNya);
        }
      }

      else if(this.health==true && this.name == "AppleTree" && this.mature==true){
        for(let i=0;i<banyakBuah;i++){
            let fruitNya = new AppleFruit();
            this.fruit.push(fruitNya);
        }
      }

      else if(this.health==true && this.name == "PearTree" && this.mature==true){
        for(let i=0;i<banyakBuah;i++){
            let fruitNya = new PearFruit();
            this.fruit.push(fruitNya);
        }
      }
    }

}

//PARENT CLASS
class Fruit {
  constructor(){

  }
}

//KELAS POHON
class AppleTree extends FruitTree {
  constructor(name, age, height, health, max_fruit) {
    super(name, age, height, health, max_fruit, 10, 8)  // 10 (umur maksimal), 8(stop tumbuh)
  }

  getRandomFruit(){
    return super.getRandomFruit()
  }

  getRandomNumberHeight(){
    return super.getRandomNumberHeight()
  }

  grow(){
    return super.grow()
  }

  produceFruit(){
    return super.produceFruit()
  }
}

class PearTree extends FruitTree{
  constructor(name, age, height, health, max_fruit){
    super(name, age, height, health, max_fruit, 9, 8)  // 9 (umur maksimal), 8(stop tumbuh tingginya)
  }

  getRandomFruit(){
    return super.getRandomFruit()
  }

  getRandomNumberHeight(){
    return super.getRandomNumberHeight()
  }

  grow(){
    return super.grow()
  }

  produceFruit(){
    return super.produceFruit()
  }
}

class MangoTree extends FruitTree{
  constructor(name, age, height, health, max_fruit) {
    super(name, age, height, health, max_fruit, 10, 8);  // 10 (umur maksimal), 8(stop tumbuh tingginya)
  }

  getRandomFruit(){
    return super.getRandomFruit()
  }

  getRandomNumberHeight(){
    return super.getRandomNumberHeight()
  }

  grow(){
    return super.grow()
  }

  produceFruit(){
    return super.produceFruit()
  }
}



//KELAS BUAH
class AppleFruit extends Fruit {

}

class PearFruit extends Fruit{
}

class MangoFruit extends Fruit{
}

class PohonGrove{
  constructor() {
    this.trees = [];
  }

  inputTree(nameTree, age, height, fruits, health){
    //FUNGSI UNTUK PUSH CLASS POHON / TREE
    // this.trees = [];
    if(nameTree == 'MangoTree'){
      this.trees.push(new MangoTree(nameTree, age, height, health, fruits))
    }
    else if(nameTree == 'PearTree'){
      this.trees.push(new PearTree(nameTree, age, height, health, fruits))
    }
    else if(nameTree == 'AppleTree'){
      this.trees.push(new AppleTree(nameTree, age, height, health, fruits))
    }
    return this.trees;
  }

  nextYear(){
    for(let i =0;i<this.trees.length;i++){
      this.trees[i].grow();
      this.trees[i].produceFruit();
    }
  }

  showAge(){
    for(let i=0;i<this.trees.length;i++){
      if(this.trees[i].health == true)
      console.log(`Umur Pohon = ${this.trees[i].name} = ${this.trees[i].age}`)
    }
  }

  showTrees(){
    console.log('\n')
    for(let i=0;i<this.trees.length;i++){
      if(this.trees[i].health == true)
      console.log(`Pohon ${i} ${this.trees[i].name}, tingginya ${this.trees[i].height}`)
    }
  }


  maturetrees(){
    for(let i=0;i<this.trees.length;i++)
      if(this.trees[i].health == true && this.trees[i].fruit.length>0){
        console.log(`Pohon ${i} ${this.trees[i].name} Berbuah Tahun ini= ${this.trees[i].fruit.length}`)
      }

  }

  dead_trees(){
    console.log('\n')
    for(let i=0;i<this.trees.length;i++){
      if(this.trees[i].health == false)
        console.log(`Pohon ${i} ${this.trees[i].name} sudah mati`)
    }
  }


}

let pohonG = new PohonGrove();
pohonG.inputTree("MangoTree", 3, 1.8, 7, true)
pohonG.inputTree("MangoTree", 5, 2.4, 12, true)
pohonG.inputTree("AppleTree", 4, 1.2, 5, true)
pohonG.inputTree("PearTree", 7, 2, 15, true)


console.log('\nNEXT YEAR\n')
pohonG.nextYear()
pohonG.showAge()
pohonG.showTrees()
console.log('\n')
pohonG.maturetrees()
pohonG.dead_trees()


console.log('\nNEXT YEAR\n')
pohonG.nextYear()
pohonG.showAge()
pohonG.showTrees()
console.log('\n')
pohonG.maturetrees()
pohonG.dead_trees()

// Release 2
