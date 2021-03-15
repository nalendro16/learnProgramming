// 1. Object Literal
// let mhs = {
//   nama: "Agung",
//   energi: 100,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`${this.nama} Silahkan Madang`);
//   },
// };

// 2.Function Declaration
// function mahasiswa(nama, energi) {
//   let mhs = {};
//   mhs.nama = nama;
//   mhs.energi = energi;
//   mhs.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`${this.nama} Silahkan Madang`);
//   };
//   return mhs;
// }
// let mahas = mahasiswa("Agung", 100);

// 3. Function Construction
// function mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`${this.nama} Silahkan Madang`);
//   };
// }
// let agung = new mahasiswa("Agung", 100);

//4. Object.Created
// const methMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`${this.nama} Silahkan Madang`);
//   },
//   main: function (main) {
//     this.energi -= main;
//     console.log(`${this.nama} Silahkan Madang`);
//   },
// };

// function mahasiswa(nama, energi) {
//   let mhs = Object.create(methMahasiswa);
//   mhs.nama = nama;
//   mhs.energi = energi;
//   return mhs;
// }
// let mahas = mahasiswa("Agung", 100);

// Construcion Prototyping
// function mahasiswa(nama, energi) {
//   // let mhs = Object.create(methMahasiswa);
//   // let this = Object.create(Mahasiswa,prototype)
//   this.nama = nama;
//   this.energi = energi;
//   // return mhs;
// }
// mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `${this.nama} Selamat Makan`;
// };
// mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `${this.nama} Selamat Main`;
// };
// mahasiswa.prototype.tidr = function (tidr) {
//   this.energi += tidr * 2;
//   return `${this.nama} Selamat Istirahat`;
// };
// let Agung = new mahasiswa("Agung", 100);

//Class Object
// class mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }

//   makan(porsi) {
//     this.energi += porsi;
//     return `${this.nama} Selamat Makan`;
//   }

//   main(jam) {
//     this.energi -= jam;
//     return `${this.nama} Selamat Main`;
//   }

//   tidr(tidr) {
//     this.energi += tidr * 2;
//     return `${this.nama} Selamat Istirahat`;
//   }
// }

// let agung = new mahasiswa("Agung", 100);

// Saat menuliskan array
let angka = [];

// // Maka sebenarnya dibelakang layar ada fungsi ini
// let angka = [1, 2, 3];
// // dengan menggunakan fungsi prototype
// function array() {
//   let this = Object.create(array.prototype);
// }
