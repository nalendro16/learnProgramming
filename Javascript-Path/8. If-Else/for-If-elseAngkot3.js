var jmlAngkot=10,
    noAngkot=1,
    angkotBeroperasi=6;

    for(noAngkot;noAngkot<=jmlAngkot;noAngkot++){

        if(noAngkot<=angkotBeroperasi && noAngkot !==5)
        //kondisi berubah karena 5 dikeluarkan dari 6
        {
            console.log('Angkot No. '+noAngkot+' Sedang beroperasi.')
        }        
        else if(noAngkot === 8 || noAngkot==10)
        {
            console.log('Angkot No. '+noAngkot+' Sedang lembur.')
        }
        else
        {
            console.log('Angkot No. '+noAngkot+' Sedang rusak.')
        }   
    }