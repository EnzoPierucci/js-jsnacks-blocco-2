const numeroCasuale = Math.floor(Math.random() * 100) + 1;

let tentativoUtente;
let indovinato = false;

while (!indovinato) {
    tentativoUtente = parseInt(prompt("Indovina il numero (tra 1 e 100):"));

    if (!isNaN(tentativoUtente)) {
        if (tentativoUtente === numeroCasuale) {
            console.log("Complimenti! Hai indovinato il numero:", numeroCasuale);
            indovinato = true;
        } else if (tentativoUtente > numeroCasuale) {
            console.log("Il numero è troppo alto. Prova di nuovo.");
        } else {
            console.log("Il numero è troppo basso. Prova di nuovo.");
        }
    } else {
        alert("Inserisci un numero valido.");
    }
}
