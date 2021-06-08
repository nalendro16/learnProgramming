// //Event Handler===========================
// // Melakukan aksi pada JS saat klik paragraf 3
// const p3 = document.getElementsByTagName("p")[2];

// function ubahWarnaP2() {
//   p2.style.backgroundColor = "lightblue";
// }

// function ubahWarnaP3() {
//   p3.style.backgroundColor = 'lightblue'
// }
// Melakukan aksi pada JS saat klik paragraf 2
// const p2 = document.getElementsByTagName('p')[1]
// p2.onclick = ubahWarnaP2

// //Event Listener=================================
// const p4 = document.getElementsByTagName("p")[3];
// p4.addEventListener("click", function () {
//   const ul = document.querySelector("section#b ul");
//   const li = document.createElement("li");
//   const textLi = document.createTextNode("Item JS");

//   li.appendChild(textLi); //menambah Text li kedalam li
//   ul.appendChild(li); //menambah li yg sudah diberi Text, kedalam parent
// });

//P3 berubah warna saat di klik tetapi tulisan tidak berubah warn

// const p3 = document.querySelector(".p3");
// p3.onclick = function () {
//   p3.style.backgroundColor = "lightblue";
// };

// p3.onclick = function () {
//   p3.style.color = "Red";
// };

// Menggunakan event handler event pertama ditimpa hasilnya = tulisan merah

const p3 = document.querySelector('.p3')

p3.addEventListener('mouseenter', function () {
  p3.style.backgroundColor = 'lightblue'
})
p3.addEventListener('mouseleave', function () {
  p3.style.backgroundColor = 'white'
})
//bisa digunakan bersamaan
