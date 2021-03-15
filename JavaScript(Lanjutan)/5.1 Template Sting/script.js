//Template sting sederhana
// const nama = "agung";
// const usia = 22;
// console.log(`halo saya ${nama}, usia ${usia}`);

//Embeded Expression/ call function
// console.log(`${1 + 3}`);
const x = 10;
console.log(`${x % 2 == 0 ? "Genap" : "GANJIL"}`);

// HTML Fragmen
let mahas = {
  nama: "agung",
  usia: 22,
  npk: "3.32.16.1.18",
};
const el = `<div class="mhs">
<h2>${mahas.nama}</h2>
<h2>${mahas.usia}</h2>
<h2>${mahas.npk}</h2></div>`;
console.log(el);
