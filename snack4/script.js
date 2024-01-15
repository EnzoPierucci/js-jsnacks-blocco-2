let numeroInserito = parseInt(prompt("Inserisci un numero:"));

if (!isNaN(numeroInserito)) {
    for (let i = numeroInserito; i <= numeroInserito + 1; i++) {
        if (i % 2 === 0) {
            console.log("Il numero è pari:", i);
        } else {
            console.log("Il numero è dispari, il successivo è:", i + 1);
        }
    }

}
