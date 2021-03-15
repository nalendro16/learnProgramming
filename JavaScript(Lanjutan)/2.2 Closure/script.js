// function waktuSalam(waktu) {
//   // let nama = "nalendro";
//   return function (nama) {
//     console.log(`selamat ${nama} selamat ${waktu}`);
//   };
// }
// let panggilPagi = waktuSalam("Pagi");
// let panggilSore = waktuSalam("Sorei");
// let panggilMalam = waktuSalam("Malam");
// panggilPagi("Agung");
// panggilSore("Wicaksono");
// panggilMalam("Nalendro"); //panggilMalam adalah factory function

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
