// //Release 0
//
// "use strict"
//
// class MangoTree {
//
//   // Initialize a new MangoTree
//   constructor() {
//     this.umur = 0;
//     this.tinggi = 0;
//     this.harvested = "";
//     this.kesehatan = true;
//     this.umurMaksimum = 20;
//     this.tinggiMaksimum = 30;
//     this.buahMaksimum = 10;
//     this.manggaBagus = 0;
//     this.manggaJelek = 0;
//   }
//
//   getAge() {
//     return this.umur;
//   }
//   getHeight() {
//     return this.tinggi;
//   }
//   getFruits() {
//     return this.fruits;
//   }
//   getHealtyStatus() {
//     return this.kesehatan;
//   }
//
//
//   // Get current states here
//
//   // Grow the tree
//   grow() {
//     if(this.umur < this.umurMaksimum){
//       this.umur++;
//     }
//     if(this.umur >= this.umurMaksimum){
//       this.kesehatan = false;
//     }
//
//     this.tinggi += getRandomNumber(3,1);
//
//     if(this.tinggi > this.tinggiMaksimum){
//       this.tinggi = this.tinggiMaksimum;
//     }
//   }
//
//   // Produce some mangoes
//   produceMangoes() {
//     let angkaRandom = getRandomNumber(10,0);
//     let produksiBuah;
//
//     if(angkaRandom < this.buahMaksimum){
//       produksiBuah = angkaRandom;
//     } else {
//       produksiBuah = this.buahMaksimum;
//     }
//
//     for (var i = 0; i < produksiBuah; i++) {
//       let Mangga = new Mango;
//       if(Mangga.kualitas === 'Good'){
//         this.manggaBagus++;
//       } else {
//         this.manggaJelek++;
//       }
//     }
//   }
//
//   // Get some fruits
//   harvest() {
//     this.harvested = `${this.manggaBagus + this.manggaJelek} (${this.manggaBagus} good, ${this.manggaJelek} bad)`;
//     this.fruits = [];
//     this.manggaBagus = 0;
//     this.manggaJelek = 0;
//   }
//
// }
//
// class Mango {
//   // Produce a mango
//   constructor() {
//     var randomKualitasBuah = getRandomNumber(10,1);
//     if(randomKualitasBuah > 7){
//       this.kualitas = 'Good';
//     } else {
//       this.kualitas = 'Bad';
//     }
//   }
// }
//
// function getRandomNumber(angkaMax,angkaMin) {
//   return Math.floor((Math.random() * angkaMax) + angkaMin);
// }
//
// module.exports = {
//   MangoTree,
//   Mango
// }
//
// var tree = new MangoTree()
// console.log(`The tree is alive! :smile:`)
//
// do {
//   tree.grow()
//   tree.produceMangoes();
//   tree.harvest();
//
//   console.log(`[Year ${tree.umur} Report] Height = ${tree.tinggi} m |  Fruits harvested = ${tree.harvested}`);
// } while (tree.kesehatan != false)
//
// console.log(`The tree has met its end. :sad:`);

// class AppleTree {
//
//   constructor() {
//     this.umur = 0;
//     this.tinggi = 0;
//     this.harvested = "";
//     this.kesehatan = true;
//     this.umurMaksimum = 20;
//     this.tinggiMaksimum = 30;
//     this.buahMaksimum = 10;
//     this.apelBagus = 0;
//     this.apelJelek = 0;
//     this.fruits = [];
//   }
//
//   getAge() {
//     return this.umur;
//   }
//   getHeight() {
//     return this.tinggi;
//   }
//   getFruits() {
//     return this.fruits;
//   }
//   getHealtyStatus() {
//     return this.kesehatan;
//   }
//
//
//   // Get current states here
//
//   // Grow the tree
//   grow() {
//     if(this.umur < this.umurMaksimum){
//       this.umur++;
//     }
//     if(this.umur >= this.umurMaksimum){
//       this.kesehatan = false;
//     }
//
//     this.tinggi += getRandomNumber(3,1);
//
//     if(this.tinggi > this.tinggiMaksimum){
//       this.tinggi = this.tinggiMaksimum;
//     }
//   }
//
//   // Produce some mangoes
//   produceApples() {
//     let angkaRandom = getRandomNumber(10,0);
//     let produksiBuah;
//
//     if(angkaRandom < this.buahMaksimum){
//       produksiBuah = angkaRandom;
//     } else {
//       produksiBuah = this.buahMaksimum;
//     }
//
//     for (var i = 0; i < produksiBuah; i++) {
//       let Apel = new Apple;
//       if(Apel.kualitas === 'Good'){
//         this.apelBagus++;
//       } else {
//         this.apelJelek++;
//       }
//       this.fruits.push(Apel);
//     }
//
//   }
//
//   // Get some fruits
//   harvest() {
//     this.harvested = `${this.apelBagus + this.apelJelek} (${this.apelBagus} good, ${this.apelJelek} bad)`;
//     this.fruits = [];
//     this.apelBagus = 0;
//     this.apelJelek = 0;
//   }
// }
// class Apple {
//   constructor() {
//     var randomKualitasBuah = getRandomNumber(10,1);
//     var randomDiameterBuah = getRandomNumber(2,0);
//     if(randomKualitasBuah > 7){
//       this.kualitas = 'Good';
//     } else {
//       this.kualitas = 'Bad';
//     }
//     this.diameter = 0;
//     this.diameter += randomDiameterBuah;
//   }
// }
//
// function getRandomNumber(angkaMax,angkaMin) {
//   return Math.floor((Math.random() * angkaMax) + angkaMin);
// }
//
// module.exports = {
//   AppleTree,
//   Apple
// }
//
// var tree = new AppleTree()
// console.log(`The tree is alive! :smile:`)
//
// do {
//   tree.grow()
//   tree.produceApples();
//   tree.harvest();
//
//   console.log(`[Year ${tree.umur} Report] Height = ${tree.tinggi} m |  Fruits harvested = ${tree.harvested}`);
// } while (tree.kesehatan != false)
//
// console.log(`The tree has met its end. :sad:`);

