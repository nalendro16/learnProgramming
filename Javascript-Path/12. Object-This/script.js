//THIS
// var a = 10;
// console.log(this.a); //sama saja menulis console.log(window.a);

//membuat object

//Cara 1- Function Declaration
// function halo() {
//   console.log(this)
//   console.log('Halo')
// }
// this.halo() //Memanggil function halo
// This mengembalikan object global

//Cara 2- Object Literal
// var obj = { a: 10, nama: 'agung' }
// obj.halo = function () {
//   console.log(this)
//   console.log('Halo')
// }
// obj.halo() //memanggil obj halo
//This mengembalikan object yg bersangkutan(halo)

//Cara 3- function construction
function Halo() {
  console.log(this)
  console.log('Halo')
}
var obj1 = new Halo()
var obj2 = new Halo()
//mengembalikan object yg baru dibuat
