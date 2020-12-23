// Manipulasi Array

// 1. Menambah Array
// var arr = [];
// arr[0] = "Agung";
// arr[1] = "Wicaksono";
// arr[2] = "Irbah";
// // arr[4] = "Kosong"; jika lgsg lompat ke 4 maka arr[3] undifined

// console.log(arr);

//2.Menghapus Isi array
// var arr = ["agung", "wicaksono", "irbah"];
// arr[1] = undefined;
// console.log(arr);

//3.Menampilkan Isi Array
// var arr = ["Agung", "Wicaksono", "Irbah", "Muaafi"];

// for (i = 0; i < arr.length; i++) {
//   console.log("Mahasiswa ke-" + (i + 1) + " : " + arr[i]);
// }

//-------------------------------Method--------------------

// //4. Join
// var arr = ["Agung", "Wicaksono", "Irbah"];
// console.log(arr.join(" - "));

//5. Push
// var arr = ["Agung", "Wicaksono", "Irbah"];
// arr.push("Muaafi", "Zakiyyah");
// console.log(arr.join(" - "));

//6. Pop
// var arr = ["Agung", "Wicaksono", "Irbah", "Muaafi"];
// arr.pop();
// console.log(arr.join(" - "));

//7.Unshift & Shift
// var arr = ["Agung", "Wicaksono", "Irbah"];
// arr.unshift("Muaafi");
// console.log(arr.join(" - "));

//7.Unshift & Shift
// var arr = ["Agung", "Wicaksono", "Irbah"];
// arr.unshift("Saya", "Adalah ");
// console.log(arr.join(" - "));

//8. Splice
// var arr = ["Agung", "Wicaksono", "Irbah"];
// arr.splice(1, 2, "Muaafi");
// console.log(arr.join(" - "));

//9. Slice
// var arr = ["Agung", "Wicaksono", "Irbah", "Muaafi", "Zakiyyah"];
// var arr2 = arr.slice(1, 3);
// console.log(arr2.join(" - "));

// 10.forEach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ["Nalendro", "Agung", "Wicaksono"];
// for (i = 1; i <= angka.length; i++) {
//   console.log(i);
// }
//==========Pengganti looping diatas========
// nama.forEach(function (j, i) {
//   console.log("Mahasiswa ke-" + (i + 1) + " adalah " + j);
// });

// 11.Map
// var ang = [1, 2, 5, 4, 3, 6];
// ang.map(function (e) {
//   return e * 2;
// });
// console.log(ang.join("-"));

// 12.Sort
// var ang = [1, 2, 5, 4, 3, 6];
// ang.sort();
// console.log(ang.join("-"));

// 13.Filter
var ang = [1, 2, 10, 5, 20, 3, 6, 8, 4];
var ang2 = ang.filter(function (e) {
  return e > 5;
});
console.log(ang2.join("-"));
