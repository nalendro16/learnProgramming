// Distructuring Bariable

// Distructuring Array
// const prof = ["Halo", "Nalendro", 21, "nalendroagungw@gmail.com"];

// const [salam, nama, umur, email] = prof;

// Skip item nama dan umur
// const [salam, , , email] = prof;
// console.log(salam);

// Swap item array
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//return value pada Fn
// function coba() {
//   return [1, 2];
// }
// const [a, b] = coba();
// console.log(b);

// rest parameter(...) saat nilai bertambah
// const [a, ...av] = [1, 2, 3, 6, 6, 9];
// console.log(a);
// console.log(av);

// Disctructuring Object
// let mhs = {
//   nama: "nalendro",
//   umur: 21,
//   email: "nalendroagungw@gmail.com",
// };

// const { nama, umur, email } = mhs;
// console.log(mhs);

// Assigment tanpa deklarasi object

// ({ nama, umur, email } = {
//   nama: "nalendro",
//   umur: 21,
//   email: "nalendroagungw@gmail.com",
// });
// console.log(nama, umur, email);

// Assign nama baru dari object
// let mhs = {
//   nama: "nalendro",
//   umur: 21,
//   email: "nalendroagungw@gmail.com",
// };

// const { nama: name, umur, email } = mhs; //ganti nama nama menjadi name
// console.log(name);

// Memberikan default value
// let mhs = {
//   nama: "nalendro",
//   umur: 21,
//   email: "nalendroagungw@gmail.com",
//   kampus: ` Politeknik`,
// };

// const { nama, umur, email, kampus = "Polines" } = mhs;
// console.log(kampus);

// memberi nilai default dan assign ke variable baru
// let mhs = {
//   nama: "nalendro",
//   umur: 21,
//   email: "nalendroagungw@gmail.com",
//   kampus: ` Politeknik`,
// };

// const { nama, umur, email, kampus: e = "Polines" } = mhs;
// console.log(e);

// let mhs = {
//   nama: "nalendro",
//   umur: 21,
//   email: "nalendroagungw@gmail.com",
//   kampus: ` Politeknik`,
// };

// const { nama, ...value } = mhs;
// console.log(value);

// mengambil field, setelah kirim sebagai parameter utk fn

let mhs = {
  id: 555,
  nama: "nalendro",
  umur: 21,
  email: "nalendroagungw@gmail.com",
  kampus: ` Politeknik`,
};

function getID({ nama }) {
  //membungkar isi mhs dan mengambil nama
  return nama;
}
console.log(getID(mhs)); //mengambil variable mhs
