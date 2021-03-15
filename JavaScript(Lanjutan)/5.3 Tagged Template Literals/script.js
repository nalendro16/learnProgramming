// Tagged Templates
// const nama = "Nalendro";
// const umur = 21;
// const email = "nalendroagung@gmail.com";

// function func(strings, ...values) {
//... untuk mengambil semua expression dari tamplate literals
// return str;

// let hasil = "";
// strings.forEach((str, i) => {
//   hasil += `${str}${values[i] || ""}`;
// });
// return hasil;

//   return strings.reduce(
//     (hasil, str, i) => `${hasil}${str}${values[i] || ""}`,
//     ""
//   );
// }
// const str = func`Hallo saya ${nama}, Usia saya ${umur} tahun, anda bisa menghubungi di ${email}.`;

// console.log(str);

// Highligh
const nama = "Nalendro";
const umur = 21;
const email = "nalendroagung@gmail.com";
const terimakasih = "terimakasih";

function highlight(strings, ...values) {
  return strings.reduce(
    (hasil, str, i) =>
      `${hasil}${str} <span class="hl"> ${values[i] || ""}</span>`,
    ""
  );
}
const str = highlight`Hallo saya ${nama}, Usia saya ${umur} tahun, anda bisa menghubungi di ${email}, ${terimakasih}.`;

document.body.innerHTML = str;
