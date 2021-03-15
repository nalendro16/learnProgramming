const angka = [8, 2, 4, 5, -1, 9, -4, -5, 10, 3];

//Mencari angka >=3 =================================

//menggunakan for
// const angkaBaru = [];
// for (i = 0; i <= angka.length; i++) {
//   if (angka[i] >= 3) {
//     angkaBaru.push(angka[i]);
//   }
// }
// console.log(angkaBaru);

//Menggunakan Filter
// const angkaFilter = angka.filter((n) => n >= 3);
// console.log(angkabaru);

//MAP ===============================================
// kalikan semua angka dengan 2
// const angkaBaru = angka.map((a) => a * 2);
// console.log(angkaBaru);
// console.log(angka);

// Reduce ============================================
//jumlahkan seluruh elemen pada array
//8 + 2 + 4 + 5 + -1 + 9 + -4 + -5 + 19 + 3

// const angkaJml = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(angkaJml);

// Method Chaining
// Mencari Angka>5, dikali 3, dijumlah masing2

const hasil = angka
  .filter((a) => a > 5) // 8,9,10
  .map((a) => a * 3) //24,27,30
  .reduce((nilai, pengali) => {
    return nilai + pengali; //
  });
console.log(hasil);
