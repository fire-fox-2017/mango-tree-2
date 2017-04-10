"use strict"

// Release 0

  // Release 1
  class FruitTree {
    constructor(nama,umur,tinggi,buah,kesehatan){
      this._nama=nama;
      this._umur=umur;
      this._tinggi=tinggi;
      this._jumlahBuah=buah;
      this._statusKesehatan=kesehatan;
      this._panen=0;
    }

    get nama(){
      return this._nama;
    }
    get umur() {
      return this._umur;
    }
    get tinggi() {
      return this._tinggi;
    }
    get jumlahBuah() {
      return this._jumlahBuah;
    }
    get statusKesehatan() {
      return this._statusKesehatan;
    }
    // Get current states here

    // Grow the trees
    grow() {
      if(this._nama==="MangoTree"){
        let berbuah = 10;
        let batasTumbuh = 5;
        let maxUmur = 15;
        let randomTinggi = this.randomNumber(batasTumbuh);
        this._umur += 1;
        if(this._umur <= batasTumbuh) {
          this._tinggi += randomTinggi;
        }
        if(this._umur === berbuah) {
          this.produceFruits();
        }
        if(this._umur === maxUmur) {
          this._statusKesehatan = false;
        }
      }
      else if(this._nama==="AppleTree"){
        let berbuah = 10;
        let batasTumbuh = 7;
        let maxUmur = 20;
        let randomTinggi = this.randomNumber(batasTumbuh);
        this._umur += 1;
        if(this._umur <= batasTumbuh) {
          this._tinggi += randomTinggi;
        }
        if(this._umur === berbuah) {
          this.produceFruits();
        }
        if(this._umur === maxUmur) {
          this._statusKesehatan = false;
        }
      }
      else if(this._nama==="PearTree"){
        let berbuah = 15;
        let batasTumbuh = 8;
        let maxUmur = 25;
        let randomTinggi = this.randomNumber(batasTumbuh);
        this._umur += 1;
        if(this._umur <= batasTumbuh) {
          this._tinggi += randomTinggi;
        }
        if(this._umur === berbuah) {
          this.produceFruits();
        }
        if(this._umur === maxUmur) {
          this._statusKesehatan = false;
          this._jumlahBuah=0;
        }
    }
  }

    // Produce some fruits
    produceFruits() {
      let fruit =0;
      for(let i = 0; i < this.randomNumber(5); i++) {
         fruit +=1;
        this._jumlahBuah=fruit;
      }
    }

    // Get some fruits
    harvest() {
      this._panen = this._jumlahBuah;
      return this._panen;
    }

    randomNumber(num) {
      let random =Math.floor(Math.random()*num)+3;
      return random;
    }
  }

  class MangoTree extends FruitTree {

    // Initialize a new MangoTree
    constructor(nama,umur,tinggi,buah,kesehatan) {
      super(nama,umur,tinggi,buah,kesehatan);
    }

    get nama(){
      return super.nama;
    }
    get umur() {
      return super.umur;
    }
    get tinggi() {
      return super.tinggi;
    }
    get buah() {
      return super.jumlahBuah;
    }
    get kesehatan() {
      return super.statusKesehatan;
    }


    grow() {

      super.grow();

    }

    // Produce some mangoes
    produceMangoes() {
      super.produceFruits();
    }

    // Get some fruits
    harvest() {
      super.harvest();
    }

  }

  class AppleTree extends FruitTree {

    // Initialize a new MangoTree
    constructor(nama,umur,tinggi,buah,kesehatan) {
      super(nama,umur,tinggi,buah,kesehatan);
    }


    get nama(){
      return super.nama;
    }
    get umur() {
      return super.umur;
    }
    get tinggi() {
      return super.tinggi;
    }
    get buah() {
      return super.jumlahBuah;
    }
    get kesehatan() {
      return super.statusKesehatan;
    }


    // Get current states here

    // Grow the tree
    grow() {

      super.grow();

    }

    // Produce some mangoes
    produceMangoes() {
      super.produceFruits();
    }

    // Get some fruits
    harvest() {
      super.harvest();
    }

  }

  class PearTree extends FruitTree {

    // Initialize a new MangoTree
    constructor(nama,umur,tinggi,buah,kesehatan) {
      super(nama,umur,tinggi,buah,kesehatan);
    }

    get nama(){
      return super.nama;
    }
    get umur() {
      return super.umur;
    }
    get tinggi() {
      return super.tinggi;
    }
    get buah() {
      return super.jumlahBuah;
    }
    get kesehatan() {
      return super.statusKesehatan;
    }


    // Get current states here

    // Grow the tree
    grow() {

      super.grow();

    }

    // Produce some mangoes
    produceMangoes() {
      super.produceFruits();
    }

    // Get some fruits
    harvest() {
      super.harvest();
    }

  }

  // Release 2
  class TreeGrove {
    constructor(){
      this.tree=[];
      this.trees = [];
    }

    inputTree(nama,umur,tinggi,buah,kesehatan){
      if(nama==="MangoTree")
      this.trees.push(new MangoTree(nama,umur,tinggi,buah,kesehatan));
      else if(nama==="AppleTree")
      this.trees.push(new AppleTree(nama,umur,tinggi,buah,kesehatan));
      else if(nama==="PearTree")
      this.trees.push(new PearTree(nama,umur,tinggi,buah,kesehatan));
    }

    nextYear(){
      for(let i=0; i<this.trees.length; i++)
      {
        this.trees[i].grow();
      }
    }

    showAges(){
      for(let i=0; i<this.trees.length; i++)
      {
        console.log(`Pohon ${this.trees[i].nama} berumur ${this.trees[i].umur} tahun`);
      }
    }
    showTrees(){
      for(let i=0; i<this.trees.length; i++)
      {
          console.log(`Pohon ${this.trees[i].nama} | umur ${this.trees[i].umur} tahun | ${this.trees[i].tinggi} meter | Berbuah ${this.trees[i].jumlahBuah} `);
      }
    }
    mature_trees(){
      for(let i=0; i<this.trees.length; i++)
      {
        if(this.trees[i].jumlahBuah>0&&this.trees[i].kesehatan===true)
        console.log(`Pohon ${this.trees[i].nama} berbuah`);
      }
    }
    dead_trees(){
      for(let i=0; i<this.trees.length; i++)
      {
        if(this.trees[i].kesehatan===false)
        console.log(`Pohon ${this.trees[i].nama} sudah mati`);
      }
    }
  }



  var grove = new TreeGrove()
  //input your trees data !
  //pohon-umur-tinggi-buah-kesehatan

  grove.inputTree("MangoTree",3,1.8,7,true)
  grove.inputTree("MangoTree",5,2.4,12,true)
  grove.inputTree("AppleTree",4,1.2,5,true)
  grove.inputTree("PearTree",7,2,15,true)

  // next year
for(let i=0;i<10;i++)
  grove.nextYear();

  // show trees age
  grove.showAges()
  // show trees
  grove.showTrees()
  // show trees
  grove.mature_trees()
  // show trees
  grove.dead_trees()
