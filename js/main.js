// --- crea numeri casuali e salva in un array (for)
const pcNumbers = [];
const userNumbers = [];
getRandom();


// --- mostra numeri array su pagina (inner html)
document.getElementById("numbers").innerHTML = pcNumbers;

// --- nascondi numeri dopo 30 sec (timer setTimeout)
setTimeout(eraseNumbers, 3000);
// --- chiedi numeri ad utente e salva in un array (setTimeou)
setTimeout(askNumbers, 3000)

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

// funzione per cancellare innerHTML di numbers
function eraseNumbers(){
    document.getElementById("numbers").innerHTML = "";
}

// funzione per chiedere 5 numeri all utente
function askNumbers() {
    for(i = 0; i < 5; i++) {
        userNumbers.push(parseInt(prompt("Che numero hai visto?")));
    };
    console.log(userNumbers);
}
