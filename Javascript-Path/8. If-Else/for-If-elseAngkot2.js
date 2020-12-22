var jmlAngkot=10,
    noAngkot=1,
    angkotBeroperasi=6;

    for(noAngkot;noAngkot<=jmlAngkot;noAngkot++){

        if(noAngkot === 8 || noAngkot==10)//atau menggunakan else if lagi
        {
            console.log('Angkot No. '+noAngkot+' Sedang lembur.')
        }
        else if(noAngkot<=angkotBeroperasi)
        {
            console.log('Angkot No. '+noAngkot+' Sedang beroperasi.')
        }
        else
        {
            console.log('Angkot No. '+noAngkot+' Sedang rusak.')
        }   
    }