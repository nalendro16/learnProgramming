let mhs = {
  nama: 'Nalendro Agung',
  umur: 21,
  ips: [3.0, 3.0, 3.11, 3.12, 3.12, 3.21],
  ipk: function () {
    let total = 0
    let ipsem = this.ips
    for (i = 0; i < this.ips.length; i++) {
      total += ipsem[i]
    }
    // fungsi pembulatan
    return Math.round(total / ipsem.length)
  },
}
mhs.ipk()
