// jika menulis console log diatas var nama maka otomatis dibuatkan var nama = undefined

// console.log(nama);
// var nama = "agung";

// creation phase pada global context
//console.log(sayHello)
// lakukan hoisting untuk 2 var dibawah
//kalau menulis log sebelum function tidak masalah

// var nama = "agung";
// var umur = 21;
// sayHello();
// function sayHello() {
//   return `Halo Nama sata ${nama} Umur ${umur}`;
// }

// function membuat local execution context

// var nama = "Nalendro";
// var username = "@nalendrowski";

// function cetakURL(username) {
//   var URL = "http://instagram.com/"; //local execution context
//   return URL + username;
// }
// console.log(cetakURL(username));

// function a() {
//   console.log("ini A");

//   function b() {
//     console.log("ini B");

//     function c() {
//       console.log("ini C");
//     }
//     c();
//   }
//   b();
// }
// a();

function satu() {
  var nama = "shandika";
  console.log(nama);
} //diabaikan

function dua() {
  console.log(nama);
} //tdk ada krn argument ()

console.log(nama); //undefined
var nama = "erik";
satu(); //sandika
dua("dody"); //erik
console.log(nama); //erik
