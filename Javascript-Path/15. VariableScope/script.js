// // Varialbe global
// var a = 1

// function tes() {
//   var b = 2
// }
// tes()
// console.log(b) tidak bisa berjalan karena b ada didlm function
//========================================================

// var a=1;

// function tes(){
//     var a = 2;
// }
// tes()
// console.log(a) //akan menampilkan a=1 karena berada dalam variable global
//========================================================

// var a=1;

// function tes(){
//     //name conflict
//     a = 2; //a=2 akan menimpa 1
// }
// tes()
// console.log(a) //tidak bisa berjalan karena b ada didlm function
//========================================================

// function tes(){
//     a = 2; // a akan menjadi varibale global**
// }
// tes()
// console.log(a)
//========================================================

var a = 1

function tes(a) {
  //name conflict
  console.log(a)
}
tes(2) //2 akan masuk dalam function a
