//Scrivere un programma che chieda all’utente:
//Il numero di chilometri da percorrere
//Età del passeggero
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.


//richiesta all' utente
const km= parseFloat(prompt('Quanti km vuoi percorrere?'));

const eta= parseFloat(prompt('Quanti anni hai?'));
//questa variabile conterrà il prezzo finale da mostrare
let finalPrice;
//calcolo prezzo Base
const basePrice= 0.21 * km;

// sconto apliicato in base alla età
if (eta <18){
finalPriceù = basePrice - basePrice * 20 / 100;

}else if (eta >65) {
    finalPrice= basePrice - basePrice * 40 / 100;
 
}else (){
finalPrice = basePrice;

}

