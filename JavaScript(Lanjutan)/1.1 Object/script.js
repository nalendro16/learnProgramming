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
function mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`${this.nama} Silahkan Madang`);
  };
}
let agung = new mahasiswa("Agung", 100);