// -------------------------------------------------------------------------------------------------------------------

// // Release 1

function getRandomNumber(angkaMax,angkaMin) {
  return Math.floor((Math.random() * angkaMax) + angkaMin);
}

class FruitTree {
  constructor(umur, tinggi, harvested, kesehatan){
    this._umur = umur;
    this._tinggi = tinggi;
    this._harvested = harvested;
    this._kesehatan = kesehatan;
  }

  get umur() {
    return this._umur;
  }

  get tinggi() {
    return this._tinggi;
  }

  get harvested() {
    return this._harvested;
  }

  get kesehatan() {
    return this._kesehatan;
  }

  grow(umurMaksimum){
    if(this._umur < umurMaksimum){
      this._umur++;
      this._kesehatan = true;
    }

    if(this._umur > umurMaksimum){
      this._kesehatan = false;
    }

    this._tinggi += getRandomNumber(3,1);

    if(this._tinggi > this._tinggiMaksimum){
      this._tinggi = this._tinggiMaksimum;
    }
  }

}
class Fruit {
  constructor(){

  }
}

class MangoTree extends FruitTree {

  constructor(umur, tinggi, harvested, kesehatan) {
    super(umur, tinggi, harvested, kesehatan);
    this._umurMaksimum = 10;
    this._tinggiMaksimum = 20;
    this._buahMaksimum = 10;
    this._buah = [];
    this._umurBerbuah = 2;
    this._nama = "Pohon Mangga";
    if(umur >= this._umurBerbuah){
      this._mature = true;
    } else {
      this._mature = false;
    }

    if(umur > this._umurMaksimum){
      this._kesehatan = false;
    } else {
      this._kesehatan = true;
    }
  }

  grow(){
    super.grow(this._umurMaksimum);
    this.produceMangoes();
  }

  produceMangoes() {
    let angkaRandom = getRandomNumber(10,0);

    if(this._umur >= this._umurBerbuah){
      if(angkaRandom < this._buahMaksimum){
        this._harvested = angkaRandom;
      } else {
        this._harvested = this._buahMaksimum;
      }
      this._mature = true;
    } else {
      this._mature = false;
    }

    for (var i = 0; i < this._harvested; i++) {
      let Mangga = new Mango();
      this._buah.push(Mangga);
    }

    this.harvest();
  }

  harvest() {
    this._buah = [];
  }

}

class Mango extends Fruit{
  constructor(){
    super();
  }
}



// var tree = new MangoTree(2, 2, 0, true);
// console.log(`The tree is alive! :smile:`)
//
// do {
//   tree.grow()
//   tree.produceMangoes();
//   // tree.harvest();
//
//   console.log(`[Year ${tree._umur} Report] Height = ${tree._tinggi} m |  Fruits harvested = ${tree._harvested} | healthy = ${tree._kesehatan} | buah = ${tree._buah.length}`);
// } while (tree._kesehatan != false)
//
// console.log(`The tree has met its end. :sad:`);


class AppleTree extends FruitTree {

  constructor(umur, tinggi, harvested, kesehatan) {
    super(umur, tinggi, harvested, kesehatan);
    this._umurMaksimum = 8;
    this._tinggiMaksimum = 15;
    this._buahMaksimum = 50;
    this._umurBerbuah = 2;
    this._buah = [];
    this._nama = "Pohon Apel";
    if(umur >= this._umurBerbuah){
      this._mature = true;
    } else {
      this._mature = false;
    }

    if(umur > this._umurMaksimum){
      this._kesehatan = false;
    } else {
      this._kesehatan = true;
    }
  }

  grow(){
    super.grow(this._umurMaksimum);
    this.produceApples();
  }

  produceApples() {
    let angkaRandom = getRandomNumber(10,0);

    this._umurBerbuah = this._umur - 2;

    if(this._umur >= this._umurBerbuah){
      if(angkaRandom < this._buahMaksimum){
        this._harvested = angkaRandom;
      } else {
        this._harvested = this._buahMaksimum;
      }
      this._mature = true;
    } else {
      this._mature = false;
    }

    for (var i = 0; i < this._harvested; i++) {
      let Apel = new Apple();
      this._buah.push(Apel);
    }
    this.harvest();
  }

