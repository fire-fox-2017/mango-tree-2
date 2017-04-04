"use strict"


// Release 1
class FruitTree {
  constructor() {
    this._maxHeigtht = 3.0;
    this._maxAge = 15;
  }

  grow(){
    this.age++;
    if(this.age>=this.harvestAge){
      this.mature='true';
    }
    if(this.age>=this._maxAge){
      this.health='false'
    }
    if(this.height<this._maxHeigtht){
      this.height=this.height+(Math.random()*1);
      if(this.height>this._maxHeigtht){
        this.height=this._maxHeigtht;
      }
    }


  }



}

class Fruit {
  constructor() {


  }
}
// Release 0
class AppleTree extends FruitTree{
  constructor(species,age,height,harvestAge,health) {
      super();
      this.species=species;
      this.age=age;
      this.height=height;
      this.harvestAge=harvestAge;
      this.health=health;
      this.mature='false';
  }
  grow(){
    super.grow();
  }
}

class MangoTree extends FruitTree{
  constructor(species,age,height,harvestAge,health) {
      super();
      this.species=species;
      this.age=age;
      this.height=height;
      this.harvestAge=harvestAge;
      this.health=health;
      this.mature='false';
  }
  grow(){
    super.grow();
  }
}

class PearTree extends FruitTree{
  constructor(species,age,height,harvestAge,health) {
      super();
      this.species=species;
      this.age=age;
      this.height=height;
      this.harvestAge=harvestAge;
      this.health=health;
      this.mature='false';
  }
  grow(){
    super.grow();
  }
}


class Apple extends Fruit{
  constructor() {

  }
}



// Release 2
class TreeGrove {
  constructor() {
    this.grove=[];
  }

  inputTree(species,age,height,harvestAge,health){
    if(species==='AppleTree'){
      let appleTree = new AppleTree(species,age,height,harvestAge,health);
      this.grove.push(appleTree);
    }
    if(species==='PearTree'){
      let pearTree = new PearTree(species,age,height,harvestAge,health);
      this.grove.push(pearTree);
    }
    if(species==='MangoTree'){
      let mangoTree = new MangoTree(species,age,height,harvestAge,health);
      this.grove.push(mangoTree);
    }

  }



  show_tree(){
    let temp='';
    for(let i=0;i<this.grove.length;i++){
        temp=temp+' '+this.grove[i].species;

    }
    console.log(temp);

  }

  mature_trees(){

    let temp='';
    for(let i=0;i<this.grove.length;i++){

      if(this.grove[i].mature==='true'){
        temp=temp+' '+this.grove[i].species;
      }
    }
    if(temp===''){
      console.log('blom ada yang mature');
    }else{
      console.log(temp);
    }


  }

  dead_trees(){
    let temp='';
    for(let i=0;i<this.grove.length;i++){
      if(this.grove[i].health=='false'){
        temp=temp+this.grove[i].species;
      }
    }
    if(temp===''){
      console.log('blom ada yang mati');
    }else{
      console.log(temp);
    }



  }

  nextYear(){
    for(let i=0;i<this.grove.length;i++){
      this.grove[i].grow();
    }


  }

  show_age(){
    for(let i=0;i<this.grove.length;i++){
      console.log(`${this.grove[i].species} : ${this.grove[i].age}`);
    }

  }


}

var Grove = new TreeGrove()

Grove.inputTree('MangoTree', 3, 1.8, 5, true);
Grove.inputTree('MangoTree', 5, 2.4, 12, true);
Grove.inputTree('AppleTree', 4, 1.2, 5, true);
Grove.inputTree('PearTree', 7, 2, 15, true);
Grove.mature_trees();
Grove.show_tree();
Grove.nextYear();
Grove.show_tree()
Grove.mature_trees();
Grove.nextYear();
Grove.mature_trees();
Grove.nextYear();
Grove.mature_trees();
Grove.show_age();
Grove.dead_trees();
