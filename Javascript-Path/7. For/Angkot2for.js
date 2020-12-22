var jmlAngkot = prompt('Masukan Jumlah Angkot: ');
var angkotBeroprasi=prompt('Masukan Jumlah Angkot Beroperasi: '); 
var noAngkot=1;

while(noAngkot<=angkotBeroprasi){
    console.log('Angkot No. '+ noAngkot +' Beroperasi dengan baik.')
    noAngkot++;
}

for(angkotBeroprasi;noAngkot<= jmlAngkot;noAngkot++){//nilai awal angkotBeroperasi karena agar saat angkot beroperasi berubah maka otomatis berubah. noAngkot dimulai dari 7, karen a1-6 sudah diproses di while
    console.log('Angkot No. ' + noAngkot + ' Tidak beroperasi.')
}
