//Scrivere un programma che chieda all’utente:
//Il numero di chilometri da percorrere
//Età del passeggero
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.

const calculate=document.getElementById ('calculate')
const result=document.getElementById ('result')

calculate.addEventListener ('click', (e) => {
 e.preventDefault();

 const km=document.getElementById('km').value;
 const age=document.getElementById('age').value; 


 //richiesta all' utente


 //const Km= parseFloat(prompt('Quanti km vuoi percorrere?'));
 //const eta= parseFloat(prompt('Quanti anni hai?')); 
 
 //calcolo prezzo Base
 const basePrice= 0.21 * km;
 //questa variabile conterrà il prezzo finale da mostrare
 let finalPrice;

 // sconto apliicato in base alla età
 if(age <18){
 finalPrice = basePrice - basePrice * 20 / 100;

 }else if(age >65) {
    finalPrice= basePrice - basePrice * 40 / 100;
  
 }else{
 finalPrice = basePrice;

 }
 console.log(`Il prezzo del biglietto è di ${finalPrice.toFixed(2)}`);
 result.innerText = `Km percorsi: ${km}, età del passeggero: ${age},  Il prezzo del biglietto è di: ${finalPrice.toFixed(2)}`

})

