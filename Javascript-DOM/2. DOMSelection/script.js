// DOM Sellection
// document.getElementsByID
// const judul = document.getElementById('judul')
// judul.style.color = 'cyan'
// judul.innerHTML = 'NALENDRO AGUNG'
// judul.style.backgroundColor = '#ccc'

//document.getElementsByTagName()-->
//menampilkan HTML collection

// const p = document.getElementsByTagName('p')
// // Mewarnai semua p yang ada.
// // daripada copy p[1]=p[4]
// // gunakan looping dan isi p[i]

// for (let i = 0; i < p.length; i++) {
//   p[0].style.backgroundColor = '#ccc'
// }

// const h1 = document.getElementsByTagName('h1')[0]
// h1.style.fontSize = '50px'

//document.getElementsByClassName()-->
//menampilkan HTML collection
// const p1 = document.getElementsByClassName('p1')
// p1[0].innerHTML = 'Ini diubah dari javaScript'

//document.querySelector()
// Menampilkan 1 elemen
const p4 = document.querySelector('#b p')
p4.style.color = 'yellow'
p4.style.fontSize = '20px'
p4.style.fontWeight = 'bold'

// const li2 = document.querySelector('section#b ul li:nth-child(1)')
// li2.style.backgroundColor = '#ccc'

// // document.querySelectorAll
// // menampilkan HTML Collection
// const pp = document.querySelectorAll('p')
// for (let i = 0; i < pp.length; i++) {
//   pp[i].style.backgroundColor = 'lightblue'
//   pp[i].style.borderRadius = '5px'
// }

// const sectionb = document.getElementById('b')
// const p4 = sectionb.getElementsByTagName('p')
// p4[0].style.backgroundColor = 'lightblue'