  harvest() {
    this._buah = [];
  }

}

class Apple extends Fruit{
  constructor(){
    super();
  }
}



// var tree = new AppleTree(2, 2, 0, true);
// console.log(`The tree is alive! :smile:`)
//
// do {
//   tree.grow()
//   tree.produceApples();
//   tree.harvest();
//
//   console.log(`[Year ${tree._umur} Report] Height = ${tree._tinggi} m |  Fruits harvested = ${tree._harvested} | healthy = ${tree._kesehatan}`);
// } while (tree._kesehatan != false)
//
// console.log(`The tree has met its end. :sad:`);

class PearTree extends FruitTree {

  constructor(umur, tinggi, harvested, kesehatan) {
    super(umur, tinggi, harvested, kesehatan);
    this._umurMaksimum = 8;
    this._tinggiMaksimum = 15;
    this._buahMaksimum = 50;
    this._umurBerbuah = 2;
    this._buah = [];
    this._nama = "Pohon Pir";
    if(umur >= this._umurBerbuah){
      this._mature = true;
    } else {
      this._mature = false;
    }

    if(umur > this._umurMaksimum){
      this._kesehatan = false;
    } else {
      this._kesehatan = true;
    }
  }

  grow(){
    super.grow(this._umurMaksimum);
    this.producePear();
  }

  producePear() {
    let angkaRandom = getRandomNumber(10,0);

    this._umurBerbuah = this._umur - 2;

    if(this._umur >= this._umurBerbuah){
      if(angkaRandom < this._buahMaksimum){
        this._harvested = angkaRandom;
      } else {
        this._harvested = this._buahMaksimum;
      }
      this._mature = true;
    } else {
      this._mature = false;
    }

    for (var i = 0; i < this._harvested; i++) {
      let Pir = new Pear();
      this._buah.push(Pir);
    }
    this.harvest();
  }

  harvest() {
    this._buah = [];
  }

}

class Pear extends Fruit{
  constructor(){
    super();
  }
}



// var tree = new PearTree(2, 2, 0, true);
// console.log(`The tree is alive! :smile:`)
//
// do {
//   tree.grow()
//   tree.producePears();
//   tree.harvest();
//
//   console.log(`[Year ${tree._umur} Report] Height = ${tree._tinggi} m |  Fruits harvested = ${tree._harvested} | healthy = ${tree._kesehatan}`);
// } while (tree._kesehatan != false)
//
// console.log(`The tree has met its end. :sad:`);


// Release 2
class TreeGrove {
  constructor(){
    this._trees = [];
  }

  inputTree(nama, umur, tinggi, harvested, kesehatan){
    let tree;
    if(nama === 'MangoTree'){
      tree = new MangoTree(umur, tinggi, harvested, kesehatan);
    } else if(nama === 'AppleTree'){
      tree = new AppleTree(umur, tinggi, harvested, kesehatan);
    } else if(nama === 'PearTree'){
      tree = new PearTree(umur, tinggi, harvested, kesehatan);
    }
    this._trees.push(tree);
    // console.log(this._trees);
  }

  nextYear(){
    for (var i = 0; i < this._trees.length; i++) {
      this._trees[i].grow();
    }
  }

  showAge(){
    for (var i = 0; i < this._trees.length; i++) {
      console.log(`Pohon ${this._trees[i]._nama} berumur : ${this._trees[i]._umur} tahun`);
    }
    // console.log(this._trees[3]._nama);
  }

  showTree(){
    for (var i = 0; i < this._trees.length; i++) {
      console.log(`Pohon ${this._trees[i]._nama} berumur : ${this._trees[i]._umur} memiliki tinggi : ${this._trees[i]._tinggi} m, berbuah berjumlah ${this._trees[i]._harvested}`);
    }
  }

  matureTrees(){
    for (var i = 0; i < this._trees.length; i++) {
      if(this._trees[i]._mature === true){
        console.log(`Pohon ${this._trees[i]._nama} masih berbuah`);
      }
    }
  }

  deadTrees(){
    for (var i = 0; i < this._trees.length; i++) {
      if(this._trees[i]._kesehatan === false){
        console.log(`Pohon ${this._trees[i]._nama} mati`);
      } else {
        console.log(`Pohon ${this._trees[i]._nama} sehat`);
      }
    }
  }
}

var grove = new TreeGrove();
grove.inputTree("MangoTree", 3, 1.8, 7, true);
grove.inputTree("MangoTree", 5, 2.4, 12, true);
grove.inputTree("AppleTree", 4, 1.2, 5, true);
grove.inputTree("PearTree", 7 , 2, 15, true);

grove.nextYear();
grove.showAge();
grove.nextYear();
grove.showAge();
grove.showTree();
grove.matureTrees();
grove.deadTrees();
