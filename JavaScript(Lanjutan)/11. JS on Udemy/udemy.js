// Spread operator
const name = ['nalendro', 'agung']
const myName = [...name, 'wicaksono']
console.log(myName)

// Rest operator
const nama = {
  name: 'nalendro',
}
const lengkap = {
  ...nama,
  usia: 22,
}
console.log(lengkap)
