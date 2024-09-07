var jmlAngkot = 10;
var angkotBeropeasi = 6;
var noAngkot = 1;
for (noAngkot; noAngkot <= jmlAngkot; noAngkot++ ){
    if(noAngkot <= angkotBeropeasi){
        console.log("angkot No." + noAngkot + " beroperasi dengan baik")
    }else if(noAngkot === 8 ){
        console.log("angkot No." + noAngkot + " sedang lembur")
    }else if(noAngkot === 10 ){
            console.log("angkot No." + noAngkot + " sedang lembur")
    }else{
        console.log("angkot No." + noAngkot + " sedang tidak beroperasi")
    }
}