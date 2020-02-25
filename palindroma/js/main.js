// Verifica se una parola è palindroma attraverso una funzione
// myString = 'yamamay';
// palindromeString = '';
// charAt() // riporta il carattere rispettivo all'indice specificato della stringa
// indexOf()
// utilizzare array e portare questo carattere in array con push? funzionerebbe?

// SOLUZIONE VISTA IN CLASSE:

var parolaInserita = prompt('Inserisci una parola');
var parolaPalindroma = palindroma(parolaInserita);
console.log(parolaPalindroma);

function palindroma(parola) {
    var parolaReverse = '';
    for (var i = (parola.length - 1); i >= 0; i--) {
        parolaReverse += parola[i];
    }
    return parolaReverse;
}

if (parolaPalindroma == parolaInserita) {
    console.log('La parola inserita è palindroma');
} else {
    console.log('La parola inserita non è palindroma');
}
