// arrow Function

// let tampilNama = (nama) => {
//   return `${nama} Adalah saya`;
// };
// console.log(tampilNama("Nalendro"));

//=============kalau parameter satu nggak perlu kurung pada argumen dan jika return hanya 1, tidak perlu return tidak perlu kurung kurawal
// let tampilNama = (nama) => `${nama} Adalah saya`;
// console.log(tampilNama("Nalendro"));

//parameter lebih dari satu
// let tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// };

// console.log(tampilNama("Nalendro", "Sore"));

let mahasiswa = ["nalendro", "agung", "wicaksono"];
// let jmlHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jmlHuruf);

// let jmlHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jmlHuruf);

let jmlHuruf = mahasiswa.map((nama) => ({ nama, jml: nama.length }));
console.table(jmlHuruf);
