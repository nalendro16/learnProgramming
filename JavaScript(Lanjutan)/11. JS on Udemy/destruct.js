// destruct array
// const name = ['nalendro', 'agung', 'wicaksono', 'nal']
// ;[nm1, , , nm4] = name
// console.log(nm1, nm4)

// destruct object
const bio = { nama: 'nalendro', usia: 22, gender: 'laki-laki' },
  { nama, usia } = bio
console.log(nama, usia)
