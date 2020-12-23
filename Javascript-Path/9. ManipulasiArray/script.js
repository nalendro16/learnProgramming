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
var arr = ['Agung', 'Wicaksono', 'Irbah', 'Muaafi']

for (i = 0; i < arr.length; i++) {
  console.log('Mahasiswa ke-' + (i + 1) + ' : ' + arr[i])
}

//-------------------------------Method--------------------

//4. Join
var arr = ['Agung', 'Wicaksono', 'Irbah']
console.log(arr.join(' - '))

//5. Push
var arr = ['Agung', 'Wicaksono', 'Irbah']
arr.push('Muaafi')
console.log(arr.join(' - '))
