class tambahHum {
  constructor() {
    this.age = 22
  }
  printAge() {
    console.log(this.age)
  }
}

class human extends tambahHum {
  constructor() {
    super()
    this.age
    this.name = 'Agung'
  }
  printName() {
    console.log(this.name)
  }
}

const person = new human()
person.printName()
person.printAge()
