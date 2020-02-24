// L'utente inserisce un numero da 1 a 5 e dichiara pari o dispari. Il computer crea un numero da uno a cinque. I due numeri vengono sommati e in base al
// risultato si dichiara il vincitore.

// 1. L'utente inserisce un numero
// 2. L'utente dichiara se lui vincerà con pari o dispari
// 3. Il computer crea un numero da uno a cinque
// 4. Verificare che l'utente inserisca un numero da 1 a 5
// 5. Sommare i due numeri
// 6. Dichiarare il vincitore in base alla scelta dell'utente

var numeroUtente = parseInt(prompt('Inscerisci un numero da 1 a 5')); // .1
var sceltaUtente = prompt('Decidi pari o dispari'); // .2
var numeroComputer = Math.floor(Math.random() * 6); // .3
var sommaNumeri = numeroUtente + numeroComputer; // .5
console.log('L\'utente ha scelto ' + numeroUtente + ', inoltre vincerà se uscirà: ' + sceltaUtente);
console.log('Il computer ha scelto: ' + numeroComputer);
console.log('La somma dei numeri è: ' + sommaNumeri);
