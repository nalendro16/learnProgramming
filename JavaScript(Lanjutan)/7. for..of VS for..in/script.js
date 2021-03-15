// For Of
// const mhs = ["Nalendro", "Agung", "Wicaksono"];

// Pengulangan dengan for
// for (i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// Pengulangan dengan func
// mhs.forEach((m) => console.log(m));

// // Pengulangan dengan for..of
// for (const mahas of mhs) {
//   console.log(mahas);
// }

//Looping dengan String
// const nama = "Nalendro";
// for (const mahas of nama) {
//   console.log(mahas);
// }

// Array pengulangan
// const mhs = ["Nalendro", "Agung", "Wicaksono"]; //array tidak bisa pakai for of kecuali diakali
// mhs.forEach((mhs, i) => {
//   console.log(`${mhs} Mahasiswa ke -${i}`);
// });

// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} Mahasiswa ke -${i}`);
// }

// NodeList
// let box = document.querySelectorAll(".nama");

// box.forEach((n) => console.log(n.innerHTML));
// for (n of box) {
//   console.log(n.innerHTML);
// }

// Arguments
// function jumlahkanAngka() {
//   //   return [1, 2, 3, 4, 5].reduce((a, i) => a + i);
//   let jml = 0;
//   for (a of arguments) {
//     jml += a;
//   }
//   return jml;
// }
// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for in=================================
// mengganti isi menggunakan for in
const mhs = {
  nama: "nalendro",
  usia: 21,
  email: "nalendro@gmail.oc",
};
for (mg in mhs) {
  console.log(mhs[mg]); //[mg] untuk mengambiil index dari isi properti obj mhs
}
