function tambah(){
        var hasil = 0;
        for(i=0;i<arguments.length;i++){
        hasil += arguments[i]
    }
    return hasil
}
var coba = tambah(1,2,3,4)
console.log(coba)

// var a=parseInt(prompt('Masukan nilai 1: '));
// var b=parseInt(prompt('Masukan nilai 2: '));
// var hasil = tambah(a*2,b*2); //(a*2,b*2) adalah operasi matematik (ax2)+(bx2)
// console.log(hasil)

// var hasil = tambah(4,5);
// console.log(hasil)
// console.log(tambah(2,3))