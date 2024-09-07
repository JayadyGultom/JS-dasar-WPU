var jmlAngkot = 10;
var angkotBeropeasi = 6;
var noAngkot = 1;
for(noAngkot; noAngkot <= jmlAngkot;noAngkot++){
    if(noAngkot <= angkotBeropeasi && noAngkot !== 5){
        console.log("Ankot No." + noAngkot + " beroperasi dengan baik")
    }else if(noAngkot === 5 || noAngkot === 8 || noAngkot === 10){
        console.log("Ankot No." + noAngkot + " sedang lembur")
    }else{
        console.log("Angkot no." + noAngkot + "sedang tidak beroperasi")
    }
}