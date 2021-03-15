// Distructuring Function

// function penjumlahanPengalian(a, b) {
//   return [a + b, a * b];
// }

// const jumlah = penjumlahanPengalian(2, 3)[0]; //mengambil index tambah saja

// const [jumlah, kali] = penjumlahanPengalian(2, 3); //debgn distructur function mengambil nilai kali

// Return dengan functiopn agar pemanggilan tidak urut
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//   };
// }
// const { kurang, kali, tambah } = kalkulasi(2, 3);
// console.log(kali);

// Distructur return arguments
// const mahas1 = {
//   nama: "nalendro",
//   umur: 21,
//   npk: "3321618",
// };

// function cetakMahas(nama, umur) {
//   return `halo nama saya${nama}, usia ${umur}`;
// }

// console.log(cetakMahas(mahas1.nama, mahas1.umur));

const mahas1 = {
  nama: "nalendro",
  umur: 21,
  npk: "3321618",
  nilai: {
    SKD: 60,
    KBK: 70,
  },
};

function cetakMahas({ nama, umur, nilai: { SKD, KBK } }) {
  //menerima distructuring dari object mahas1
  return `halo nama saya ${nama}, usia ${umur}. `;
}

console.log(cetakMahas(mahas1)); //mengirim object
