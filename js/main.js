// --- crea numeri casuali e salva in un array (for)
const pcNumbers = [];
const userNumbers = [];
getRandom();
document.getElementById("numbers").innerHTML = pcNumbers;

// --- mostra numeri array su pagina (inner html)
// --- nascondi numeri dopo 30 sec (timer setTimeout)
// --- chiedi numeri ad utente e salva in un array (setTimeou)
// --- confronta i due array e stampa risultato (if else )







// funzioni

function getRandom() {
    for(i = 0; i < 5; i++) {
        pcNumbers.push(Math.floor(Math.random() * 100) + 1);
    }

}