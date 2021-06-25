class tambahHum {
  age = 22
  printAge() {
    console.log(this.age)
  }
}

class human extends tambahHum {
  age = 23
  name = 'Agung'
  printName() {
    console.log(this.name)
  }
}

const person = new human()
person.printName()
person.printAge()
