// Genera un numero random da 1 a 6 per il computer
const computerNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log(computerNumber);

// Genera un numero random da 1 a 6 per l'utente
const userNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log(userNumber);

// Stabilisco il vincitore, in base a chi fa il punteggio più alto
if (computerNumber > userNumber) {
    console.log("Il computer vince!");
} else if (computerNumber < userNumber) {
    console.log("Hai vinto!")
} else {
    console.log("Pareggio!");
}