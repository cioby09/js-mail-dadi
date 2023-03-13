const userMail = prompt("Accedi con il tuo indirizzo e-mail");

const autorizedMail = ["claudio@gmail.com", "mario@gmail.com", "giovanni@gmail.com", "chiara.com", "sara.com"]

let result = "Accesso negato";

for (let i = 0; i<autorizedMail.length; i++) {
    const mail = autorizedMail[i];

    if (mail.toLocaleLowerCase() === userMail.toLocaleLowerCase()) {
        result = "Accesso consentito";
    }
}

console.log(result);