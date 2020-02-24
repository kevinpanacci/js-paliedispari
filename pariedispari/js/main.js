// L'utente inserisce un numero da 1 a 5 e dichiara pari o dispari. Il computer crea un numero da uno a cinque. I due numeri vengono sommati e in base al
// risultato si dichiara il vincitore.

// 1. L'utente inserisce un numero ok
// 2. L'utente dichiara se lui vincerà con pari o dispari ok
// 3. Il computer crea un numero da uno a cinque ok
// 4. Verificare che l'utente inserisca un numero da 1 a 5
// 5. Sommare i due numeri ok
// 6. Dichiarare il vincitore in base alla scelta dell'utente

var numeroUtente = parseInt(prompt('Inscerisci un numero da 1 a 5')); // .1
var sceltaUtente = prompt('Decidi pari o dispari'); // .2
var numeroComputer = Math.floor(Math.random() * 6); // .3
var sommaNumeri = numeroUtente + numeroComputer; // .5
console.log('L\'utente ha scelto ' + numeroUtente + ', inoltre vincerà se uscirà: ' + sceltaUtente);
console.log('Il computer ha scelto: ' + numeroComputer);
console.log('La somma dei numeri è: ' + sommaNumeri);

function verificaVincitore() {
    if (sommaNumeri % 2 == 0)   {
        if (sceltaUtente == 'pari') {
            console.log('L\'utente ha vinto');
        }
    } else if (sommaNumeri % 2 == 1) {
        if (sceltaUtente == 'dispari') {
            console.log('L\'utente ha vinto');
        }
    } else {
        console.log('Il computer ha vinto');
    }
}

verificaVincitore(sommaNumeri, sceltaUtente);
