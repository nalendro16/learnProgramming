// This Arrow Function

// const mahasiswa = function () {
//   this.nama = "Nalendro";
//   this.umur = 21;
//   this.sayHello = () => {
//     return `halo saya ${this.nama} usia ${this.umur}`;
//   };
//   setInterval(() => {
//     console.log(this.umur++); //this hoisting ke fn mahasiswa
//   }, 500);
// };
// const agung = new mahasiswa();
// console.log(agung.sayHello());

//arrow function diatas dengan object literal
// const mahas = {
//   nama: "Nalendro",
//   usia: 21,
//   sayHello: () => {
//     return `halo saya ${this.nama} usia ${this.usia}`;
//   },
// };
// console.log(mahas.sayHello());

//Penggunaan Arrow Function
const box = document.getElementsByClassName("box")[0];
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";
  console.log(this);
  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);

  setTimeout(() => {
    this.classList.toggle(dua);
  }, 500);
});
