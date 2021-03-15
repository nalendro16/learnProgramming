// 1. HTML Fragments
//
//  let mahas = {
//   nama: "Agung",
//   usia: 22,
//   npk: "3.32.16.1.18",
// };
// const el = `<div class="mhs">
// <h2>${mahas.nama}</h2>
// <h2>${mahas.usia}</h2>
// <h2>${mahas.npk}</h2></div>`;

// 2.Looping data
// const mahas = [
//   {
//     nama: "Nalendro",
//     npk: "33216118",
//   },
//   {
//     nama: "Agung",
//     npk: "33216118",
//   },
//   {
//     nama: "Wicaksono",
//     npk: "33216118",
//   },
// ];
// const el = `<div class="mhs">
// ${mahas
//   .map(
//     (m) => `<ul>
// <li>${m.nama}</li>
// <li>${m.npk}</li>
//   </ul>`
//   )
//   .join("")}
// </div>`;

//3.Pengkondisian
// const lagu = {
//   judul: "pig",
//   penyanyi: "pink floyd",
//   feat: "david gilmour",
// };

// const el = `<div class="lagu">
// <ul>
//   <li>${lagu.judul}</li>
//   <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
// </ul>
// </div>`; //pengkondisian saat ada feat

// document.body.innerHTML = el;

// 4. Nested
// HTML Fragment bersarang

const mhs = {
  nama: "Nalendro Agung W",
  semester: 5,
  mataKuliah: ["SKD", "KBK", "PLC", "Bahasa Inggris"],
};

function cetakMK(mataKuliah) {
  return `
  <ol>
  ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
  </ol>`;
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<p class="smt">Semester: ${mhs.semester}</p>
<h4>MATA KULIAH</h4>
${cetakMK(mhs.mataKuliah)}</div>`;

document.body.innerHTML = el;
