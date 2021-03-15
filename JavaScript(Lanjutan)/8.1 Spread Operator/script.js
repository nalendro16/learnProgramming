// Spread Operator
// Memecah itterable menjadi single element

//Menggabungkan 2 array
// const mhs = ["nalendro", "Agung", "Wicaksono"];
// const nama = ["Nal", "Agu", "Wicaks"];
// const campur = mhs.concat(nama);
// console.log(campur);

// Mencopy Array
// const mhs = ["nalendro", "Agung", "Wicaksono"];
// const mhs1 = [...mhs];
// mhs1[0] = "Siapa";
// console.log(mhs);

// Mengganti isi li
// const liMhs = document.querySelectorAll("li");
// // const mahas = [];
// // //mengisi array mahas dgn li
// // for (i = 0; i < liMhs.length; i++) {
// //   mahas.push(liMhs[i].textContent);
// // }

// // console.log(mahas);

// //mengubah li dgn cara func
// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

//mengubah warna tulisan saat hover
const name = document.getElementsByClassName("nama")[0];
const hober = [...name.textContent].map((n) => `<span>${n}</span>`).join("");
name.innerHTML = hober;
