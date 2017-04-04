"use strict"

class FruitTree {
	constructor(name, age, height, healthStatus, heightMaturity, deathAge) {
		this.name = name
		this.age = 0 || age
		this.height = 0  || height
		this.numFruits = 0
		this.healthStatus = true || healthStatus
		this.bucket = []
		this.heightMaturity = 0 || heightMaturity
		this.deathAge = 0 || deathAge
	}

	grow() {
		this.age++
		if (this.age <= this.heightMaturity) {
			this.height += getRandomNumber();
		}
		if (this.age >= this.deathAge) {
			this.healthStatus = false
		}
	}

	harvest() {
		var harvested = this.bucket.length
		var countBad = 0
		var countGood = 0
		for (var i=0; i<harvested; i++) {
			if (this.bucket[i].quality === 'good') {
				countGood +=1
			}else if (this.bucket[i].quality === 'bad') {
				countBad +=1
			}
		}
	}
}
class Fruit {
	constructor() {
    this.quality = this.assignQuality()
  }
  assignQuality() {
    var mangoQuality = ["good","bad"]
    var qualityCheck = mangoQuality[Math.floor(Math.random()*mangoQuality.length)]
    return qualityCheck
  }
}

function getRandomNumber() {
  return Math.floor(Math.random()*10)

}

class MangoTree extends FruitTree {
	constructor(age, height,healthStatus) {
		super('Mango Tree', age, height,healthStatus, 20, 25)

	}
	produceMango() {
		this.bucket = []
		this.numFruits = Math.floor(Math.random()*10)
		for (var i=0; i<this.numFruits; i++) {
			this.bucket.push(new Mango())
		}
	}

	nextYear() {
		super.grow()
		this.produceMango()
	}
}

class Mango extends Fruit {
	constructor(){
		super()
	}
}

class AppleTree extends FruitTree {
	constructor(age, height,healthStatus) {
		super('Apple Tree', age, height,healthStatus, 25, 30)
	}

	produceApple() {
		this.bucket = []
		this.numFruits = Math.floor(Math.random()*10)
		for (var i=0; i<this.numFruits; i++) {
			this.bucket.push(new Apple())
		}
	}

	nextYear() {
		super.grow()
		this.produceApple()
	}
}

class Apple extends Fruit {
	constructor(){
		super()
	}
}

class PearTree extends FruitTree {
	constructor(age, height,healthStatus) {
		super('Pear Tree', age, height, healthStatus, 5, 35)
	}

	produceApple() {
		this.bucket = []

		this.numFruits = Math.floor(Math.random()*10)
		for (var i=0; i<this.numFruits; i++) {
			this.bucket.push(new Pear())
		}
	}

	nextYear() {
		super.grow()
		this.produceApple()
	}
}

class Pear extends Fruit {
	constructor(){
		super()
	}
}



let mt = new MangoTree(8,90,true)
let at = new AppleTree(5,80,true)

let pt = new PearTree(10,70, true)

mt.nextYear()
console.log(mt)

at.nextYear()
console.log(at)

pt.nextYear()
console.log(pt)

class TreeGrove {
	constructor() {
		this.trees = []

	}
	inputTree(tree) {
		this.trees.push(tree)
	}

	show_ages() {
		for (var i=0; i<this.trees.length; i++) {
			console.log("--",this.trees[i].age)
		}
	}
	mature_trees() {
		for (var i=0; i<this.trees.length; i++) {
			if (this.trees[i].healthStatus === true) {
				console.log("---", this.trees[i].name)
			}
		}
	}
	dead_trees() {
		for (var i=0; i<this.trees.length; i++) {
			if (this.trees[i].healthStatus === false) {
				console.log("----", this.trees[i].name)
			}else {
				console.log("----", `${this.trees[i].name} is still alive!`)
			}
		}
	}
}

let treegrove = new TreeGrove()
treegrove.inputTree(new MangoTree(8,90,true))
treegrove.inputTree(new AppleTree(5,80,true))
treegrove.inputTree(new PearTree(10,70, true))
treegrove.show_ages()
treegrove.mature_trees()
treegrove.dead_trees()
