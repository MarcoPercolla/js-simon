// --- crea numeri casuali e salva in un array (for)
const pcNumbers = [];
const userNumbers = [];
let indovinate = 0;
getRandom();


// --- mostra numeri array su pagina (inner html)
document.getElementById("numbers").innerHTML = pcNumbers;

// --- nascondi numeri dopo 30 sec (timer setTimeout)
setTimeout(eraseNumbers, 3000);
// --- chiedi numeri ad utente e salva in un array (setTimeou)
setTimeout(askNumbers, 3050)

// --- confronta i due array e stampa risultato (if else )







// funzioni

// funzione random
function getRandom() {
    for (i = 0; i < 5; i++) {
        pcNumbers.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log(pcNumbers);

}
// funzione generica cancella innerelementbyid
// function eraseId(id) {
//     document.getElementById(`"${id}"`).innerHTML = "";
// };

// funzione per cancellare innerHTML di numbers
function eraseNumbers() {
    document.getElementById("numbers").innerHTML = "";
}

// funzione per chiedere 5 numeri all utente
function askNumbers() {
    for (i = 0; i < 5; i++) {
        userNumbers.push(parseInt(prompt("Che numero hai visto?")));
    };
    
    console.log(userNumbers);
    checkArrays(pcNumbers, userNumbers)

}

// funzione per verificare la corrispondenza tra i numeri random e i numeri utente(in generale tra i numeri di due array con la stessa lunghezza)
//purtroppo vanno inseriti in ordine

function checkArrays(firstArr, secondArr) {
    

    for (let i = 0; i < firstArr.length; i++) {
        const element = secondArr[i];
        console.log(element);

        // if (element == firstArr[i]) {
        if (firstArr.indexOf(element) > -1) {    
            indovinate++;
            
            console.log("a");
            console.log(indovinate);
        }else{
            
            console.log("b");
            console.log(indovinate);
        }
        
        
        console.log(indovinate);
    }

    if (indovinate == 5) {
        console.log("hai vinto");
        document.getElementById("numbers").innerHTML = `hai vinto`;

    }else{
        console.log("non hai vinto");
        document.getElementById("numbers").innerHTML = `hai perso, hai indovinato solo ${indovinate} parole`;
    }
    
}