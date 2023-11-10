// --- crea numeri casuali e salva in un array (for)
const pcNumbers = [];
const userNumbers = [];
getRandom();


// --- mostra numeri array su pagina (inner html)
document.getElementById("numbers").innerHTML = pcNumbers;

// --- nascondi numeri dopo 30 sec (timer setTimeout)
setTimeout(eraseNumbers, 3000);
// --- chiedi numeri ad utente e salva in un array (setTimeou)
// --- confronta i due array e stampa risultato (if else )







// funzioni

// funzione random
function getRandom() {
    for(i = 0; i < 5; i++) {
        pcNumbers.push(Math.floor(Math.random() * 100) + 1);
    }

}
// funzione generica cancella innerelementbyid
// function eraseId(id) {
//     document.getElementById(`"${id}"`).innerHTML = "";
// };
function eraseNumbers(){
    document.getElementById("numbers").innerHTML = "";
}




