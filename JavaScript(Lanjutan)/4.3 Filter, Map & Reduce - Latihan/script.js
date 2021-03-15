// mengambil semua element
const item = Array.from(document.querySelectorAll("[data-duration]"));

// pilih vidio javascript lanjutan
let itemJS = item
  .filter((n) => {
    return n.textContent.includes("JAVASCRIPT LANJUTAN");
  })

  //Masukan jumlah vidio

  // ambil durasi masing2 Video
  .map((i) => i.dataset.duration)
  // ubah durasi menjadi float, merubah menit menjadi detik
  .map((m) => {
    // 17:33 menjadi array[17.33](split)
    const split = m.split(":").map((part) => parseFloat(part));
    return split[0] * 60 + split[1];
  })
  // jumlah semua detik, ubah menjadi menit
  .reduce((jml, satu) => jml + satu);

// Ubah format menjadi jam
const jam = Math.round(itemJS / 3600);
itemJS = itemJS - jam * 3600;

let menit = Math.floor(itemJS / 60);
let detik = Math.floor(itemJS - menit * 60);

// simpan ke DOM Total Durasi
const durasi = document.querySelector(".total-durasi");
durasi.innerHTML = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;

// simpan ke DOM jumlah Vidio
const jmlVid = item.filter((n) => n.textContent.includes("JAVASCRIPT LANJUTAN"))
  .length;

const jumlahVid = document.getElementsByClassName("jumlah-video")[0];
jumlahVid.innerHTML = `${jmlVid} Vidio`;
