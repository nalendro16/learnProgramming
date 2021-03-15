//Higer order function
// function kerjakanTugas(matakuliah, selesai) {
//   console.log(`mulai kerjakan tugas ${matakuliah}...`);
//   selesai();
// }
// // Call back function
// function selesai() {
//   alert(`Selesai mengerjakan tugas`);
// }
// kerjakanTugas("SKD", selesai);

let total = 0,
  count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);
