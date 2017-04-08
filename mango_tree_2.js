"use strict"

// Release 0


// Release 1
class FruitTree {
  constructor(data){
    this.height = 0;
    this.jenis = data["jenis"];
    this.name = data['name'];
    this.umur = data['umur'];
    this.pertumbuhan = data['pertumbuhan'];//pertambahan per th
    this.berhentiTumbuh = data['berhentiTumbuh'];//berhenti tumbuh mulai th
    this.mulaiBerbuah = data['mulaiBerbuah'];//pertamakali mulai berbuah pd th
    this.jumlahBuah = data['jumlahBuah'];//hasil buah per th
    this.panenBuah = this.produce();
    this.status = "hidup";
    this.umurMax = data["umurMax"]
  }
  grow(){
    if(this.umur >= this.umurMax){
      this.status = "mati"
    }
    if(this.status == "hidup") {
      this.umur += 1;
      this.height += this.pertumbuhan;
      this.matureAge();
      this.produce();

      return `Age now : ${this.umur} || Height : ${Math.floor(this.height)} || Harvested : ${this.panenBuah}`;
    } else {
      return `pohon sudah mati`
    }
  }

  matureAge(){
    if(this.umur == 5){
      return this.mature = true;
    }
  }
  produce(){
    let good = 0
    let bad = 0
    for(let i = 0; i < this.jumlahBuah-(Math.floor(Math.random()*10+1)); i++){
      let random = new Fruit();
      random.quality == 'good' ? good += 1 : bad += 1
    }
    return this.panenBuah = `${good} baik, ${bad} buruk, total ${good + bad}`
  }
}
class Fruit {
  constructor(){
    this.quality = Math.random() > 0.3 ? 'good' : 'bad';
  }
}
//////////////////////////////////////////////////////////////////////////////////////
class AppleTree extends FruitTree {
  constructor(data){
    super(data)
    this.buah = 'apel';
  }

}
class Apple extends Fruit{
  constructor(qty){
    super(qty)
  }
}
class PearsTree extends FruitTree {
  constructor(data){
    super(data)
    this.buah = 'pears';
  }
}
class Pears extends Fruit{
  constructor(qty){
    super(qty)
  }
}
class MangoTree extends FruitTree {
  constructor(data){
    super(data)
    this.buah = 'pears';
  }
}
class Mango extends Fruit{
  constructor(qty){
    super(qty)
  }
}
/////////////////////////////////////////////////////
class TreeGrove {
  constructor(){
    this.hutan = [];
  }
  inputTree(pohon){
    switch(pohon['jenis']){
      case 'pohonApel' : this.hutan.push(new AppleTree(pohon)); break;
      case 'pohonPears' : this.hutan.push(new PearsTree(pohon)); break;
      case 'pohonMangga' : this.hutan.push(new MangoTree(pohon)); break;
    }
  }
  treeGrow(){
    console.log('------------------------------------------------------')
    for (let i = 0; i < this.hutan.length; i++) {
      this.hutan[i].grow()
      console.log(this.hutan[i].grow())
    }
  }
  show_trees(){
    console.log('======= tree list =========')
    for(let i = 0; i < this.hutan.length; i++){
        console.log(`${i+1}. ${this.hutan[i].name}`)
    }
  }
  mature_trees(){
    console.log('======= mature tree =========')
    for(let i = 0; i < this.hutan.length; i++){
      if(this.hutan[i].umur >= this.hutan[i].mulaiBerbuah){
        console.log(`${i+1}. ${this.hutan[i].name}`)
      }
    }
  }
  dead_trees(){
    console.log('======== dead tree ==========')
    for(let i = 0; i < this.hutan.length; i++){
      if(this.hutan[i].status == "mati"){
        console.log(`${i+1}. ${this.hutan[i].name}`)
      }
    }
  }
}

let pohonApel_1 = {
  'jenis': "pohonApel",
  'name': "pohonApel_1",
  'pertumbuhan': 0.3,
  'berhentiTumbuh': 6,
  'mulaiBerbuah': 3,
  'jumlahBuah': 35,
  'umur': 2,
  'umurMax': 40
}
let pohonApel_2 = {
  'jenis': "pohonApel",
  'name': "pohonApel_2",
  'umur': 4,
  'pertumbuhan': 0.5,
  'berhentiTumbuh': 6,
  'mulaiBerbuah': 4,
  'jumlahBuah': 50,
  'umurMax': 19
}
let pohonPears_1 = {
  'jenis': "pohonPears",
  'name': "pohonPears_1",
  'umur': 1,
  'pertumbuhan': 0.25,
  'berhentiTumbuh': 14,
  'mulaiBerbuah': 4,
  'jumlahBuah': 30,
  'umurMax': 15
}

var grove = new TreeGrove()
// produce()
grove.inputTree(pohonApel_1)
grove.inputTree(pohonApel_2)
grove.inputTree(pohonPears_1)

grove.show_trees()

grove.treeGrow()
grove.treeGrow()
grove.treeGrow()
grove.treeGrow()
grove.treeGrow()
grove.treeGrow()
grove.treeGrow()
grove.treeGrow()
grove.treeGrow()


grove.mature_trees()
grove.dead_trees()
